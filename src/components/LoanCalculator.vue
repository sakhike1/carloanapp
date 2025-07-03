<template>
  <section id="loan-calculator" class="py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 class="text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-secondary-700 bg-clip-text text-transparent mb-6">
          Loan Calculator
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Calculate your monthly payments and see what you can afford with our interactive loan calculator
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Calculator Form -->
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Calculate Your Loan</h3>
          
          <div class="space-y-6">
            <BaseInput
              v-model="calculatorData.loanAmount"
              type="number"
              label="Loan Amount"
              placeholder="Enter loan amount"
              prefix="R"
              :min="50000"
              :max="2000000"
              :step="10000"
              hint="Amount you want to borrow"
            />
            
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-gray-800">
                Loan Term
              </label>
              <div class="relative group">
                <select
                  v-model="calculatorData.loanTerm"
                  class="block w-full rounded-xl border-0 bg-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-300 focus:ring-2 focus:ring-inset focus:ring-primary-500 hover:ring-gray-400 py-3.5 px-4 text-base font-medium"
                >
                  <option value="36">3 years (36 months)</option>
                  <option value="48">4 years (48 months)</option>
                  <option value="60">5 years (60 months)</option>
                  <option value="72">6 years (72 months)</option>
                  <option value="84">7 years (84 months)</option>
                </select>
                <div class="absolute inset-0 rounded-xl border-2 border-transparent group-focus-within:border-primary-400 group-focus-within:shadow-lg group-focus-within:shadow-primary-100 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>

            <BaseInput
              v-model="calculatorData.interestRate"
              type="number"
              label="Interest Rate"
              placeholder="Enter interest rate"
              suffix="% APR"
              :min="3"
              :max="25"
              :step="0.1"
              hint="Annual percentage rate"
            />

            <BaseInput
              v-model="calculatorData.downPayment"
              type="number"
              label="Down Payment (Optional)"
              placeholder="Enter down payment"
              prefix="R"
              :min="0"
              :step="1000"
              hint="Amount you can pay upfront"
            />
          </div>
        </div>

        <!-- Results -->
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl shadow-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6">Your Monthly Payment</h3>
            <div class="text-center">
              <p class="text-6xl font-bold mb-2">R{{ monthlyPayment.toLocaleString() }}</p>
              <p class="text-primary-100">per month for {{ calculatorData.loanTerm }} months</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 font-medium">Total Interest</p>
                  <p class="text-xl font-bold text-gray-900">R{{ totalInterest.toLocaleString() }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 002 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 font-medium">Total Amount</p>
                  <p class="text-xl font-bold text-gray-900">R{{ totalAmount.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Loan Breakdown Chart -->
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Loan Breakdown</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Principal Amount</span>
                <span class="font-semibold">R{{ finalLoanAmount.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Down Payment</span>
                <span class="font-semibold">R{{ calculatorData.downPayment.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Total Interest</span>
                <span class="font-semibold">R{{ totalInterest.toLocaleString() }}</span>
              </div>
              <div class="border-t pt-3 flex justify-between items-center">
                <span class="text-gray-900 font-semibold">Total Cost</span>
                <span class="font-bold text-lg">R{{ (calculatorData.loanAmount + totalInterest).toLocaleString() }}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton 
              size="lg" 
              full-width
              @click="scrollToApplication"
              class="transform hover:scale-105 transition-transform duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Apply for This Loan
            </BaseButton>
            <BaseButton 
              variant="outline" 
              size="lg"
              full-width
              @click="resetCalculator"
              :loading="isResetting"
            >
              <svg v-if="!isResetting" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {{ isResetting ? 'Resetting...' : 'Reset Calculator' }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNotificationStore } from '@/stores/notifications';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

const notificationStore = useNotificationStore();

const defaultCalculatorData = {
  loanAmount: 500000,
  loanTerm: 60,
  interestRate: 8.5,
  downPayment: 0
};

const calculatorData = ref({ ...defaultCalculatorData });
const isResetting = ref(false);

const finalLoanAmount = computed(() => {
  return Math.max(0, calculatorData.value.loanAmount - calculatorData.value.downPayment);
});

const monthlyPayment = computed(() => {
  const principal = finalLoanAmount.value;
  const monthlyRate = calculatorData.value.interestRate / 100 / 12;
  const numPayments = calculatorData.value.loanTerm;
  
  if (principal <= 0 || monthlyRate <= 0 || numPayments <= 0) return 0;
  
  const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                 (Math.pow(1 + monthlyRate, numPayments) - 1);
  
  return Math.round(payment);
});

const totalAmount = computed(() => {
  return monthlyPayment.value * calculatorData.value.loanTerm;
});

const totalInterest = computed(() => {
  return Math.max(0, totalAmount.value - finalLoanAmount.value);
});

const scrollToApplication = () => {
  const element = document.getElementById('loan-application');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const resetCalculator = async () => {
  isResetting.value = true;
  
  try {
    // Reset calculator data to defaults
    calculatorData.value = { ...defaultCalculatorData };
    
    // Show success notification
    notificationStore.addNotification({
      type: 'success',
      title: 'Calculator Reset',
      message: 'Calculator has been reset to default values.',
      duration: 3000
    });
    
    // Small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
  } catch (error) {
    // Show error notification
    notificationStore.addNotification({
      type: 'error',
      title: 'Reset Failed',
      message: 'There was an error resetting the calculator. Please try again.',
      duration: 5000
    });
  } finally {
    isResetting.value = false;
  }
};
</script>