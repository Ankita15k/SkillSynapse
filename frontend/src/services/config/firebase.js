import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};
// console.log({
//   key: import.meta.env.VITE_FIREBASE_API_KEY,
//   domain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// });
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
