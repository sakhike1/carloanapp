<template>
  <div class="space-y-2">
    <label v-if="label" :for="id" class="block text-sm font-semibold text-gray-800">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    <div class="relative group">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        :class="inputClasses"
        @input="handleInput"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      />
      <div v-if="prefix" class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <span class="text-gray-600 font-medium text-sm">{{ prefix }}</span>
      </div>
      <div v-if="suffix" class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
        <span class="text-gray-600 font-medium text-sm">{{ suffix }}</span>
      </div>
      <!-- Focus ring -->
      <div class="absolute inset-0 rounded-xl border-2 border-transparent group-focus-within:border-primary-400 group-focus-within:shadow-lg group-focus-within:shadow-primary-100 transition-all duration-300 pointer-events-none"></div>
    </div>
    <p v-if="error" class="text-sm text-red-600 font-medium flex items-center">
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {{ error }}
    </p>
    <p v-else-if="hint" class="text-sm text-gray-600 flex items-center">
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  id?: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  modelValue?: string | number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  hint?: string;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  required: false,
  disabled: false
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
}>();

const inputClasses = computed(() => {
  const baseClasses = 'block w-full rounded-xl border-0 bg-white shadow-sm ring-1 ring-inset transition-all duration-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200';
  
  const errorClasses = props.error 
    ? 'ring-red-300 focus:ring-red-500 bg-red-50' 
    : 'ring-gray-300 focus:ring-primary-500 hover:ring-gray-400';
    
  const prefixClasses = props.prefix ? 'pl-12' : 'pl-4';
  const suffixClasses = props.suffix ? 'pr-12' : 'pr-4';
  const sizeClasses = 'py-3.5 text-base font-medium';
  
  return [baseClasses, errorClasses, prefixClasses, suffixClasses, sizeClasses].join(' ');
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? parseFloat(target.value) || 0 : target.value;
  emit('update:modelValue', value);
};
</script>