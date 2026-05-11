import React from "react";
import { ShieldCheck, Zap, Heart, Award } from "lucide-react";

const AboutUs: React.FC = () => {
  const values = [
    {
      title: "Trust First",
      desc: "We prioritize clean, pre-tested gadgets so you never have to worry about reliability.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Fast Execution",
      desc: "From quick tech repairs to instant data top-ups, we value your time.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Left Side: Brand Story */}
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Reliability is our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Core Innovation.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Founded on the principle of quality, **TEO Innovations Ltd** is a
              one-stop hub designed to solve everyday tech challenges. We
              realized that finding "clean" gadgets and professional media
              coverage shouldn't be a gamble.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Whether we are fixing a broken screen, livestreaming a wedding, or
              selling a premium iPhone, our goal is to provide a smooth,
              stress-free experience that gives you true value for your money.
            </p>

            {/* Quick Value Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{v.title}</h4>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Stats / Image Placeholder */}
          <div className="lg:w-1/2 relative">
            {/* Main Decorative Box */}
            <div className="relative z-10 p-1 bg-gradient-to-br from-blue-100 to-transparent rounded-[3rem]">
              <div className="bg-white p-8 md:p-12 rounded-[2.8rem] shadow-2xl shadow-blue-100/50">
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center space-x-3 mb-2 text-blue-600">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">
                        Our Vision
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">
                      To be the most reliable name in tech and media services
                      across Nigeria.
                    </p>
                  </div>

                  <div className="pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-black text-blue-600 mb-1">
                        100%
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                        Client Satisfaction
                      </p>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-slate-900 mb-1">
                        24/7
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                        Premium Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
