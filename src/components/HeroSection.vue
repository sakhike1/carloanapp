<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      <div class="absolute inset-0 bg-black/20"></div>
      
      <!-- Animated background elements -->
      <div class="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl animate-float" style="animation-delay: -1.5s"></div>
    </div>

    <!-- Dynamic Crossfading Background -->
    <div class="absolute inset-0 w-full h-full">
      <transition-group name="fade-bg" tag="div">
        <video
          v-if="currentAsset.type === 'video'"
          :key="'video-' + currentAsset.src"
          class="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000"
          autoplay
          muted
          loop
          playsinline
          :src="currentAsset.src"
          @error="handleVideoError"
        />
        <img
          v-else-if="currentAsset.type === 'image'"
          :key="'image-' + currentAsset.src"
          :src="currentAsset.src"
          class="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000"
          :alt="currentAsset.alt"
        />
      </transition-group>
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/60 to-transparent"></div>
    </div>

    <!-- Background Images with Parallax Effect -->
    <div class="absolute inset-0 w-full h-full overflow-hidden">
      <!-- First background image -->
      <div 
        ref="bgImage1"
        class="absolute inset-0 w-full h-full transition-all duration-2000 ease-out"
        :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }"
      >
        <img 
          src="/image1.jpg"
          alt="Luxury car background"
          class="w-full h-full object-cover object-center opacity-30 transition-opacity duration-1000"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-900/50 to-transparent"></div>
      </div>
      
      <!-- Second background image -->
      <div 
        ref="bgImage2"
        class="absolute inset-0 w-full h-full transition-all duration-2000 ease-out"
        :style="{ transform: `translateY(${parallaxOffset * 0.5}px)` }"
      >
        <img 
          src="/image2.jpg"
          alt="Car loan background"
          class="w-full h-full object-cover object-center opacity-20 transition-opacity duration-1000"
        />
        <div class="absolute inset-0 bg-gradient-to-l from-secondary-900/60 via-transparent to-primary-900/40"></div>
      </div>
    </div>

    <!-- Floating elements overlay -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Floating car silhouettes -->
      <div class="absolute top-20 right-20 w-32 h-32 opacity-10 animate-float-slow">
        <svg viewBox="0 0 100 100" class="w-full h-full text-white">
          <path d="M20 60 L80 60 L85 70 L90 70 L90 75 L10 75 L10 70 L15 70 Z" fill="currentColor"/>
          <path d="M25 45 L75 45 L80 60 L20 60 Z" fill="currentColor"/>
          <circle cx="25" cy="75" r="8" fill="currentColor"/>
          <circle cx="75" cy="75" r="8" fill="currentColor"/>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="animate-slide-up">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Drive Your
            <span class="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Dream Car
            </span>
            Today
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Get pre-approved for your car loan in minutes. Competitive rates, flexible terms, and a seamless digital experience.
          </p>
        </div>
        
        <div class="animate-slide-up flex flex-col sm:flex-row gap-4" style="animation-delay: 0.2s">
          <BaseButton 
            size="lg" 
            @click="scrollToApplication"
            class="!bg-gradient-to-br !from-purple-600 !to-blue-600 hover:!from-purple-700 hover:!to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-0 active:outline-none active:ring-0 focus:border-none active:border-none !ring-0 !border-0 !outline-none shadow-lg hover:shadow-xl"
          >
            Apply Now
          </BaseButton>
          <BaseButton 
            variant="outline" 
            size="lg"
            class="!bg-gradient-to-tl !from-emerald-500/30 !to-teal-500/30 border-white/30 text-white hover:!from-emerald-500/50 hover:!to-teal-500/50 backdrop-blur-sm focus:outline-none focus:ring-0 active:outline-none active:ring-0 focus:border-none active:border-none !ring-0 !outline-none transition-all duration-300"
            @click="scrollToCalculator"
          >
            Loan Calculator
          </BaseButton>
        </div>

        <!-- Key features -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style="animation-delay: 0.4s">
          <div class="flex items-center space-x-4 backdrop-blur-sm bg-white/5 rounded-lg p-4 transition-all duration-300 hover:bg-white/10">
            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Quick Approval</h3>
              <p class="text-gray-300">Get approved in under 5 minutes</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4 backdrop-blur-sm bg-white/5 rounded-lg p-4 transition-all duration-300 hover:bg-white/10">
            <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Best Rates</h3>
              <p class="text-gray-300">Starting from 3.9% APR</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4 backdrop-blur-sm bg-white/5 rounded-lg p-4 transition-all duration-300 hover:bg-white/10">
            <div class="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">100% Digital</h3>
              <p class="text-gray-300">Complete process online</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
      <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from './BaseButton.vue';

