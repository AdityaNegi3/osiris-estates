import { Award, Users, Building2, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Building2, value: '500+', label: 'Premium Properties' },
  { icon: Users, value: '2000+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: TrendingUp, value: '₹5000Cr+', label: 'Properties Sold' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-gold-400 text-sm tracking-[0.3em] mb-4">ABOUT OSIRIS ESTATES</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Redefining Luxury
              <br />
              <span className="text-gold-400">Real Estate in India</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Established with a vision to transform the luxury real estate landscape, OSIRIS Estates has become synonymous with exclusivity, elegance, and excellence. We curate the finest properties across India's most prestigious addresses.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our portfolio includes ultra-luxury residences, heritage properties, and prime commercial spaces that cater to the discerning tastes of India's elite and global investors seeking unparalleled quality.
            </p>
            <button className="px-10 py-4 bg-gold-500 text-black text-sm tracking-widest hover:bg-gold-400 transition-all">
              OUR STORY
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-zinc-900 relative overflow-hidden border border-gold-500/20">
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold-500/30 -z-10" />
            <div className="absolute -top-8 -left-8 w-64 h-64 border border-gold-500/30 -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center border border-zinc-800 p-8 bg-zinc-950/50 backdrop-blur hover:border-gold-500/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-serif text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
