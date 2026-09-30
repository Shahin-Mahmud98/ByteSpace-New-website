import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "./firebase";

export type Provider = "google" | "facebook";

export async function signInWithProvider(provider: Provider) {
  const p = provider === "google" ? new GoogleAuthProvider() : new FacebookAuthProvider();
  return signInWithPopup(auth, p);
}

export async function emailSignUp(name: string, email: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: name.trim() });
}

export const emailLogin = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const firebaseSignOut = () => signOut(auth).catch(() => {});

export function friendlyAuthError(e: unknown): string | null {
  if (!(e instanceof FirebaseError)) return "Something went wrong. Please try again.";
  switch (e.code) {
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return null; // user closed the popup, not an error
    case "auth/popup-blocked": return "Popup was blocked. Please allow popups and try again.";
    case "auth/account-exists-with-different-credential": return "An account already exists with this email using a different sign-in method.";
    case "auth/unauthorized-domain": return "This domain is not authorized in Firebase. Add it under Authentication → Settings → Authorized domains.";
    case "auth/operation-not-allowed": return "This sign-in provider is not enabled in the Firebase console yet.";
    case "auth/email-already-in-use": return "An account with this email already exists. Try logging in instead.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password": return "Incorrect email or password.";
    case "auth/weak-password": return "Password is too weak. Use at least 8 characters.";
    case "auth/invalid-email": return "Enter a valid email address.";
    case "auth/too-many-requests": return "Too many attempts. Please wait a moment and try again.";
    case "auth/network-request-failed": return "Network error. Please check your connection.";
    default: return "Sign-in failed. Please try again.";
  }
}
