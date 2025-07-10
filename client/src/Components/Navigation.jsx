"use client";
import { useState } from "react";
import { Button } from "./UI/Button";
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";

export function Navigation({ currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Works", icon: FolderOpen },
    { id: "resume", label: "Resume", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
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
      <nav className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6 lg:mb-8 backdrop-blur-sm bg-black/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/10">
        <button
          onClick={() => handleNavigation("home")}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300 truncate max-w-[120px] sm:max-w-none"
        >
          <span className="hidden xs:inline">Abdul Samad</span>
          <span className="xs:hidden">A.Samad</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`relative hover:text-purple-400 transition-all duration-300 text-sm xl:text-base px-3 py-2 rounded-lg flex items-center space-x-2 ${
                currentPage === item.id
                  ? "text-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              {currentPage === item.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center space-x-2">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`relative hover:text-purple-400 transition-all duration-300 p-2 rounded-lg ${
                currentPage === item.id
                  ? "text-purple-400 bg-purple-500/10"
                  : "text-gray-300 hover:bg-white/5"
              }`}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
              {currentPage === item.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Button
          onClick={() => handleNavigation("contact")}
          className="hidden lg:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl lg:rounded-2xl px-3 lg:px-6 py-2 shadow-lg border-0 text-sm lg:text-base"
        >
          <span className="hidden xl:inline">Let's talk</span>
          <span className="xl:hidden">Talk</span>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-1.5 sm:p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md animate-fadeIn">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <button
                onClick={() => handleNavigation("home")}
                className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Abdul Samad
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col justify-center px-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                    currentPage === item.id
                      ? "text-purple-400 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">{item.label}</span>
                  {currentPage === item.id && (
                    <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/10">
              <Button
                onClick={() => handleNavigation("contact")}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-6 py-4 text-lg font-semibold shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation for Very Small Screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-t border-white/10 px-2 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300 min-w-0 flex-1 ${
                currentPage === item.id
                  ? "text-purple-400 bg-purple-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-medium truncate w-full text-center">
                {item.id === "projects" ? "Works" : item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
