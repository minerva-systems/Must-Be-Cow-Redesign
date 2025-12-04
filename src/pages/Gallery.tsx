import { useEffect } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import mbcFood1 from '../assets/MBC_Food.jpg';
import mbcFood2 from '../assets/MBC_Food2.jpg';
import mbcFood3 from '../assets/MBC_Food3.jpg';
import mbcGrillFood from '../assets/MBC_Grill+Food.jpg';
import mbcIndoor1 from '../assets/MBC_Indoor.jpg';
import mbcIndoor2 from '../assets/MBC_Indoor2.jpg';
import mbcIndoor3 from '../assets/MBC_Indoor3.jpg';
import mbcOutdoor from '../assets/MBC_Outdoor.jpg';

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery - Must Be Cow | Photos of Our Korean BBQ Restaurant';
  }, []);

  const galleryImages = [
    {
      url: mbcGrillFood,
      alt: 'Korean BBQ grill with fresh meat cooking',
      category: 'Food'
    },
    {
      url: mbcFood1,
      alt: 'Fresh Korean BBQ and sushi selection',
      category: 'Food'
    },
    {
      url: mbcFood2,
      alt: 'Premium Korean BBQ meats and side dishes',
      category: 'Food'
    },
    {
      url: mbcFood3,
      alt: 'Delicious Korean BBQ platter',
      category: 'Food'
    },
    {
      url: mbcIndoor1,
      alt: 'Modern restaurant interior with grill tables',
      category: 'Restaurant'
    },
    {
      url: mbcIndoor2,
      alt: 'Spacious dining area at Must Be Cow',
      category: 'Restaurant'
    },
    {
      url: mbcIndoor3,
      alt: 'Contemporary Korean BBQ restaurant design',
      category: 'Restaurant'
    },
    {
      url: mbcOutdoor,
      alt: 'Must Be Cow restaurant exterior',
      category: 'Restaurant'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1614]">
      {/* Hero */}
      <section className="bg-[#2d2420] text-white py-16 border-b border-[#332d28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Gallery</h1>
          <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
            Experience the Must Be Cow difference through our photos
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-[#332d28]"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <div className="text-sm mb-1">{image.category}</div>
                    <div className="text-xs text-[#d4a574]">{image.alt}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2d2420] border-t border-[#332d28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Experience It Yourself?</h2>
          <p className="text-lg text-[#d4a574] mb-8">
            Visit us today for an unforgettable all-you-can-eat Korean BBQ and sushi experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19164364795"
              className="inline-flex items-center justify-center gap-2 bg-[#c8302e] text-white px-8 py-3 rounded-lg hover:bg-[#a52622] transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://www.yelp.com/biz/must-be-cow-citrus-heights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#332d28] text-white border-2 border-[#4a3d35] px-8 py-3 rounded-lg hover:bg-[#4a3d35] transition-colors"
            >
              View on Yelp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
