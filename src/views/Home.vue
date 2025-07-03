<template>
  <div class="min-h-screen">
    <HeroSection />
    <LoanCalculator />
    <LoanApplicationForm />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import LoanCalculator from '@/components/LoanCalculator.vue';
import LoanApplicationForm from '@/components/LoanApplicationForm.vue';
</script>