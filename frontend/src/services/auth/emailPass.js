import axiosInstance from "../axios/axios";

export const emailSignup = async (name, email, password) => {
  const res = await axiosInstance.post("auth/emailpass", {
    name,
    email,
    password,
  });
  
  console.log(res.data)

  return res.data;
};
