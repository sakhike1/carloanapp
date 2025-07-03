<template>
  <section id="loan-application" class="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 class="text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-secondary-700 bg-clip-text text-transparent mb-6">
          Apply for Your Car Loan
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Complete the form below to get your personalized loan offer with competitive rates and flexible terms
        </p>
      </div>

      <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
        <!-- Reset Button -->
        <div class="flex justify-end mb-6">
          <BaseButton
            variant="ghost"
            size="sm"
            @click="handleResetForm"
            :loading="isResettingForm"
            class="text-gray-600 hover:text-gray-800"
          >
            <svg v-if="!isResettingForm" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ isResettingForm ? 'Resetting...' : 'Reset Form' }}
          </BaseButton>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-12">
          <!-- Personal Information -->
          <div class="animate-slide-up">
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Personal Information</h3>
                <p class="text-gray-600">Tell us about your income and household</p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BaseInput
                v-model="personalInfo.monthlyIncome"
                type="number"
                label="Monthly Income"
                placeholder="Enter your monthly income"
                prefix="R"
                required
                :min="0"
                :step="1000"
                hint="Your gross monthly salary before deductions"
              />
              <BaseInput
                v-model="personalInfo.combinedIncome"
                type="number"
                label="Combined Household Income"
                placeholder="Total household income"
                prefix="R"
                required
                :min="0"
                :step="1000"
                hint="Include spouse/partner income if applicable"
              />
              <BaseInput
                v-model="personalInfo.monthlyExpenses"
                type="number"
                label="Monthly Living Expenses"
                placeholder="Total monthly expenses"
                prefix="R"
                required
                :min="0"
                :step="500"
                hint="Rent, groceries, utilities, insurance, etc."
              />
              <BaseInput
                v-model="personalInfo.transportCosts"
                type="number"
                label="Current Transport Costs"
                placeholder="Monthly transport expenses"
                prefix="R"
                required
                :min="0"
                :step="100"
                hint="Fuel, public transport, current car payments"
              />
              <BaseInput
                v-model="personalInfo.numberOfKids"
                type="number"
                label="Number of Dependents"
                placeholder="Number of children/dependents"
                required
                :min="0"
                :max="20"
                hint="Children and other financial dependents"
              />
            </div>
          </div>

          <!-- Financial Information -->
          <div class="animate-slide-up border-t border-gray-200 pt-12" style="animation-delay: 0.2s">
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Financial Obligations</h3>
                <p class="text-gray-600">Current debts and payment commitments</p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BaseInput
                v-model="financialInfo.existingLoans"
                type="number"
                label="Existing Loan Payments"
                placeholder="Monthly loan payments"
                prefix="R"
                required
                :min="0"
                :step="500"
                hint="Home loans, personal loans, etc."
              />
              <BaseInput
                v-model="financialInfo.otherPaymentObligations"
                type="number"
                label="Other Payment Obligations"
                placeholder="Credit cards, store accounts"
                prefix="R"
                required
                :min="0"
                :step="100"
                hint="Credit cards, store accounts, maintenance"
              />
              <BaseInput
                v-model="financialInfo.creditScore"
                type="number"
                label="Credit Score (Optional)"
                placeholder="Your credit score"
                :min="300"
                :max="850"
                hint="This helps us provide better rates (optional)"
              />
            </div>
          </div>

          <!-- Loan Details -->
          <div class="animate-slide-up border-t border-gray-200 pt-12" style="animation-delay: 0.4s">
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Loan Requirements</h3>
                <p class="text-gray-600">How much do you need and for how long?</p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BaseInput
                v-model="loanDetails.requestedAmount"
                type="number"
                label="Requested Loan Amount"
                placeholder="How much do you need?"
                prefix="R"
                required
                :min="50000"
                :max="2000000"
                :step="10000"
                hint="Minimum R50,000 - Maximum R2,000,000"
              />
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-800">
                  Loan Term
                  <span class="text-red-500 ml-1">*</span>
                </label>
                <div class="relative group">
                  <select
                    v-model="loanDetails.loanTerm"
                    class="block w-full rounded-xl border-0 bg-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-300 focus:ring-2 focus:ring-inset focus:ring-primary-500 hover:ring-gray-400 py-3.5 px-4 text-base font-medium"
                    required
                  >
                    <option value="36">3 years (36 months)</option>
                    <option value="48">4 years (48 months)</option>
                    <option value="60">5 years (60 months)</option>
                    <option value="72">6 years (72 months)</option>
                    <option value="84">7 years (84 months)</option>
                  </select>
                  <div class="absolute inset-0 rounded-xl border-2 border-transparent group-focus-within:border-primary-400 group-focus-within:shadow-lg group-focus-within:shadow-primary-100 transition-all duration-300 pointer-events-none"></div>
                </div>
                <p class="text-sm text-gray-600 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Longer terms = lower monthly payments
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="animate-slide-up border-t border-gray-200 pt-12" style="animation-delay: 0.6s">
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Contact Information</h3>
                <p class="text-gray-600">We'll use this to create your account and send updates</p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BaseInput
                v-model="contactInfo.email"
                type="email"
                label="Email Address"
                placeholder="Enter your email address"
                required
                hint="We'll create your account with this email"
              />
              <BaseInput
                v-model="contactInfo.password"
                type="password"
                label="Create Password"
                placeholder="Create a secure password"
                required
                hint="Minimum 6 characters for account security"
              />
            </div>
          </div>

          <!-- Loan Summary -->
          <div v-if="isApplicationComplete" class="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-2xl border border-primary-100 p-8 animate-slide-up" style="animation-delay: 0.8s">
            <h4 class="text-2xl font-bold text-gray-900 mb-6 text-center">Your Loan Summary</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <p class="text-sm text-gray-600 font-medium">Monthly Payment</p>
                <p class="text-3xl font-bold text-primary-600">R{{ monthlyPayment.toLocaleString() }}</p>
              </div>
              <div class="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p class="text-sm text-gray-600 font-medium">Net Income</p>
                <p class="text-3xl font-bold text-secondary-600">R{{ netIncome.toLocaleString() }}</p>
              </div>
              <div class="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div class="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p class="text-sm text-gray-600 font-medium">Debt-to-Income Ratio</p>
                <p class="text-3xl font-bold" :class="debtToIncomeRatio > 40 ? 'text-red-600' : 'text-green-600'">
                  {{ debtToIncomeRatio.toFixed(1) }}%
                </p>
              </div>
            </div>
            
            <div class="p-6 rounded-xl" :class="loanEligibility.eligible ? 'bg-green-100 border-2 border-green-300' : 'bg-red-100 border-2 border-red-300'">
              <div class="flex items-center justify-center mb-3">
                <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3" :class="loanEligibility.eligible ? 'bg-green-500' : 'bg-red-500'">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      v-if="loanEligibility.eligible"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      v-else
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="text-center">
                  <p class="text-lg font-bold" :class="loanEligibility.eligible ? 'text-green-800' : 'text-red-800'">
                    {{ loanEligibility.eligible ? 'Congratulations! You qualify for this loan.' : 'Application needs review.' }}
                  </p>
                  <p class="text-sm mt-1" :class="loanEligibility.eligible ? 'text-green-700' : 'text-red-700'">
                    {{ loanEligibility.reason }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center animate-slide-up" style="animation-delay: 1s">
            <BaseButton
              type="submit"
              size="lg"
              :disabled="!isFormValid || isSubmitting"
              :loading="isSubmitting"
              class="px-16 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg v-if="!isSubmitting" class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {{ isSubmitting ? 'Submitting Application...' : 'Submit Application' }}
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLoanCalculatorStore } from '@/stores/loanCalculator';
import { useAuthStore } from '@/stores/auth';
import { useNotificationStore } from '@/stores/notifications';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

