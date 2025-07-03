<template>
  <div id="app">
    <AppNavigation />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <NotificationContainer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';
import NotificationContainer from '@/components/NotificationContainer.vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.initializeAuth();
});
</script>