import React from "react";
import { Smartphone, Settings, Video, Wifi, ArrowUpRight } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Premium Gadgets",
      desc: "Carefully sourced, reliable iPhones and Laptops. Pre-tested and clean devices you can trust.",
      icon: <Smartphone className="w-8 h-8" />,
      link: "#gadgets",
    },
    {
      title: "Tech Solutions",
      desc: "Professional hardware repairs, screen fixes, software installations, and data recovery.",
      icon: <Settings className="w-8 h-8" />,
      link: "#repair",
    },
    {
      title: "Media Coverage",
      desc: "Cinematic videography and professional livestreaming for weddings, church, and corporate events.",
      icon: <Video className="w-8 h-8" />,
      link: "#media",
    },
    {
      title: "Utility Services",
      desc: "Instant data top-ups, airtime, and seamless airtime-to-cash conversion services.",
      icon: <Wifi className="w-8 h-8" />,
      link: "#utilities",
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              A one-stop shop for <br />
              <span className="text-blue-600">Tech & Media.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            We combine high-end hardware with professional services to keep you
            connected and your moments captured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,123,255,0.08)] hover:border-blue-100 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle Icon Background Circle */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                {s.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>

              <div className="flex items-center text-slate-900 font-bold text-sm group-hover:text-blue-600 transition-colors">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
