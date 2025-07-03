<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p class="text-gray-600 mt-2">Sign in to your account to continue</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
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
            placeholder="Enter your password"
            required
          />

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <BaseButton
            type="submit"
            size="lg"
            full-width
            :loading="loading"
            :disabled="!email || !password"
          >
            Sign In
          </BaseButton>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <router-link 
              to="/register" 
              class="font-medium text-primary-600 hover:text-primary-500"
            >
              Sign up now
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

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value);
    router.push('/dashboard');
  } catch (err) {
    // Error is handled by the store
  }
};
</script>