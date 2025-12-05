import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import logo from '../assets/MUST_BE_COW_KBBQ_Sacramento_logo.jpg';

interface FooterProps {
  base?: string;
}

export default function Footer({ base = '/' }: FooterProps) {
  const getPath = (path: string) => {
    if (path === '/') {
      return base === '/' ? '/' : base.endsWith('/') ? base : `${base}/`;
    }
    const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${basePath}${path}`;
  };
  return (
    <footer className="bg-[#1a1614] text-[#f5f1e8] border-t border-[#332d28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href={getPath('/')} className="flex items-center gap-3 mb-4">
              <ImageWithFallback src={logo} alt="Must Be Cow" className="h-16 w-16 rounded" loading="lazy" decoding="async" />
              <div>
                <div className="text-[#c8302e]">MUST BE COW</div>
                <div className="text-sm text-[#d4a574]">Korean BBQ & Sushi</div>
              </div>
            </a>
            <p className="text-sm text-[#d4a574] mb-4">
              Premium all-you-can-eat Korean BBQ and sushi in Citrus Heights
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-[#d4a574] flex-shrink-0" />
                <address className="not-italic text-[#d4a574]">
                  5511 Sunrise Blvd<br />
                  Citrus Heights, CA 95610
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d4a574]" />
                <a href="tel:+19164364795" className="text-[#d4a574] hover:text-white transition-colors">
                  (916) 436-4795
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white mb-4">Hours</h3>
            <div className="space-y-2 text-sm text-[#d4a574]">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Mon-Thu: 11:00 AM - 9:00 PM</p>
                  <p>Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat: 11:00 AM - 10:00 PM</p>
                  <p>Sun: 11:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href={getPath('/menu')} className="block text-[#d4a574] hover:text-white transition-colors">
                View Menu
              </a>
              <a href={getPath('/gallery')} className="block text-[#d4a574] hover:text-white transition-colors">
                Photo Gallery
              </a>
              <a href={getPath('/about')} className="block text-[#d4a574] hover:text-white transition-colors">
                About Us
              </a>
              <a href={getPath('/contact')} className="block text-[#d4a574] hover:text-white transition-colors">
                Location & Directions
              </a>
              <a
                href="https://www.yelp.com/biz/must-be-cow-citrus-heights"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#d4a574] hover:text-white transition-colors"
              >
                Review us on Yelp
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-[#5a4a40] mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-[#d4a574]">
            <p>&copy; {new Date().getFullYear()} Must Be Cow. All rights reserved.</p>
            <div className="flex gap-4">
              <a href={getPath('/privacy')} className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-[#5a4a40]">|</span>
              <a href={getPath('/terms')} className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
