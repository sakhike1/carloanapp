<template>
  <div class="min-h-screen bg-gray-50 pt-16">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s"></div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          About 
          <span class="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            CarLoan Finance
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner in making car ownership dreams come true with competitive rates and exceptional service.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2015, CarLoan Finance has been dedicated to making car ownership accessible to everyone. We understand that purchasing a vehicle is one of life's significant investments, and we're here to make the financing process as smooth and transparent as possible.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 50,000 satisfied customers and R2 billion in loans facilitated, we've built our reputation on trust, competitive rates, and exceptional customer service. Our digital-first approach means you can complete your entire loan application from the comfort of your home.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">50,000+</div>
                <div class="text-gray-600">Happy Customers</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-secondary-600 mb-2">R2B+</div>
                <div class="text-gray-600">Loans Facilitated</div>
              </div>
            </div>
          </div>
          <div class="animate-slide-up" style="animation-delay: 0.2s">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our team"
              class="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Trust & Transparency</h3>
            <p class="text-gray-600">
              We believe in complete transparency with no hidden fees or surprises. Every term and condition is clearly explained.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up" style="animation-delay: 0.2s">
            <div class="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Speed & Efficiency</h3>
            <p class="text-gray-600">
              Our streamlined digital process means you can get approved in minutes, not days. Time is valuable, and we respect yours.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up" style="animation-delay: 0.4s">
            <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
            <p class="text-gray-600">
              Every decision we make is centered around providing the best possible experience for our customers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Why Choose CarLoan Finance?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another lender - we're your partner in achieving car ownership
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="flex items-start space-x-4 animate-slide-up">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                <p class="text-gray-600">Starting from 3.9% APR, we offer some of the most competitive rates in the market.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4 animate-slide-up" style="animation-delay: 0.1s">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Quick Approval</h3>
                <p class="text-gray-600">Get pre-approved in under 5 minutes with our advanced digital assessment system.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4 animate-slide-up" style="animation-delay: 0.2s">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">100% Digital Process</h3>
                <p class="text-gray-600">Complete your entire application online - no paperwork, no office visits required.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4 animate-slide-up" style="animation-delay: 0.3s">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Flexible Terms</h3>
                <p class="text-gray-600">Choose from 3 to 7 year terms with options to suit your budget and lifestyle.</p>
              </div>
            </div>
          </div>
          
          <div class="animate-slide-up" style="animation-delay: 0.4s">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Happy customer with new car"
              class="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to revolutionizing car financing
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up">
            <img 
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="CEO"
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
            <p class="text-primary-600 font-medium mb-4">Chief Executive Officer</p>
            <p class="text-gray-600 text-sm">
              15+ years in financial services, passionate about making car ownership accessible to all South Africans.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up" style="animation-delay: 0.2s">
            <img 
              src="https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="CTO"
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
            <p class="text-secondary-600 font-medium mb-4">Chief Technology Officer</p>
            <p class="text-gray-600 text-sm">
              Former fintech innovator, leading our digital transformation and customer experience initiatives.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up" style="animation-delay: 0.4s">
            <img 
              src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="CFO"
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900 mb-2">Priya Patel</h3>
            <p class="text-accent-600 font-medium mb-4">Chief Financial Officer</p>
            <p class="text-gray-600 text-sm">
              Expert in risk management and financial strategy, ensuring competitive rates and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Get Your Dream Car?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who chose CarLoan Finance for their car financing needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton 
            size="lg"
            variant="outline"
            class="border-white text-white hover:bg-white hover:text-primary-600"
            @click="$router.push('/')"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Your Application
          </BaseButton>
          <BaseButton 
            size="lg"
            variant="ghost"
            class="text-white hover:bg-white/10"
            @click="scrollToCalculator"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 002 2v14a2 2 0 002 2z" />
            </svg>
            Try Our Calculator
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

const scrollToCalculator = () => {
  // Navigate to home page and scroll to calculator
  window.location.href = '/#loan-calculator';
};
</script>