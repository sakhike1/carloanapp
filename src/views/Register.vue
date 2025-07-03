<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Create Account</h2>
          <p class="text-gray-600 mt-2">Join us and get your car loan today</p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <BaseInput
            v-model="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
            :error="error ?? undefined"
          />
          
          <BaseInput
            v-model="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            required
            hint="Password must be at least 6 characters"
          />

          <BaseInput
            v-model="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            :error="password !== confirmPassword && confirmPassword ? 'Passwords do not match' : ''"
          />

          <div class="flex items-center">
            <input
              id="agree-terms"
              v-model="agreeTerms"
              name="agree-terms"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              required
            />
            <label for="agree-terms" class="ml-2 block text-sm text-gray-900">
              I agree to the 
              <a href="#" class="text-primary-600 hover:text-primary-500">Terms of Service</a>
              and 
              <a href="#" class="text-primary-600 hover:text-primary-500">Privacy Policy</a>
            </label>
          </div>

          <BaseButton
            type="submit"
            size="lg"
            full-width
            :loading="loading"
            :disabled="!email || !password || !confirmPassword || password !== confirmPassword || !agreeTerms"
          >
            Create Account
          </BaseButton>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Already have an account?
            <router-link 
              to="/login" 
              class="font-medium text-primary-600 hover:text-primary-500"
            >
              Sign in
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';

const router = useRouter();
const authStore = useAuthStore();
const { loading, error } = storeToRefs(authStore);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeTerms = ref(false);

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    return;
  }
  
  try {
    await authStore.register(email.value, password.value);
    router.push('/dashboard');
  } catch (err) {
    // Error is handled by the store
  }
};
</script>