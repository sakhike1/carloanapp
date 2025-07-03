<template>
  <div class="min-h-screen bg-gray-50 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Welcome back, {{ user?.email }}
        </h1>
        <p class="text-gray-600 mt-2">
          Manage your loan applications and account settings
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Current Application -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">
              Your Current Application
            </h2>
            
            <div v-if="isApplicationComplete" class="space-y-6">
              <!-- Application Status Banner -->
              <div class="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-green-800">Application Submitted</h3>
                    <p class="text-green-700">Your loan application is being processed</p>
                  </div>
                </div>
                <div class="bg-white/60 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-gray-700">Processing Status</span>
                    <span class="text-sm font-bold text-green-600">Under Review</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style="width: 60%"></div>
                  </div>
                  <p class="text-xs text-gray-600 mt-2">Expected response within 24-48 hours</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-primary-50 rounded-lg p-4">
                  <h3 class="font-medium text-primary-900">Requested Amount</h3>
                  <p class="text-2xl font-bold text-primary-700">
                    R{{ application.loanDetails.requestedAmount.toLocaleString() }}
                  </p>
                </div>
                <div class="bg-secondary-50 rounded-lg p-4">
                  <h3 class="font-medium text-secondary-900">Monthly Payment</h3>
                  <p class="text-2xl font-bold text-secondary-700">
                    R{{ monthlyPayment.toLocaleString() }}
                  </p>
                </div>
                <div class="bg-accent-50 rounded-lg p-4">
                  <h3 class="font-medium text-accent-900">Loan Term</h3>
                  <p class="text-2xl font-bold text-accent-700">
                    {{ application.loanDetails.loanTerm }} months
                  </p>
                </div>
                <div class="bg-green-50 rounded-lg p-4">
                  <h3 class="font-medium text-green-900">Interest Rate</h3>
                  <p class="text-2xl font-bold text-green-700">
                    {{ application.loanDetails.interestRate }}% APR
                  </p>
                </div>
              </div>

              <div class="p-4 rounded-lg" :class="loanEligibility.eligible ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'">
                <div class="flex items-center mb-2">
                  <svg
                    class="w-5 h-5 mr-2"
                    :class="loanEligibility.eligible ? 'text-green-600' : 'text-red-600'"
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
                  <h3 class="font-semibold" :class="loanEligibility.eligible ? 'text-green-800' : 'text-red-800'">
                    {{ loanEligibility.eligible ? 'Pre-Approved!' : 'Needs Review' }}
                  </h3>
                </div>
                <p class="text-sm" :class="loanEligibility.eligible ? 'text-green-700' : 'text-red-700'">
                  {{ loanEligibility.reason }}
                </p>
              </div>

              <!-- Next Steps -->
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 class="font-semibold text-blue-900 mb-3">Next Steps</h4>
                <ul class="space-y-2 text-sm text-blue-800">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Application submitted and under review
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Credit check and verification (24-48 hours)
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Final approval and documentation
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    Funds disbursement
                  </li>
                </ul>
              </div>

              <div class="flex space-x-4">
                <BaseButton 
                  variant="outline" 
                  size="lg" 
                  @click="handleResetApplication"
                  :loading="isResetting"
                >
                  <svg v-if="!isResetting" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {{ isResetting ? 'Resetting...' : 'Start New Application' }}
                </BaseButton>
                <BaseButton variant="ghost" size="lg">
                  Download Application Copy
                </BaseButton>
              </div>
            </div>

            <div v-else class="text-center py-8">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No Active Application</h3>
              <p class="text-gray-600 mb-4">Start your car loan application to see your details here.</p>
              <BaseButton @click="$router.push('/')">
                Start Application
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- Account Summary -->
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              Account Summary
            </h2>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Email</span>
                <span class="font-medium">{{ user?.email }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Member Since</span>
                <span class="font-medium">{{ new Date(user?.metadata?.creationTime || '').toLocaleDateString() }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Status</span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div class="space-y-3">
              <BaseButton variant="outline" full-width>
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Documents
              </BaseButton>
              <BaseButton variant="outline" full-width>
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0v9a2 2 0 002 2h4a2 2 0 002-2V7m-8 0H5a2 2 0 00-2 2v9a2 2 0 002 2h1" />
                </svg>
                Payment History
              </BaseButton>
              <BaseButton variant="outline" full-width>
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Account Settings
              </BaseButton>
            </div>
          </div>

          <!-- Contact Support -->
          <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-lg p-6 text-white">
            <h2 class="text-xl font-semibold mb-4">Need Help?</h2>
            <p class="text-primary-100 mb-4">Our loan specialists are here to assist you with any questions.</p>
            <BaseButton variant="outline" full-width class="border-white text-white hover:bg-white hover:text-primary-600">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Support
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { useLoanCalculatorStore } from '@/stores/loanCalculator';
import { useNotificationStore } from '@/stores/notifications';
import BaseButton from '@/components/BaseButton.vue';

const authStore = useAuthStore();
const loanStore = useLoanCalculatorStore();
const notificationStore = useNotificationStore();

const { user } = storeToRefs(authStore);
const { 
  application, 
  isApplicationComplete, 
  monthlyPayment, 
  loanEligibility
} = storeToRefs(loanStore);

const isResetting = ref(false);

const handleResetApplication = async () => {
  isResetting.value = true;
  
  try {
    // Reset the application in the store
    loanStore.resetApplication();
    
    // Show success notification
    notificationStore.addNotification({
      type: 'success',
      title: 'Application Reset Successfully',
      message: 'Your loan application has been cleared. You can now start a new application.',
      duration: 5000
    });
    
    // Small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
  } catch (error) {
    // Show error notification
    notificationStore.addNotification({
      type: 'error',
      title: 'Reset Failed',
      message: 'There was an error resetting your application. Please try again.',
      duration: 5000
    });
  } finally {
    isResetting.value = false;
  }
};
</script>