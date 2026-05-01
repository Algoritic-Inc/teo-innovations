"use client";
import React from "react";
import { Plus, Minus } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Do you offer warranty on gadgets?",
      a: "Yes, all our clean iPhones and laptops come with a standard testing period and a verification guarantee to ensure you get value for your money.",
    },
    {
      q: "How fast is delivery?",
      a: "We offer same-day delivery within Lagos and Ogbomoso. For nationwide shipping, it typically takes 24-48 hours depending on your location.",
    },
    {
      q: "Can you handle livestreaming for large church programs?",
      a: "Absolutely. Our media team is equipped for high-definition livestreaming and multi-camera setups for church programs, weddings, and corporate conferences.",
    },
    {
      q: "Do you offer physical repair services?",
      a: "Yes, we handle everything from broken screens and battery replacements to complex software repairs and data recovery at our service center.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Support
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? "border-blue-600 shadow-lg shadow-blue-50" : "border-slate-100 hover:border-slate-300"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-bold transition-colors ${openIndex === i ? "text-blue-600" : "text-slate-900"}`}
                >
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-blue-600" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
