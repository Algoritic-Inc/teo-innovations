"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Gadgets", href: "#gadgets" },
    { name: "Tech Services", href: "#services" },
    { name: "Media", href: "#media" },
    { name: "Telecomm", href: "#utility" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed shadow-xl top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-slate-900 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg shadow-slate-200">
            <span className="text-white font-black text-xl">T</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-xl tracking-tighter leading-none transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-slate-900"}`}
            >
              TEO<span className="text-blue-600">INNOVATIONS</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              LTD
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://wa.me/2349038963786"
            className="flex items-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-screen w-64 bg-white z-50 md:hidden flex flex-col animate-in slide-in-from-left-full duration-300">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <a href="#" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
                <div className="w-10 h-10 bg-slate-900 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg shadow-slate-200">
                  <span className="text-white font-black text-xl">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-tighter leading-none text-slate-900">
                    TEO<span className="text-blue-600">INNOVATIONS</span>
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    LTD
                  </span>
                </div>
              </a>
              <button
                onClick={closeMobileMenu}
                className="text-slate-900 hover:text-blue-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex-1 flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200 relative group"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-slate-100">
              <a
                href="https://wa.me/2349038963786"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
                onClick={closeMobileMenu}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Now</span>
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
