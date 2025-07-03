import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnuI9UvnP-vOAVpKG4CXvOarYQli93J0Y",
  authDomain: "carloan-80cf7.firebaseapp.com",
  projectId: "carloan-80cf7",
  storageBucket: "carloan-80cf7.firebasestorage.app",
  messagingSenderId: "323735036411",
  appId: "1:323735036411:web:ae4da1d4ebe8926c872b5e",
  measurementId: "G-ZDS5SB3C80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with better error handling
const auth = getAuth(app);

// Initialize Firestore with better error handling
const db = getFirestore(app);

// Add connection retry logic
let retryCount = 0;
const maxRetries = 3;

const initializeFirebaseWithRetry = async () => {
  try {
    // Test the connection by attempting to get the current user
    await new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(
        (user) => {
          unsubscribe();
          resolve(user);
        },
        (error) => {
          unsubscribe();
          reject(error);
        }
      );
      
      // Timeout after 10 seconds
      setTimeout(() => {
        unsubscribe();
        reject(new Error('Firebase connection timeout'));
      }, 10000);
    });
    
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Firebase initialization error:', error);
    
    if (retryCount < maxRetries) {
      retryCount++;
      console.log(`Retrying Firebase initialization (${retryCount}/${maxRetries})...`);
      setTimeout(() => initializeFirebaseWithRetry(), 2000 * retryCount);
    } else {
      console.error('Firebase initialization failed after maximum retries');
    }
  }
};

// Initialize Firebase with retry logic
initializeFirebaseWithRetry();

export { auth, db };
export default app;