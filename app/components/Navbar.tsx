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
            href="https://wa.me/2347075027638"
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-2xl font-black text-slate-900 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/2347075027638"
            className="block w-full py-5 bg-blue-600 text-center text-white font-bold rounded-2xl shadow-lg shadow-blue-100"
          >
            Send WhatsApp Message
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