const assets = [
  { type: 'video', src: '/v1.mp4', alt: 'Car video 1' },
  { type: 'video', src: '/v2.mp4', alt: 'Car video 2' },
  { type: 'image', src: '/image1.jpg', alt: 'Luxury car background' },
  { type: 'image', src: '/image2.jpg', alt: 'Car loan background' },
];

const currentIndex = ref(0);
const currentAsset = ref(assets[0]);
let intervalId: number | undefined;

// Parallax effect
const parallaxOffset = ref(0);
const handleScroll = () => {
  parallaxOffset.value = window.scrollY;
};

onMounted(() => {
  intervalId = window.setInterval(nextAsset, 6000); // 6 seconds per asset
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  if (intervalId) window.clearInterval(intervalId);
  window.removeEventListener('scroll', handleScroll);
});

const nextAsset = () => {
  currentIndex.value = (currentIndex.value + 1) % assets.length;
  currentAsset.value = assets[currentIndex.value];
};

const handleVideoError = () => {
  // If a video fails, skip to the next asset
  nextAsset();
};

// Scroll to application section
const scrollToApplication = () => {
  const el = document.getElementById('loan-application') || document.querySelector('.loan-application');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// Scroll to calculator section
const scrollToCalculator = () => {
  const el = document.getElementById('loan-calculator') || document.querySelector('.loan-calculator');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0.5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s ease-in-out infinite;
}

@keyframes bounceSubtle {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* Smooth transitions for all elements */
* {
  transition-property: transform, opacity, background-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced backdrop blur for better text readability */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Remove all button borders and focus effects */
button:focus,
button:active,
button:focus-visible {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
  ring: none !important;
}

/* Specific overrides for BaseButton in this component */
.animate-slide-up button {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.animate-slide-up button:focus,
.animate-slide-up button:active,
.animate-slide-up button:focus-visible {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
  ring: none !important;
}

/* Override BaseButton primary variant gradient for Apply Now button */
.animate-slide-up button:first-child {
  background: linear-gradient(to bottom right, rgb(147 51 234), rgb(37 99 235)) !important;
}

.animate-slide-up button:first-child:hover {
  background: linear-gradient(to bottom right, rgb(126 34 206), rgb(29 78 216)) !important;
}

/* Override BaseButton outline variant gradient for Loan Calculator button */
.animate-slide-up button:last-child {
  background: linear-gradient(to top left, rgb(16 185 129 / 0.3), rgb(20 184 166 / 0.3)) !important;
}

.animate-slide-up button:last-child:hover {
  background: linear-gradient(to top left, rgb(16 185 129 / 0.5), rgb(20 184 166 / 0.5)) !important;
}

/* Alternative approach using more specific selectors */
.animate-slide-up .bg-gradient-to-br {
  background: linear-gradient(to bottom right, rgb(147 51 234), rgb(37 99 235)) !important;
}

.animate-slide-up .bg-gradient-to-br:hover {
  background: linear-gradient(to bottom right, rgb(126 34 206), rgb(29 78 216)) !important;
}

.animate-slide-up .bg-gradient-to-tl {
  background: linear-gradient(to top left, rgb(16 185 129 / 0.3), rgb(20 184 166 / 0.3)) !important;
}

.animate-slide-up .bg-gradient-to-tl:hover {
  background: linear-gradient(to top left, rgb(16 185 129 / 0.5), rgb(20 184 166 / 0.5)) !important;
}

.fade-bg-enter-active, .fade-bg-leave-active {
  transition: opacity 1s;
}
.fade-bg-enter-from, .fade-bg-leave-to {
  opacity: 0;
}
.fade-bg-enter-to, .fade-bg-leave-from {
  opacity: 1;
}
</style>