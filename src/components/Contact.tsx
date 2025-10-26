import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm tracking-[0.3em] mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Begin Your Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with our luxury property specialists for a personalized consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Property Interest</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your property requirements"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gold-500 text-black text-sm tracking-widest hover:bg-gold-400 transition-all"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nariman Point<br />
                    Mumbai, Maharashtra 400021<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Phone className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-2">Call Us</h3>
                  <p className="text-gray-400 text-sm">+91 22 6789 0000</p>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-2">Email Us</h3>
                  <p className="text-gray-400 text-sm">info@osirisestates.in</p>
                  <p className="text-gray-400 text-sm">luxury@osirisestates.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-2">Business Hours</h3>
                  <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
