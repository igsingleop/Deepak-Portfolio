import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Layers,
      title: 'End-to-End Execution',
      desc: 'No sub-contracting or fragmented teams. Design, engineering, growth marketing, and copy built under one cohesive studio.',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround & Agility',
      desc: 'Weekly sprint demos with direct slack/whatsapp communication. We launch MVP websites in as fast as 5-10 business days.',
    },
    {
      icon: ShieldCheck,
      title: 'Fixed & Transparent Pricing',
      desc: 'Zero hidden retainers or unexpected billing surprises. Clear deliverables, milestones, and guaranteed upfront pricing.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Post-Launch Support',
      desc: 'We do not vanish after delivery. Includes free maintenance, security updates, and performance tuning for peace of mind.',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#FFFDFB] dark:bg-[#181614]">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-coral opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-space font-semibold tracking-widest text-[#ED7751] uppercase"
          >
            THE QUADERS ADVANTAGE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]"
          >
            Why Ambitious Brands <span className="gradient-text-coral">Choose Quaders</span>
          </motion.h2>

          <p className="mt-4 text-base text-[#6B6862] dark:text-[#FFFDFB]/75">
            We combine high-end agency polish with direct founder accessibility and freelance cost-efficiency.
          </p>
        </div>

        {/* 4 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-[#ED7751]/15 hover:border-[#ED7751]/40 shadow-glass-card hover:shadow-glass-card-hover transition-all duration-300 flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FBEAE3] dark:bg-[#2B2926] text-[#ED7751] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B6862] dark:text-[#FFFDFB]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