const router = useRouter();
const loanStore = useLoanCalculatorStore();
const authStore = useAuthStore();
const notificationStore = useNotificationStore();

const {
  application,
  isApplicationComplete,
  netIncome,
  debtToIncomeRatio,
  monthlyPayment,
  loanEligibility
} = storeToRefs(loanStore);

const personalInfo = application.value.personalInfo;
const financialInfo = application.value.financialInfo;
const loanDetails = application.value.loanDetails;

const contactInfo = ref({
  email: '',
  password: ''
});

const isSubmitting = ref(false);
const isResettingForm = ref(false);

const isFormValid = computed(() => {
  return isApplicationComplete.value && 
         contactInfo.value.email && 
         contactInfo.value.password && 
         contactInfo.value.password.length >= 6;
});

const handleResetForm = async () => {
  isResettingForm.value = true;
  
  try {
    // Reset the loan application store
    loanStore.resetApplication();
    
    // Reset contact info
    contactInfo.value = {
      email: '',
      password: ''
    };
    
    // Show success notification
    notificationStore.addNotification({
      type: 'success',
      title: 'Form Reset Successfully',
      message: 'All form fields have been cleared. You can start fresh.',
      duration: 3000
    });
    
    // Small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
  } catch (error) {
    // Show error notification
    notificationStore.addNotification({
      type: 'error',
      title: 'Reset Failed',
      message: 'There was an error resetting the form. Please try again.',
      duration: 5000
    });
  } finally {
    isResettingForm.value = false;
  }
};

const handleSubmit = async () => {
  if (!isFormValid.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Create user account
    await authStore.register(contactInfo.value.email, contactInfo.value.password);
    
    // Show success notification
    notificationStore.addNotification({
      type: 'success',
      title: 'Application Submitted Successfully!',
      message: 'Your car loan application has been submitted and your account has been created. You can now track your application status.',
      duration: 8000
    });
    
    // Redirect to dashboard after a short delay
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
    
  } catch (error: any) {
    // Show error notification
    notificationStore.addNotification({
      type: 'error',
      title: 'Submission Failed',
      message: error.message || 'There was an error submitting your application. Please try again.',
      duration: 8000
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>