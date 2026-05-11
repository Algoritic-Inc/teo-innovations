"use client";
import React from "react";
import { ArrowRight, Smartphone, Video, Settings } from "lucide-react";

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/2347075027638";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-[100px]">
      {/* 1. The Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Tech Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. The Overlay - Blending Image into the White Design */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/40 to-white"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/20 to-transparent hidden md:block"></div>

      {/* 3. The Content Layer */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Modern Tech. <br />
            <span className="text-blue-600">Reliable Solutions.</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-slate-700 mb-12 leading-relaxed">
            Your destination for{" "}
            <span className="font-bold text-slate-900">verified iPhones</span>,
            expert repairs, and 4K livestreaming. We bring professional
            excellence to your gadgets and events.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href={whatsappUrl}
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-slate-300 hover:scale-105 active:scale-95"
            >
              Order a Gadget
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-5 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center group"
            >
              Our Services{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Floating Trust Bar - Minimalist */}
          <div className="mt-20 flex flex-wrap gap-8 md:gap-16 opacity-90">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-blue-600">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-900">
                Clean Devices
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-blue-600">
                <Settings className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-900">
                Expert Repairs
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-blue-600">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-900">
                Pro Media
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
