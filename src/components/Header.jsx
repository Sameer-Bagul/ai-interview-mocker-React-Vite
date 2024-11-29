import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between p-4 bg-gray-200 shadow-md">
      <div className="flex items-center gap-2">
        <img src="/assets/aiim-logo.avif" alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-bold text-indigo-600">AIIM</h1>
      </div>
      <nav className="flex gap-4">
        <button onClick={() => navigate("/dashboard")} className="text-blue-600">
          Dashboard
        </button>
        <button onClick={() => navigate("/dashboard/upgrade")} className="text-blue-600">
          Upgrade
        </button>
      </nav>
    </header>
  );
};

export default Header;
