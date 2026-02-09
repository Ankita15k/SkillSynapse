import admin from "firebase-admin";
import dotenv from 'dotenv';

dotenv.config()

// 🔐 Build service account from .env
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined,
};


// 🛑 Safety check (VERY IMPORTANT)
if (
  !serviceAccount.projectId ||
  !serviceAccount.clientEmail ||
  !serviceAccount.privateKey
) {
  throw new Error("❌ Firebase Admin env variables are missing");
}

// 🚀 Initialize Firebase Admin ONCE
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
