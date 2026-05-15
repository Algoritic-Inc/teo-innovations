const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Techy background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to upgrade your{" "}
              <span className="text-blue-500">Tech Experience?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Get in touch today for clean gadgets, professional repairs, or
              quality event coverage. We are ready to guide you to the best
              choice.
            </p>
            <a
              href="https://wa.me/2349038963786"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
            >
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA