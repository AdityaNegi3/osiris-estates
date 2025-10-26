import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-serif tracking-wider text-gold-400">
                OSIRIS
              </div>
              <div className="text-xs tracking-[0.3em] text-gray-400 uppercase pt-1">
                Estates
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's premier luxury real estate brand, curating exclusive properties for discerning clientele.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Luxury Penthouses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Premium Villas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  High-End Apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Heritage Bungalows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                  Commercial Spaces
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for exclusive property listings and market insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-2 text-white text-sm placeholder-gray-500 focus:border-gold-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-gold-500 text-black hover:bg-gold-400 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 OSIRIS Estates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">
                RERA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
