import { ChevronDown } from 'lucide-react';

export default function Hero() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-6">
          <div className="inline-block border border-gold-500/30 px-6 py-2 backdrop-blur-sm">
            <p className="text-gold-400 text-sm tracking-[0.3em]">LUXURY REDEFINED</p>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          Where Dreams
          <br />
          <span className="text-gold-400">Meet Destiny</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Curated collection of India's most exclusive residential and commercial properties
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("properties")}
            className="px-10 py-4 bg-gold-500 text-black text-sm tracking-widest hover:bg-gold-400 transition-all"
          >
            EXPLORE PROJECTS
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 border border-gold-500/50 text-gold-400 text-sm tracking-widest hover:bg-gold-500/10 transition-all"
          >
            SCHEDULE CONSULTATION
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-400" />
      </div>
    </section>
  );
}
