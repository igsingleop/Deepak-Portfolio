import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, Clock, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '₹10,000 - ₹25,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: 'Web Development',
        budget: '₹10,000 - ₹25,000',
        message: '',
      });
    }, 4000);
  };

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    {
      name: 'Twitter/X',
      href: 'https://twitter.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm7.848 10.428a10.05 10.05 0 0 1-4.757 1.054c-.11 0-.22 0-.33-.005a18.286 18.286 0 0 0 3.255-6.953 10.155 10.155 0 0 1 1.832 5.904zm-3.69-6.985a16.275 16.275 0 0 1-3.003 6.467 27.868 27.868 0 0 1-5.836-3.82 10.088 10.088 0 0 1 8.839-2.647zM3.926 7.423a26.064 26.064 0 0 0 6.096 3.961 14.159 14.159 0 0 1-4.492 8.358A10.076 10.076 0 0 1 3.926 7.423zm3.177 13.565A12.213 12.213 0 0 0 11.236 13c1.947 1.854 4.093 3.473 6.402 4.84a10.08 10.08 0 0 1-10.535 3.148zM19.1 16.326a38.411 38.411 0 0 0-6.071-4.636 20.316 20.316 0 0 0 .34-.005 12.03 12.03 0 0 0 5.438-1.226 10.065 10.065 0 0 1 .293 5.867z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#FFFDFB] dark:bg-[#181614]">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 glow-orb-coral opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-space font-semibold tracking-widest text-[#ED7751] uppercase"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]"
          >
            Let's Build Something <span className="gradient-text-coral">Extraordinary</span>
          </motion.h2>

          <p className="mt-4 text-base text-[#6B6862] dark:text-[#FFFDFB]/75">
            Have a project in mind or need a custom quote? Fill out the form or reach out directly to our team.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-[#ED7751]/20 shadow-glass-card"
          >
            <h3 className="text-2xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB] mb-2">
              Send us a message
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6862] dark:text-[#FFFDFB]/70 mb-8">
              We usually respond within 2 hours during business hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#FBEAE3] dark:bg-[#201D1A] border border-[#ED7751] text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#ED7751] mx-auto mb-3" />
                <h4 className="text-xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                  Thank you! Message Received.
                </h4>
                <p className="text-sm text-[#6B6862] dark:text-[#FFFDFB]/80 mt-2">
                  Our team will review your project details and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-space font-semibold uppercase tracking-wider text-[#2B2926] dark:text-[#FFFDFB] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDFB] dark:bg-[#181614] border border-[#ED7751]/20 focus:border-[#ED7751] focus:ring-2 focus:ring-[#ED7751]/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-space font-semibold uppercase tracking-wider text-[#2B2926] dark:text-[#FFFDFB] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDFB] dark:bg-[#181614] border border-[#ED7751]/20 focus:border-[#ED7751] focus:ring-2 focus:ring-[#ED7751]/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-space font-semibold uppercase tracking-wider text-[#2B2926] dark:text-[#FFFDFB] mb-2">
                      Project Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDFB] dark:bg-[#181614] border border-[#ED7751]/20 focus:border-[#ED7751] focus:ring-2 focus:ring-[#ED7751]/20 outline-none transition-all text-sm"
                    >
                      <option value="Web Development">Web Development (from ₹6,000)</option>
                      <option value="UI/UX Design">UI/UX Design (from ₹5,000)</option>
                      <option value="Digital Marketing">Digital Marketing (from ₹8,000)</option>
                      <option value="Content Creation">Content Creation (from ₹4,000)</option>
                      <option value="Full Digital Package">Full Digital Package (Bundled)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-space font-semibold uppercase tracking-wider text-[#2B2926] dark:text-[#FFFDFB] mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDFB] dark:bg-[#181614] border border-[#ED7751]/20 focus:border-[#ED7751] focus:ring-2 focus:ring-[#ED7751]/20 outline-none transition-all text-sm"
                    >
                      <option value="Under ₹10,000">Under ₹10,000</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000+">₹50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-space font-semibold uppercase tracking-wider text-[#2B2926] dark:text-[#FFFDFB] mb-2">
                    Project Overview *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals, timeline, and key requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDFB] dark:bg-[#181614] border border-[#ED7751]/20 focus:border-[#ED7751] focus:ring-2 focus:ring-[#ED7751]/20 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#ED7751] hover:bg-[#D9603B] text-[#FFFDFB] font-space font-semibold text-sm tracking-wide shadow-coral-sm hover:shadow-coral-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Submit Project Inquiry</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side: Contact Info Card with Coral Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#ED7751] to-[#D9603B] text-[#FFFDFB] shadow-coral-glow flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Decorative Mesh Circles */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#FFFDFB]/10 blur-2xl pointer-events-none" />

            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#FFFDFB]/20 backdrop-blur-md text-[#FFFDFB] text-xs font-space font-semibold tracking-wider uppercase">
                DIRECT CONTACT
              </span>

              <h3 className="text-3xl font-extrabold font-space mt-4">
                Let's start a conversation.
              </h3>
              <p className="mt-2 text-sm text-[#FFFDFB]/90 leading-relaxed">
                Prefer direct call or WhatsApp? Reach out to our lead team directly anytime.
              </p>

              {/* Details List */}
              <div className="mt-8 space-y-6">
                <a
                  href="https://wa.me/917092490337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFDFB]/10 hover:bg-[#FFFDFB]/20 backdrop-blur-md transition-colors border border-[#FFFDFB]/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFFDFB] text-[#ED7751] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#FFFDFB]/80 font-space">Phone / WhatsApp</div>
                    <div className="text-base font-bold font-space tracking-wide">+91 70924 90337</div>
                  </div>
                </a>

                <a
                  href="mailto:mohamedasfaquea@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFDFB]/10 hover:bg-[#FFFDFB]/20 backdrop-blur-md transition-colors border border-[#FFFDFB]/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFFDFB] text-[#ED7751] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#FFFDFB]/80 font-space">Email Us Directly</div>
                    <div className="text-base font-bold font-space tracking-wide break-all">mohamedasfaquea@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFDFB]/10 backdrop-blur-md border border-[#FFFDFB]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFDFB] text-[#ED7751] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#FFFDFB]/80 font-space">Response Time</div>
                    <div className="text-sm font-bold font-space">Under 2 hours • Mon - Sat</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Footer */}
            <div className="mt-10 pt-6 border-t border-[#FFFDFB]/20">
              <div className="text-xs font-space font-semibold uppercase tracking-wider text-[#FFFDFB]/80 mb-3">
                Follow Us Online
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#FFFDFB]/15 hover:bg-[#FFFDFB] hover:text-[#ED7751] transition-all duration-200 border border-[#FFFDFB]/20"
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
