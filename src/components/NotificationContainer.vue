<template>
  <div class="fixed top-4 right-4 z-50 space-y-4 max-w-sm">
    <TransitionGroup
      name="notification"
      tag="div"
      class="space-y-4"
    >
      <div
        v-for="notification in notifications"
        :key="notification.id"
        :class="notificationClasses(notification.type)"
        class="rounded-xl shadow-lg border p-4 backdrop-blur-sm animate-slide-down"
      >
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <component :is="getIcon(notification.type)" :class="iconClasses(notification.type)" class="w-6 h-6" />
          </div>
          <div class="ml-3 flex-1">
            <h3 :class="titleClasses(notification.type)" class="text-sm font-semibold">
              {{ notification.title }}
            </h3>
            <p :class="messageClasses(notification.type)" class="text-sm mt-1">
              {{ notification.message }}
            </p>
          </div>
          <div class="ml-4 flex-shrink-0">
            <button
              @click="removeNotification(notification.id)"
              :class="closeButtonClasses(notification.type)"
              class="rounded-md p-1.5 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores/notifications';

// Icon components
const CheckCircleIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
};

const XCircleIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
};

const ExclamationTriangleIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  `
};

const InformationCircleIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
};

const notificationStore = useNotificationStore();
const { notifications } = storeToRefs(notificationStore);
const { removeNotification } = notificationStore;

const getIcon = (type: string) => {
  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon
  };
  return icons[type as keyof typeof icons] || InformationCircleIcon;
};

const notificationClasses = (type: string) => {
  const classes = {
    success: 'bg-green-50/95 border-green-200',
    error: 'bg-red-50/95 border-red-200',
    warning: 'bg-yellow-50/95 border-yellow-200',
    info: 'bg-blue-50/95 border-blue-200'
  };
  return classes[type as keyof typeof classes] || classes.info;
};

const iconClasses = (type: string) => {
  const classes = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500'
  };
  return classes[type as keyof typeof classes] || classes.info;
};

const titleClasses = (type: string) => {
  const classes = {
    success: 'text-green-800',
    error: 'text-red-800',
    warning: 'text-yellow-800',
    info: 'text-blue-800'
  };
  return classes[type as keyof typeof classes] || classes.info;
};

const messageClasses = (type: string) => {
  const classes = {
    success: 'text-green-700',
    error: 'text-red-700',
    warning: 'text-yellow-700',
    info: 'text-blue-700'
  };
  return classes[type as keyof typeof classes] || classes.info;
};

const closeButtonClasses = (type: string) => {
  const classes = {
    success: 'text-green-500 hover:bg-green-500 focus:ring-green-500',
    error: 'text-red-500 hover:bg-red-500 focus:ring-red-500',
    warning: 'text-yellow-500 hover:bg-yellow-500 focus:ring-yellow-500',
    info: 'text-blue-500 hover:bg-blue-500 focus:ring-blue-500'
  };
  return classes[type as keyof typeof classes] || classes.info;
};
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform 0.3s ease;
}
</style>