import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-6">Create Account</h1>

      <input
        placeholder="Full Name"
        className="w-full mb-3 p-3 border rounded-lg text-sm"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-3 border rounded-lg text-sm"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-3 border rounded-lg text-sm"
      />

      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium">
        Sign Up
      </button>

      <p className="text-sm text-center mt-4 text-gray-500">
        Already have an account?{" "}
        {/* <Link to="/login" className="text-indigo-600 font-medium">
          Login
        </Link> */}
      </p>
    </div>
  );
}
