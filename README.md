# ByteSpace New

Landing, Login and Signup pages built from the ByteSpace Figma design.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure
- `app/` – routes (`/`, `/login`, `/signup`) and demo auth API routes
- `components/` – reusable sections and UI (`ui/Button`, `CourseCard`, `AuthForm`, …)
- `lib/data.ts` – content data (courses, categories, testimonials)
- `public/img/` – images cropped from the design

npnpm install firebase
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

<!-- // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWfG7k40on3FAXbt4-X_uVr7EF50iS1jo",
  authDomain: "bytespace-new--website.firebaseapp.com",
  projectId: "bytespace-new--website",
  storageBucket: "bytespace-new--website.firebasestorage.app",
  messagingSenderId: "426419418269",
  appId: "1:426419418269:web:2fd61a6bf82a82ffbc9074",
  measurementId: "G-XQLLHEBK18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); -->