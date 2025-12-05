import { ChefHat, Utensils, Sparkles, Users } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import logo from '../assets/MUST_BE_COW_KBBQ_Sacramento_logo.jpg';

export default function AboutContent() {
  const specialties = [
    {
      icon: ChefHat,
      title: 'Quality & Freshness',
      description: 'We source fresh ingredients and prepare items in-house, ensuring consistent quality in every dish.'
    },
    {
      icon: Utensils,
      title: 'Korean BBQ & Sushi',
      description: 'Bold, smoky flavors of traditional Korean barbecue meets fresh, vibrant made-to-order sushi.'
    },
    {
      icon: Sparkles,
      title: 'All-You-Can-Eat Value',
      description: 'Premium meats, house-marinated favorites, seafood selections, and creative hand rolls crafted to order.'
    },
    {
      icon: Users,
      title: 'Exceptional Service',
      description: 'Attentive service with modern interiors, designed for both everyday dining and high-volume rushes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1614]">
      {/* Hero */}
      <section className="bg-[#2d2420] text-white py-16 border-b border-[#332d28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">About Must Be Cow</h1>
          <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
            A new generation of all-you-can-eat dining where Korean BBQ meets sushi variety
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback src={logo} alt="Must Be Cow Logo" className="w-32 h-32 mb-6 rounded" />
              <h2 className="text-white mb-6">Our Specialties</h2>
              <div className="space-y-4 text-[#d4a574]">
                <p>
                  Must Be Cow is an all-you-can-eat Korean BBQ and sushi concept built on quality, efficiency, and an unforgettable dining experience. Designed for guests who love variety and value, Must Be Cow blends the bold, smoky flavors of traditional Korean barbecue with the fresh, vibrant taste of made-to-order sushi, all in one place.
                </p>
                <p>
                  Our menu features a wide range of premium meats, house-marinated favorites, seafood selections, and creative hand rolls crafted to order. We focus on delivering consistent quality by sourcing fresh ingredients, preparing items in-house, and ensuring each grill-table experience is smooth, interactive, and fun for families, couples, and large groups.
                </p>
                <p>
                  With attentive service, modern interiors, and an emphasis on speed without sacrificing flavor, Must Be Cow is designed to handle both everyday dining and high-volume rushes. Whether guests come for a casual night out, a celebration, or a big gathering, our team is dedicated to delivering exceptional food, prompt service, and a memorable atmosphere every time.
                </p>
                <p className="text-[#c8302e] font-semibold">
                  Must Be Cow represents a new generation of AYCE dining, where Korean BBQ meets sushi variety, all served with hospitality, consistency, and premium value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#332d28]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708675532078-ba3995800f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzUyMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Must Be Cow restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 bg-[#2d2420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">What Makes Us Special</h2>
            <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
              Built on quality, efficiency, and an unforgettable dining experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c8302e]/20 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-[#c8302e]" />
                  </div>
                  <h3 className="text-white mb-3">{specialty.title}</h3>
                  <p className="text-[#d4a574]">{specialty.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-[#1a1614]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 border border-[#332d28]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758762592562-46d8442819b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiYnElMjBncmlsbGluZyUyMG1lYXR8ZW58MXx8fHwxNzY0NzU0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Korean BBQ grilling experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-[#d4a574]">
                <p className="text-xl text-white font-semibold mb-2">
                  Established in 2025
                </p>
                <p>
                  Must Be Cow opens this November 2025, our very first location. We may not have a history yet, but we're here to create one with incredible food, warm service, and a dining experience you'll want to come back to.
                </p>
                <p>
                  As we begin this journey in Citrus Heights, we're excited to build lasting relationships with our community. Every meal, every interaction, and every moment shared around our grill tables will become part of our story—a story we're writing together with you.
                </p>
                <p>
                  Join us as we start this new chapter, bringing together the best of Korean BBQ and sushi in an all-you-can-eat experience that celebrates quality, value, and the joy of great food shared with great company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2d2420] border-t border-[#332d28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Join Us for an Unforgettable Meal</h2>
          <p className="text-lg text-[#d4a574] mb-8">
            Visit Must Be Cow and discover a new generation of all-you-can-eat dining
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19164364795"
              className="inline-flex items-center justify-center gap-2 bg-[#c8302e] text-white px-8 py-3 rounded-lg hover:bg-[#a52622] transition-colors"
            >
              Call Now: (916) 436-4795
            </a>
            <a
              href="https://www.yelp.com/biz/must-be-cow-citrus-heights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#332d28] text-white border-2 border-[#4a3d35] px-8 py-3 rounded-lg hover:bg-[#4a3d35] transition-colors"
            >
              Read Reviews on Yelp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

