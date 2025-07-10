"use client";
import { useState } from "react";
import { Button } from "./UI/Button";
import { Menu, X } from "lucide-react";

export function Navigation({ currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Works" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm bg-black/20 rounded-2xl p-3 sm:p-4 border border-white/10">
        <button
          onClick={() => handleNavigation("home")}
          className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
        >
          Abdul Samad
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`relative hover:text-purple-400 transition-colors text-sm lg:text-base px-3 py-2 rounded-lg ${
                currentPage === item.id
                  ? "text-purple-400 bg-purple-500/10"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Button
          onClick={() => handleNavigation("contact")}
          className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-4 lg:px-6 shadow-lg border-0 text-sm lg:text-base"
        >
          Let's talk
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <button
              onClick={() => handleNavigation("home")}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Abdul Samad
            </button>

            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-xl px-6 py-3 rounded-2xl transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-purple-400 bg-purple-500/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              onClick={() => handleNavigation("contact")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-8 py-3 text-lg"
            >
              Let's talk
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
