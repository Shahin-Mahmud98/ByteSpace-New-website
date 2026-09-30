import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase web config is public by design; override via NEXT_PUBLIC_* env vars if needed.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyBWfG7k40on3FAXbt4-X_uVr7EF50iS1jo",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "bytespace-new--website.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "bytespace-new--website",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "bytespace-new--website.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "426419418269",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "1:426419418269:web:2fd61a6bf82a82ffbc9074",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-XQLLHEBK18",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Analytics only works in the browser and only where supported.
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics, isSupported }) => isSupported().then((ok) => ok && getAnalytics(app))).catch(() => {});
}
