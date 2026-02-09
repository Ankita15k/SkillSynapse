import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import axiosInstance from "../axios/axios";

export const googleLogin = async () => {
  // 1. Google provider
  const provider = new GoogleAuthProvider();

  // 2. Open Google popup
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // 3. Get Firebase ID token
  const firebaseToken = await user.getIdToken();

  // 4. Send token to backend (NO user data needed)
  const res = await axiosInstance.post(
    "/auth/google",
    {},
    {
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
      },
    }
  );

  return res.data;
};
