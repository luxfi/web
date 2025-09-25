import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Check if Firebase config is present
const hasFirebaseConfig = firebaseConfig.apiKey && firebaseConfig.projectId;

// Initialize Firebase instance only if config is present
let firebaseApp: FirebaseApp | null = null;

if (hasFirebaseConfig) {
  try {
    firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  } catch (error) {
    console.warn('Failed to initialize Firebase app:', error);
  }
} else {
  console.log('Firebase configuration not found, skipping initialization');
}

export default firebaseApp
