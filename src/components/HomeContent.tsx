import { Star, Clock, MapPin, Phone, UtensilsCrossed, ChefHat, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { useEffect } from 'react';
import mbcGrillFood from '../assets/MBC_Grill+Food.jpg';
import mbcFood1 from '../assets/MBC_Food.jpg';
import mbcIndoor1 from '../assets/MBC_Indoor.jpg';
import mbcFood2 from '../assets/MBC_Food2.jpg';
import mbcFood3 from '../assets/MBC_Food3.jpg';

interface HomeContentProps {
  base?: string;
}

export default function HomeContent({ base = '/' }: HomeContentProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Must Be Cow - Korean BBQ & Sushi in Citrus Heights, CA | All-You-Can-Eat KBBQ';
    }
  }, []);

  const getPath = (path: string) => {
    if (path === '/') {
      return base === '/' ? '/' : base.endsWith('/') ? base : `${base}/`;
    }
    const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${basePath}${path}`;
  };

  const highlights = [
    {
      icon: UtensilsCrossed,
      title: 'All-You-Can-Eat',
      description: 'Unlimited premium Korean BBQ and fresh sushi at affordable prices'
    },
    {
      icon: ChefHat,
      title: 'Premium Quality',
      description: 'High-quality meats and fresh ingredients grilled to perfection'
    },
    {
      icon: Sparkles,
      title: 'BBQ & Sushi',
      description: 'Enjoy the best of both worlds with our extensive menu selection'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect for families, groups, and special celebrations'
    }
  ];

  const menuCategories = [
    {
      title: 'Korean BBQ',
      description: 'Premium beef, pork, and chicken grilled at your table',
      items: ['Beef Bulgogi', 'Spicy Pork Belly', 'Garlic Shrimp', 'Chicken Teriyaki'],
      link: getPath('/menu#kbbq'),
      image: mbcGrillFood
    },
    {
      title: 'Sushi Hand Roll',
      description: 'Fresh sushi hand rolls made to order',
      items: ['California Roll', 'Spicy Tuna', 'Salmon Avocado', 'Philadelphia'],
      link: getPath('/menu#sushi'),
      image: mbcFood2
    },
    {
      title: 'Appetizers',
      description: 'Delicious starters to complement your meal',
      items: ['Fried Chicken Wings', 'Edamame', 'Seaweed Salad', 'Fried Dumplings'],
      link: getPath('/menu#appetizers'),
      image: mbcFood3
    }
  ];

  return (
    <div>
      {/* Hero Section - Full screen with background image and overlay */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={mbcGrillFood}
            alt="Korean BBQ Table"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#1a1614]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl">
            DINE-IN ONLY
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Must Be Cow – Korean BBQ & Sushi in Citrus Heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={getPath('/menu')}
              className="inline-flex items-center justify-center gap-2 bg-[#c8302e] text-white px-10 py-4 rounded-lg hover:bg-[#a52622] transition-colors text-lg"
            >
              View Our Menu
            </a>
            <a
              href="tel:+19164364795"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              (916) 436-4795
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-[#2d2420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Why Choose Must Be Cow</h2>
            <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
              We bring you the authentic Korean BBQ experience with premium quality and unlimited enjoyment
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c8302e]/20 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-[#c8302e]" />
                  </div>
                  <h3 className="text-white mb-2">{highlight.title}</h3>
                  <p className="text-[#d4a574]/80">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-16 bg-[#1a1614]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Our Menu</h2>
            <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
              Choose from our Silver ($28.99) or Gold ($39.99) all-you-can-eat tiers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-[#1a1614]/80 to-[#1a1614]/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 min-h-[400px] flex flex-col justify-end">
                  <h3 className="text-[#c8302e] mb-3">{category.title}</h3>
                  <p className="text-[#d4a574] mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-white/90 flex items-center gap-2 text-sm">
                        <span className="text-[#c8302e]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={category.link}
                    className="text-white hover:text-[#c8302e] transition-colors inline-flex items-center gap-2 group"
                  >
                    View Full Selection 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={getPath('/menu')}
              className="inline-flex items-center gap-2 bg-[#c8302e] text-white px-10 py-4 rounded-lg hover:bg-[#a52622] transition-colors text-lg"
            >
              View Complete Menu
            </a>
          </div>
        </div>
      </section>

      {/* Yelp & Reviews Section */}
      <section className="py-16 bg-[#2d2420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#332d28] rounded-xl p-6 border border-[#4a3d35]">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#d4a574] text-[#d4a574]" />
                ))}
              </div>
              <p className="text-white/90 mb-4">
                "Amazing all-you-can-eat experience! The quality of the meat is outstanding and the staff is super friendly."
              </p>
              <div className="text-sm text-[#d4a574]">- Sarah K. on Yelp</div>
            </div>
            <div className="bg-[#332d28] rounded-xl p-6 border border-[#4a3d35]">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#d4a574] text-[#d4a574]" />
                ))}
              </div>
              <p className="text-white/90 mb-4">
                "Best Korean BBQ in the area! The sushi selection is great too. Highly recommend the Gold tier!"
              </p>
              <div className="text-sm text-[#d4a574]">- Michael T. on Yelp</div>
            </div>
            <div className="bg-[#332d28] rounded-xl p-6 border border-[#4a3d35]">
              <div className="flex mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#d4a574] text-[#d4a574]" />
                ))}
                <Star className="h-5 w-5 fill-[#d4a574] text-[#d4a574] opacity-50" />
              </div>
              <p className="text-white/90 mb-4">
                "Perfect for family dinners! Great variety and the kids love grilling their own food."
              </p>
              <div className="text-sm text-[#d4a574]">- Jennifer L. on Yelp</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.yelp.com/biz/must-be-cow-citrus-heights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c8302e] hover:text-[#a52622] transition-colors"
            >
              Read More Reviews on Yelp →
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-[#1a1614]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-white mb-2">CITRUS HEIGHTS</h2>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Map */}
            <div className="h-[300px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.7286849844753!2d-121.28544892340743!3d38.67964337177298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adf0f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s5511%20Sunrise%20Blvd%2C%20Citrus%20Heights%2C%20CA%2095610!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Must Be Cow Location"
              ></iframe>
            </div>

            {/* Location Info */}
            <div className="p-8 text-center">
              <a
                href="tel:+19164364795"
                className="inline-flex items-center justify-center gap-2 bg-[#c8302e] text-white px-10 py-4 rounded-lg hover:bg-[#a52622] transition-colors text-lg mb-8 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <address className="not-italic mb-6">
                <div className="text-xl text-[#2d2420] mb-1">5511 Sunrise Blvd</div>
                <div className="text-lg text-[#4a3d35]">Citrus Heights, CA 95610</div>
              </address>

              <a
                href="tel:+19164364795"
                className="text-[#c8302e] hover:text-[#a52622] transition-colors text-lg mb-6 block"
              >
                (916) 436-4795
              </a>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-[#2d2420] mb-4">Hours</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-[#4a3d35] max-w-lg mx-auto">
                  <div className="flex justify-between">
                    <span>Mon - Thu</span>
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5511+Sunrise+Blvd+Citrus+Heights+CA+95610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8302e] hover:text-[#a52622] transition-colors inline-flex items-center gap-2"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 bg-[#2d2420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Gallery</h2>
            <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
              See what makes Must Be Cow special
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <ImageWithFallback
                src={mbcGrillFood}
                alt="Korean BBQ grill with fresh meat cooking"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <ImageWithFallback
                src={mbcFood1}
                alt="Fresh Korean BBQ and sushi selection"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <ImageWithFallback
                src={mbcIndoor1}
                alt="Modern restaurant interior with grill tables"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href={getPath('/gallery')}
              className="inline-flex items-center gap-2 text-[#c8302e] hover:text-[#a52622] transition-colors"
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

