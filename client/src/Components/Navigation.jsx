"use client";
import { Button } from "./UI/Button";

export function Navigation({ currentPage, onNavigate }) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-between mb-6 sm:mb-8 backdrop-blur-sm bg-black/20 rounded-2xl p-4 border border-white/10">
      <button
        onClick={() => onNavigate("home")}
        className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
      >
        Abdul Samad
      </button>
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`hover:text-purple-400 transition-colors text-sm lg:text-base ${
              currentPage === item.id ? "text-purple-400" : "text-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <Button
        onClick={() => onNavigate("contact")}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-4 sm:px-6 shadow-lg border-0 text-sm sm:text-base"
      >
        Let's talk
      </Button>
    </nav>
  );
}
