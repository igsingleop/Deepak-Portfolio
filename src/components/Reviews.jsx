import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ThumbsUp
} from 'lucide-react';

const reviewsData = [
  {
    id: 'sundhar03',
    name: 'sundhar03',
    location: 'India 🇮🇳',
    role: 'Client • Web App Development',
    company: 'India',
    rating: 4.3,
    timeAgo: '1 year ago',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    comment: 'We had the pleasure of working with Deepak on our web app development project, specifically for UI/UX design, and he exceeded our expectations.',
    project: 'Website UI/UX Design',
    price: '₹4,800-₹9,600',
    duration: '4 days',
    tags: ['Website UI/UX Design', 'Web App Development', 'Figma Prototyping'],
    verified: true,
  },
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'United States 🇺🇸',
    role: 'Senior Product Manager',
    company: 'TechFlow Solutions',
    rating: 5.0,
    timeAgo: '6 months ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    comment: 'Deepak transformed our web application interface with exceptional precision. His React component architecture cut our page load times by 40% while delivering a futuristic, ultra-responsive design.',
    project: 'E-Commerce Web App',
    price: '$1,200-$2,500',
    duration: '2 weeks',
    tags: ['React.js', 'Tailwind CSS', 'Performance Optimization'],
    verified: true,
  },
  {
    id: 2,
    name: 'Marcus Vance',
    location: 'Canada 🇨🇦',
    role: 'Co-Founder & CEO',
    company: 'Univally EdTech',
    rating: 5.0,
    timeAgo: '8 months ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: 'Working with Deepak on our EdTech platform UI was an absolute pleasure. His Figma interactive prototypes and user-centric layouts drastically improved user onboarding retention.',
    project: 'Learning Platform UI',
    price: '$800-$1,800',
    duration: '10 days',
    tags: ['Figma Prototyping', 'UI/UX Design', 'User Research'],
    verified: true,
  },
  {
    id: 3,
    name: 'Aravind Sharma',
    location: 'India 🇮🇳',
    role: 'Senior Operations Lead',
    company: 'Hexaware Technologies',
    rating: 5.0,
    timeAgo: '1 year ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    comment: 'Deepak maintained a stellar 99.8% SLA compliance rate across complex digital supply chain workflows. His quality control & data auditing speed under tight deadlines is remarkable.',
    project: 'Digital Supply Operations',
    price: 'Contract',
    duration: '6 months',
    tags: ['Quality Control (QC)', 'SLA Management', 'Data Auditing'],
    verified: true,
  },
  {
    id: 4,
    name: 'Elena Rostova',
    location: 'United Kingdom 🇬🇧',
    role: 'Creative Director',
    company: 'Carrezza Global',
    rating: 5.0,
    timeAgo: '5 months ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    comment: 'Deepak has a rare blend of artistic eye and clean coding discipline. He translated complex design specs into smooth, high-performing React components with stunning micro-animations.',
    project: 'Global Client Portal',
    price: 'Full-time',
    duration: 'Ongoing',
    tags: ['React.js', 'ES6+ JavaScript', 'Framer Motion'],
    verified: true,
  },
  {
    id: 5,
    name: 'Michael Chang',
    location: 'Singapore 🇸🇬',
    role: 'Lead Software Architect',
    company: 'NexaCloud Systems',
    rating: 5.0,
    timeAgo: '10 months ago',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    comment: 'Deepak’s code is clean, modular, and extremely easy to integrate. His thorough QC verification before deployment ensured zero breaking bugs during our major launch.',
    project: 'SaaS Front-End Suite',
    price: '$1,500-$3,000',
    duration: '3 weeks',
    tags: ['Front-End Dev', 'QC Verification', 'Reusable Components'],
    verified: true,
  },
];

