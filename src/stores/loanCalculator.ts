import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface LoanApplication {
  personalInfo: {
    monthlyIncome: number;
    monthlyExpenses: number;
    numberOfKids: number;
    transportCosts: number;
    combinedIncome: number;
  };
  financialInfo: {
    existingLoans: number;
    otherPaymentObligations: number;
    creditScore: number;
  };
  loanDetails: {
    requestedAmount: number;
    loanTerm: number; // in months
    interestRate: number;
  };
}

const defaultApplication: LoanApplication = {
  personalInfo: {
    monthlyIncome: 0,
    monthlyExpenses: 0,
    numberOfKids: 0,
    transportCosts: 0,
    combinedIncome: 0,
  },
  financialInfo: {
    existingLoans: 0,
    otherPaymentObligations: 0,
    creditScore: 0,
  },
  loanDetails: {
    requestedAmount: 0,
    loanTerm: 60,
    interestRate: 8.5,
  }
};

export const useLoanCalculatorStore = defineStore('loanCalculator', () => {
  const application = ref<LoanApplication>(JSON.parse(JSON.stringify(defaultApplication)));

  const isApplicationComplete = computed(() => {
    const { personalInfo, loanDetails } = application.value;
    return (
      personalInfo.monthlyIncome > 0 &&
      personalInfo.combinedIncome > 0 &&
      loanDetails.requestedAmount > 0
    );
  });

  const netIncome = computed(() => {
    const { personalInfo } = application.value;
    return personalInfo.combinedIncome - personalInfo.monthlyExpenses - personalInfo.transportCosts;
  });

  const debtToIncomeRatio = computed(() => {
    const { personalInfo, financialInfo } = application.value;
    const totalDebt = financialInfo.existingLoans + financialInfo.otherPaymentObligations;
    return personalInfo.combinedIncome > 0 ? (totalDebt / personalInfo.combinedIncome) * 100 : 0;
  });

  const monthlyPayment = computed(() => {
    const { loanDetails } = application.value;
    const { requestedAmount, loanTerm, interestRate } = loanDetails;
    
    if (requestedAmount <= 0 || loanTerm <= 0) return 0;
    
    const monthlyRate = interestRate / 100 / 12;
    const payment = (requestedAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    
    return Math.round(payment * 100) / 100;
  });

  const loanEligibility = computed(() => {
    const debt = debtToIncomeRatio.value;
    const net = netIncome.value;
    const payment = monthlyPayment.value;
    
    if (debt > 40) return { eligible: false, reason: 'Debt-to-income ratio too high' };
    if (net < payment * 1.5) return { eligible: false, reason: 'Insufficient net income' };
    if (net < 5000) return { eligible: false, reason: 'Minimum net income requirement not met' };
    
    return { eligible: true, reason: 'Application meets all criteria' };
  });

  const updatePersonalInfo = (info: Partial<LoanApplication['personalInfo']>) => {
    application.value.personalInfo = { ...application.value.personalInfo, ...info };
  };

  const updateFinancialInfo = (info: Partial<LoanApplication['financialInfo']>) => {
    application.value.financialInfo = { ...application.value.financialInfo, ...info };
  };

  const updateLoanDetails = (details: Partial<LoanApplication['loanDetails']>) => {
    application.value.loanDetails = { ...application.value.loanDetails, ...details };
  };

  const resetApplication = () => {
    application.value = JSON.parse(JSON.stringify(defaultApplication));
  };

  return {
    application,
    isApplicationComplete,
    netIncome,
    debtToIncomeRatio,
    monthlyPayment,
    loanEligibility,
    updatePersonalInfo,
    updateFinancialInfo,
    updateLoanDetails,
    resetApplication
  };
});