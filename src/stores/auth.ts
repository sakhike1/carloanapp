import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from '@/firebase/config';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!user.value);

  const initializeAuth = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser;
      loading.value = false;
    });
  };

  const register = async (email: string, password: string) => {
    try {
      loading.value = true;
      error.value = null;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      return userCredential;
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      loading.value = true;
      error.value = null;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      return userCredential;
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
    } catch (err: any) {
      error.value = err.message;
      throw err;
    }
  };

  const clearError = () => {
    error.value = null;
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    initializeAuth,
    register,
    login,
    logout,
    clearError
  };
});