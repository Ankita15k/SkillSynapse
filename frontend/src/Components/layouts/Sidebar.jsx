// src/components/layout/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/skill-gap", label: "Skills" },
  { path: "/assessment", label: "Test" },
  { path: "/profile", label: "Profile" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t flex justify-around py-2 sm:hidden">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-sm ${
            location.pathname === link.path
              ? "text-indigo-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
}
