import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import LogoRingMotif from './LogoRingMotif';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development (₹6,000)',
    'UI/UX Design (from ₹5,000)',
    'Digital Marketing (from ₹8,000)',
    'Content Creation (from ₹4,000)',
  ];

  return (
    <footer className="bg-[#FFFDFB] dark:bg-[#181614] border-t border-[#ED7751]/15 text-[#6B6862] dark:text-[#FFFDFB]/70 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <LogoRingMotif className="w-8 h-8 text-[#ED7751]" />
              <span className="font-space font-extrabold text-2xl text-[#2B2926] dark:text-[#FFFDFB] tracking-tight">
                QUADERS<span className="text-[#ED7751]">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#6B6862] dark:text-[#FFFDFB]/70 leading-relaxed">
              Your freelance studio for end-to-end web engineering, UI/UX design, performance marketing, and creative brand content.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-space font-bold text-sm text-[#2B2926] dark:text-[#FFFDFB] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-[#ED7751] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-space font-bold text-sm text-[#2B2926] dark:text-[#FFFDFB] uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul className="space-y-2">
              {services.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm">
                  <a href="#services" className="hover:text-[#ED7751] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Out */}
          <div>
            <h4 className="font-space font-bold text-sm text-[#2B2926] dark:text-[#FFFDFB] uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <p className="text-xs sm:text-sm mb-2">
              <strong>Phone / WA:</strong> <a href="https://wa.me/917092490337" className="hover:text-[#ED7751] transition-colors">+91 70924 90337</a>
            </p>
            <p className="text-xs sm:text-sm mb-4">
              <strong>Email:</strong> <a href="mailto:mohamedasfaquea@gmail.com" className="hover:text-[#ED7751] transition-colors break-all">mohamedasfaquea@gmail.com</a>
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-[#ED7751] hover:text-[#FFFDFB] text-xs font-space font-semibold transition-all duration-200 border border-[#ED7751]/20"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#ED7751]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Quaders Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-[#ED7751] fill-[#ED7751]" /> for digital growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
