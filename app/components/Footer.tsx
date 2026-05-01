import {  Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
              TEO<span className="text-blue-600">INNOVATIONS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your one-stop place for gadgets, tech solutions, and cinematic
              media coverage. Trust and reliability in every transaction.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+234 707 502 7638</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+234 903 896 3786</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">
                iPhone & Laptop Sales
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Hardware Repairs
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Event Livestreaming
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Telecomm Services
              </li>
            </ul>
          </div>

          {/* Location / Presence */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Availability
            </h4>
            <p className="text-slate-500 text-sm mb-4">
              Available for orders and services across Lagos and Ogbomoso.
            </p>
            <div className="flex space-x-4">
              {/* <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                <Ins className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div> */}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 TEO INNOVATIONS LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer