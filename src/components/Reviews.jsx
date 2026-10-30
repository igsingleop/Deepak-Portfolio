import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Rohan Sharma',
      role: 'Founder & CEO',
      company: 'Aura Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      content: 'Quaders transformed our SaaS concept into a lightning-fast React application in under 2 weeks. Their UI/UX design is world-class and our conversion rates jumped by 34%!',
    },
    {
      id: 2,
      name: 'Ananya Verma',
      role: 'Head of Marketing',
      company: 'Kinetix Fitness',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      content: 'Working with Mohamed and the Quaders team was seamless. They handled our Figma UI design and Meta Ads campaign simultaneously. The direct communication made all the difference.',
    },
    {
      id: 3,
      name: 'Vikram Patel',
      role: 'Co-Founder',
      company: 'FinTech Capital',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      content: 'Fixed pricing, no surprises, and extreme attention to performance. They delivered our web portal with zero bugs and sub-second load times. Highly recommended!',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#F5F3F0]/60 dark:bg-[#181614]">
      {/* Background Coral Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 glow-orb-coral opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-space font-semibold tracking-widest text-[#ED7751] uppercase"
          >
            CLIENT TESTIMONIALS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]"
          >
            Trusted by Innovators <span className="gradient-text-coral">& Founders</span>
          </motion.h2>

          <p className="mt-4 text-base text-[#6B6862] dark:text-[#FFFDFB]/75">
            Hear directly from startup founders and marketing leaders who scaled with Quaders.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full glass-card p-8 sm:p-12 rounded-3xl border border-[#ED7751]/20 shadow-coral-sm relative"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-[#ED7751]/15" />

                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#ED7751]">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ED7751]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-base sm:text-xl text-[#2B2926] dark:text-[#FFFDFB] font-inter italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#ED7751]/15">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#ED7751]"
                  />
                  <div>
                    <h4 className="font-space font-bold text-base sm:text-lg text-[#2B2926] dark:text-[#FFFDFB]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B6862] dark:text-[#FFFDFB]/70 font-medium">
                      {testimonials[currentIndex].role} • <span className="text-[#ED7751] font-semibold">{testimonials[currentIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#ED7751]' : 'w-2.5 bg-[#ED7751]/30 hover:bg-[#ED7751]/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full glass-card hover:bg-[#ED7751] hover:text-[#FFFDFB] text-[#2B2926] dark:text-[#FFFDFB] transition-all duration-200 border border-[#ED7751]/20"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full glass-card hover:bg-[#ED7751] hover:text-[#FFFDFB] text-[#2B2926] dark:text-[#FFFDFB] transition-all duration-200 border border-[#ED7751]/20"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
