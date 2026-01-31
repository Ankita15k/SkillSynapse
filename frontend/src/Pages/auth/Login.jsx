import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-6">Welcome Back</h1>

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
        Login
      </button>

      <p className="text-sm text-center mt-4 text-gray-500">
        Don’t have an account?{" "}
        {/* <Link to="/signup" className="text-indigo-600 font-medium">
          Sign up
        </Link> */}
      </p>
    </div>
  );
}
