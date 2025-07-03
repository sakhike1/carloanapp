<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900">CarLoan Finance</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-primary-600 transition-colors">
            Home
          </router-link>
          <a href="/#loan-calculator" class="text-gray-700 hover:text-primary-600 transition-colors">
            Calculator
          </a>
          <a href="/#loan-application" class="text-gray-700 hover:text-primary-600 transition-colors">
            Apply Now
          </a>
          <router-link to="/about" class="text-gray-700 hover:text-primary-600 transition-colors">
            About
          </router-link>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <template v-if="isAuthenticated">
            <router-link 
              to="/dashboard" 
              class="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Dashboard
            </router-link>
            <BaseButton 
              variant="outline" 
              size="sm"
              @click="handleLogout"
            >
              Logout
            </BaseButton>
          </template>
          <template v-else>
            <router-link 
              to="/login" 
              class="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Login
            </router-link>
            <BaseButton 
              size="sm"
              @click="$router.push('/register')"
            >
              Sign Up
            </BaseButton>
          </template>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          <a 
            href="/#loan-calculator" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            @click="mobileMenuOpen = false"
          >
            Calculator
          </a>
          <a 
            href="/#loan-application" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            @click="mobileMenuOpen = false"
          >
            Apply Now
          </a>
          <router-link 
            to="/about" 
            class="text-gray-700 hover:text-primary-600 transition-colors"
            @click="mobileMenuOpen = false"
          >
            About
          </router-link>
          
          <div class="pt-4 border-t border-gray-200">
            <template v-if="isAuthenticated">
              <router-link 
                to="/dashboard" 
                class="block text-gray-700 hover:text-primary-600 transition-colors mb-2"
                @click="mobileMenuOpen = false"
              >
                Dashboard
              </router-link>
              <BaseButton 
                variant="outline" 
                size="sm"
                full-width
                @click="handleLogout"
              >
                Logout
              </BaseButton>
            </template>
            <template v-else>
              <router-link 
                to="/login" 
                class="block text-gray-700 hover:text-primary-600 transition-colors mb-2"
                @click="mobileMenuOpen = false"
              >
                Login
              </router-link>
              <BaseButton 
                size="sm"
                full-width
                @click="$router.push('/register'); mobileMenuOpen = false"
              >
                Sign Up
              </BaseButton>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import BaseButton from './BaseButton.vue';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const mobileMenuOpen = ref(false);

const handleLogout = async () => {
  await authStore.logout();
  mobileMenuOpen.value = false;
};
</script>