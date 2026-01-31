import { LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-500/20 backdrop-blur shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16"> 
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img className="text-gray-600 w-18 h-14 drop-shadow-[0_0_3px_rgba(255,255,255,0.9)]" alt="logo" src="/logo.png"/>
            <span className="text-xl font-bold text-gray-950 drop-shadow-[0_0_3px_rgba(255,255,255,0.9)]">
            Skill<span className="text-gray-800">Synapse</span>
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 border border-cyan-700 text-cyan-700 px-4 py-2 cursor-pointer rounded-lg hover:bg-cyan-700 hover:text-white transition"
            >
              <LogIn size={18} />
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2 bg-cyan-600 border border-cyan-700 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-transparent hover:text-cyan-700 transition"
            >
              <UserPlus />
              Register
            </button>
          </div>
        </div>

        
      </div>
    </nav>
  );
}