export default function Reviews() {
  // Repeat items 4x to ensure 100% continuous, mathematically seamless infinite marquee
  const marqueeReviews = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-darkCard/10">
      {/* Inline Keyframe Styles for Smooth Marquee */}
      <style>{`
        @keyframes smoothInfiniteMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-continuous {
          animation: smoothInfiniteMarquee 50s linear infinite;
        }
      `}</style>

      {/* Ambient Glow Orbs */}
      <div className="absolute left-1/4 top-10 w-[450px] h-[450px] rounded-full glow-orb-violet -z-10 animate-pulse-glow opacity-40"></div>
      <div className="absolute right-10 bottom-20 w-[400px] h-[400px] rounded-full glow-orb-emerald -z-10 animate-float-slow opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 mb-10">
        {/* Section Badge & Title */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
              <Sparkles size={14} className="text-emerald-500" />
              Client & Supervisor Feedback
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white mt-4 mb-4"
          >
            Client <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">Reviews</span> & Feedback
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-inter text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Real feedback and ratings from clients, co-founders, and project supervisors.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 mx-auto rounded-full mt-5"
          />

          {/* Metrics Header */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="font-outfit font-bold text-sm text-slate-800 dark:text-slate-200">5.0 / 4.9 Rating</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm">
              <ThumbsUp size={16} className="text-emerald-500" />
              <span className="font-outfit font-bold text-sm text-slate-800 dark:text-slate-200">100% Client Satisfaction</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm">
              <CheckCircle2 size={16} className="text-indigo-500" />
              <span className="font-outfit font-bold text-sm text-slate-800 dark:text-slate-200">Verified Client Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* INFINITE SCROLLING MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft Side Masking Gradient Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 dark:from-darkBg via-slate-50/80 dark:via-darkBg/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 dark:from-darkBg via-slate-50/80 dark:via-darkBg/80 to-transparent z-20 pointer-events-none" />

        {/* Single Horizontal Continuous Track */}
        <div
          className="flex gap-6 w-max animate-marquee-continuous"
          style={{ willChange: 'transform' }}
        >
          {marqueeReviews.map((review, idx) => (
            <ReviewCard key={`rev-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Review Card Component
function ReviewCard({ review }) {
  const fullStars = Math.floor(review.rating);
  const hasHalfStar = review.rating % 1 !== 0;

  return (
    <div
      className="w-[340px] sm:w-[440px] shrink-0 p-6 sm:p-7 rounded-3xl glass-panel-strong hover:shadow-2xl transition-all duration-300 border border-white/60 dark:border-white/10 relative flex flex-col justify-between group hover:-translate-y-1.5"
    >
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-b-full opacity-70 group-hover:opacity-100 transition-opacity"></div>

      <div>
        {/* Card Header: Rating, Date & Quote Icon */}
        <div className="flex items-center justify-between mb-4 pt-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-400">
              {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} size={16} fill="currentColor" />
              ))}
              {hasHalfStar && (
                <Star size={16} fill="currentColor" className="opacity-60" />
              )}
            </div>
            <span className="font-outfit font-bold text-xs text-slate-700 dark:text-slate-300">
              {review.rating}
            </span>
            {review.timeAgo && (
              <span className="font-outfit text-xs text-slate-400 dark:text-slate-500 ml-1">
                • {review.timeAgo}
              </span>
            )}
          </div>
          
          <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-emerald-400">
            <Quote size={18} className="transform rotate-180" />
          </span>
        </div>

        {/* Review Comment Text */}
        <p className="font-inter text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
          "{review.comment}"
        </p>

        {/* Project Metadata: Price & Duration */}
        {(review.price || review.duration) && (
          <div className="flex items-center gap-4 mb-5 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 font-outfit text-xs text-slate-600 dark:text-slate-400">
            {review.price && (
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Price</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{review.price}</span>
              </div>
            )}
            {review.price && review.duration && <div className="h-6 w-px bg-slate-300 dark:bg-slate-800" />}
            {review.duration && (
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Duration</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{review.duration}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        {/* Project Tag */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="font-outfit text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-emerald-500/10 text-indigo-600 dark:text-emerald-400 border border-indigo-500/20 dark:border-emerald-500/20 flex items-center gap-1.5 truncate">
            <Building2 size={12} className="shrink-0" />
            <span className="truncate">{review.project}</span>
          </span>
          {review.verified && (
            <span className="font-outfit text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 shrink-0">
              <CheckCircle2 size={13} />
              Verified
            </span>
          )}
        </div>

        {/* Client Profile Info */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-3.5">
          <div className="relative shrink-0">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/30 dark:border-emerald-400/30"
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
              <CheckCircle2 size={10} className="text-white" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="font-sora font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate group-hover:text-indigo-500 dark:group-hover:text-emerald-400 transition-colors">
              {review.name}
            </h4>
            <p className="font-outfit text-xs text-slate-500 dark:text-slate-400 truncate">
              {review.role} {review.location && `• ${review.location}`}
            </p>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {review.tags.map((tag) => (
            <span
              key={tag}
              className="font-outfit text-[10px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
