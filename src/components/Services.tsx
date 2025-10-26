import { Key, Search, FileText, TrendingUp, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Property Search',
    description: 'Access to exclusive off-market properties tailored to your exact requirements and lifestyle preferences.',
  },
  {
    icon: Key,
    title: 'Luxury Rentals',
    description: 'Premium rental properties for executives and families seeking the finest temporary accommodations.',
  },
  {
    icon: FileText,
    title: 'Legal Assistance',
    description: 'Complete legal support and documentation for seamless property transactions and ownership transfer.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Strategic guidance on high-value property investments with maximum returns and appreciation potential.',
  },
  {
    icon: Shield,
    title: 'Property Management',
    description: 'Comprehensive property management services to maintain and enhance your valuable real estate assets.',
  },
  {
    icon: Users,
    title: 'Concierge Services',
    description: 'Personalized concierge support for all your property-related needs, available round the clock.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm tracking-[0.3em] mb-4">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Comprehensive Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end luxury real estate solutions designed to exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black border border-zinc-800 p-8 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all">
                <service.icon className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
