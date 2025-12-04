import { Link, useLocation } from 'react-router';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/MUST_BE_COW_KBBQ_Sacramento_logo.jpg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#1a1614] shadow-lg sticky top-0 z-50 border-b border-[#332d28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Must Be Cow" className="h-12 w-12 sm:h-16 sm:w-16" />
            <div>
              <div className="text-[#c8302e] tracking-wide">MUST BE COW</div>
              <div className="text-xs text-[#d4a574] hidden sm:block">Korean BBQ & Sushi</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-[#c8302e]'
                    : 'text-white hover:text-[#c8302e]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+19164364795"
              className="hidden sm:flex items-center gap-2 bg-[#c8302e] text-white px-6 py-2 rounded-lg hover:bg-[#a52622] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(916) 436-4795</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#332d28]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 transition-colors ${
                  isActive(item.path)
                    ? 'text-[#c8302e] bg-[#332d28]'
                    : 'text-white hover:bg-[#332d28]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+19164364795"
              className="flex items-center gap-2 bg-[#c8302e] text-white px-4 py-3 mx-4 mt-4 rounded-lg hover:bg-[#a52622] transition-colors justify-center"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
