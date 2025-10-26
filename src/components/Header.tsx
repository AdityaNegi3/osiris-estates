import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-serif tracking-wider text-gold-400">
              OSIRIS
            </div>
            <div className="text-xs tracking-[0.3em] text-gray-400 uppercase pt-1">
              Estates
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            <a href="#home" className="text-sm tracking-wider text-gray-300 hover:text-gold-400 transition-colors">
              HOME
            </a>
            <a href="#properties" className="text-sm tracking-wider text-gray-300 hover:text-gold-400 transition-colors">
              PROPERTIES
            </a>
            <a href="#about" className="text-sm tracking-wider text-gray-300 hover:text-gold-400 transition-colors">
              ABOUT
            </a>
            <a href="#services" className="text-sm tracking-wider text-gray-300 hover:text-gold-400 transition-colors">
              SERVICES
            </a>
            <a href="#contact" className="text-sm tracking-wider text-gray-300 hover:text-gold-400 transition-colors">
              CONTACT
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+91" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:info@osirisestates.in" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <button className="px-6 py-2 bg-gold-500 text-black text-sm tracking-wider hover:bg-gold-400 transition-all">
              SCHEDULE VIEWING
            </button>
          </div>

          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gold-500/20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#home" className="text-sm tracking-wider text-gray-300 hover:text-gold-400">
              HOME
            </a>
            <a href="#properties" className="text-sm tracking-wider text-gray-300 hover:text-gold-400">
              PROPERTIES
            </a>
            <a href="#about" className="text-sm tracking-wider text-gray-300 hover:text-gold-400">
              ABOUT
            </a>
            <a href="#services" className="text-sm tracking-wider text-gray-300 hover:text-gold-400">
              SERVICES
            </a>
            <a href="#contact" className="text-sm tracking-wider text-gray-300 hover:text-gold-400">
              CONTACT
            </a>
            <button className="px-6 py-2 bg-gold-500 text-black text-sm tracking-wider w-full">
              SCHEDULE VIEWING
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
