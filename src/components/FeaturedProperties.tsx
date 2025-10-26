import { MapPin, Home, Maximize2, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Imperial Residence',
    location: 'South Mumbai',
    type: 'Penthouse',
    area: '8,500 sq.ft',
    price: '₹45 Crores',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Oberoi Villa',
    location: 'Juhu, Mumbai',
    type: 'Villa',
    area: '12,000 sq.ft',
    price: '₹85 Crores',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 3,
    title: 'Crown Tower Suite',
    location: 'Golf Course Road, Gurgaon',
    type: 'Apartment',
    area: '6,200 sq.ft',
    price: '₹28 Crores',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 4,
    title: 'Heritage Manor',
    location: 'Lutyens Delhi',
    type: 'Bungalow',
    area: '15,000 sq.ft',
    price: '₹125 Crores',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 5,
    title: 'Serenity Waterfront',
    location: 'Worli, Mumbai',
    type: 'Apartment',
    area: '7,800 sq.ft',
    price: '₹52 Crores',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 6,
    title: 'Royal Gardens Estate',
    location: 'Bangalore',
    type: 'Villa',
    area: '10,500 sq.ft',
    price: '₹38 Crores',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm tracking-[0.3em] mb-4">EXCLUSIVE COLLECTION</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Featured Properties
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked residences that define luxury living in India's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative bg-zinc-900 overflow-hidden cursor-pointer border border-zinc-800 hover:border-gold-500/50 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gold-500 text-black px-4 py-1 text-xs tracking-widest">
                    FEATURED
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center text-gray-300 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">{property.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-2" />
                    {property.type}
                  </div>
                  <div className="flex items-center">
                    <Maximize2 className="w-4 h-4 mr-2" />
                    {property.area}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-serif text-gold-400">{property.price}</div>
                  <button className="flex items-center text-gold-400 hover:text-gold-300 transition-colors group">
                    <span className="text-sm tracking-wider mr-2">VIEW</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 border border-gold-500/50 text-gold-400 text-sm tracking-widest hover:bg-gold-500/10 transition-all">
            VIEW ALL PROPERTIES
          </button>
        </div>
      </div>
    </section>
  );
}
