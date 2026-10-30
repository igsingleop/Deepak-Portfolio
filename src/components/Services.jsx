import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, TrendingUp, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import TiltCard from './3DTiltCard';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      icon: Code2,
      title: 'Web Development',
      price: '₹6,000',
      priceNote: 'fixed price',
      tagline: 'Lightning-fast modern web applications built for high performance and conversion.',
      features: [
        'React & Next.js Single/Multi-page Apps',
        'Fully Responsive & Mobile-Optimized',
        'SEO Ready & Fast Load Speed (95+ Lighthouse)',
        'Custom Admin Panel & Database Integration',
        'Free SSL, Deployment & 1 Month Maintenance',
      ],
      popular: true,
    },
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'UI/UX Design',
      price: '₹5,000',
      priceNote: 'starting from',
      tagline: 'Intuitive visual interfaces, interactive Figma prototypes, and complete design systems.',
      features: [
        'User Research & Wireframing',
        'High-Fidelity Figma Prototypes',
        'Component Library & Design Tokens',
        'Mobile App & Web Dashboard Interfaces',
        'Developer-Handout Asset Exports',
      ],
      popular: false,
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      price: '₹8,000',
      priceNote: 'starting from',
      tagline: 'Data-driven growth strategies, targeted ad campaigns, and search engine optimization.',
      features: [
        'Search Engine Optimization (On-Page & Technical)',
        'Meta & Google Ads Campaign Setup & Management',
        'Lead Generation Funnels & Copywriting',
        'Social Media Growth & Analytics Tracking',
        'Weekly Conversion Optimization Reports',
      ],
      popular: false,
    },
    {
      id: 'content',
      icon: Sparkles,
      title: 'Content Creation',
      price: '₹4,000',
      priceNote: 'starting from',
      tagline: 'High-impact copy, brand social assets, reels scripts, and promo graphics.',
      features: [
        'Persuasive Website & Ad Copywriting',
        'Instagram / LinkedIn Social Posts & Carousels',
        'Short-form Video Scripts (Reels & Shorts)',
        'Custom Vector Graphics & Brand Assets',
        'Content Calendar Strategy',
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#F5F3F0]/60 dark:bg-[#181614]">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-orb-coral opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-space font-semibold tracking-widest text-[#ED7751] uppercase"
          >
            OUR EXPERTISE & PRICING
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]"
          >
            Specialized Services Built for <span className="gradient-text-coral">Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B6862] dark:text-[#FFFDFB]/75"
          >
            Transparent fixed & flexible pricing with zero hidden fees. Pick a single service or bundle for end-to-end execution.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div
                    className={`relative h-full p-6 rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between group ${
                      service.popular
                        ? 'border-[#ED7751] shadow-coral-sm'
                        : 'border-[#ED7751]/15 hover:border-[#ED7751]/40'
                    }`}
                  >
                    {/* Most Popular Badge */}
                    {service.popular && (
                      <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#ED7751] text-[#FFFDFB] font-space text-xs font-bold uppercase tracking-wider shadow-sm">
                        Popular Choice
                      </span>
                    )}

                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-[#FBEAE3] dark:bg-[#2B2926] flex items-center justify-center text-[#ED7751] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="mt-5 text-xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#6B6862] dark:text-[#FFFDFB]/70 leading-relaxed min-h-[44px]">
                        {service.tagline}
                      </p>

                      {/* Price Pill */}
                      <div className="mt-5 p-3 rounded-2xl bg-[#FBEAE3]/60 dark:bg-[#2A2623]/80 border border-[#ED7751]/20 flex items-baseline justify-between">
                        <span className="text-2xl font-extrabold font-space text-[#ED7751]">
                          {service.price}
                        </span>
                        <span className="text-xs font-medium text-[#6B6862] dark:text-[#FFFDFB]/60 uppercase tracking-wider">
                          {service.priceNote}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="mt-6 space-y-2.5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#2B2926] dark:text-[#FFFDFB]/85">
                            <CheckCircle2 className="w-4 h-4 text-[#ED7751] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => setSelectedService(service)}
                      className="mt-8 w-full py-3 px-4 rounded-xl bg-[#2B2926] dark:bg-[#FFFDFB] text-[#FFFDFB] dark:text-[#2B2926] group-hover:bg-[#ED7751] dark:group-hover:bg-[#ED7751] dark:group-hover:text-[#FFFDFB] font-space text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#2B2926]/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-card bg-[#FFFDFB] dark:bg-[#201D1A] border border-[#ED7751]/30 shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#6B6862] hover:text-[#ED7751] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FBEAE3] text-[#ED7751] flex items-center justify-center">
                  {React.createElement(selectedService.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                    {selectedService.title}
                  </h3>
                  <span className="text-sm font-bold text-[#ED7751] font-space">
                    {selectedService.price} ({selectedService.priceNote})
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#6B6862] dark:text-[#FFFDFB]/80 mb-6">
                {selectedService.tagline}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ED7751] mb-3">
                Deliverables Included:
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#2B2926] dark:text-[#FFFDFB]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#ED7751]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full py-3.5 rounded-xl bg-[#ED7751] text-[#FFFDFB] font-space font-semibold text-center block shadow-coral-sm hover:bg-[#D9603B] transition-colors"
              >
                Book This Service Now
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
