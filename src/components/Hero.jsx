import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Sparkles, Award, Cpu, Layout, CheckCircle2 } from 'lucide-react';
import profileImg from '../assets/IMG_5729.PNG';
import Magnetic from './Magnetic';

// High-End 3D Kinetic Animated Name Component with Glitch-Free Seamless Gradient & Wave Glow
function AnimatedName({ text = "Deepak K N" }) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      rotateX: -60,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 18,
        mass: 0.7,
      },
    },
  };

  return (
    <motion.span
      className="inline-flex flex-wrap items-center cursor-default py-1"
      style={{ perspective: "1000px", perspectiveOrigin: "center" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <span className="inline-flex flex-wrap items-center">
        {letters.map((char, index) => {
          const bgPos = (index / Math.max(letters.length - 1, 1)) * 100;
          return (
            <span
              key={index}
              className="inline-block relative cursor-pointer py-1 px-[1px] group/char"
              style={{ perspective: "600px" }}
            >
              <motion.span
                variants={letterVariants}
                whileHover={{
                  scale: 1.2,
                  y: -6,
                  rotate: index % 2 === 0 ? 5 : -5,
                  transition: { type: "spring", stiffness: 320, damping: 14 },
                }}
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #34d399 100%)",
                  backgroundSize: `${letters.length * 100}% 100%`,
                  backgroundPosition: `${bgPos}% 0%`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
                className="inline-block transition-shadow duration-300 drop-shadow-[0_4px_18px_rgba(99,102,241,0.35)] group-hover/char:drop-shadow-[0_6px_22px_rgba(52,211,153,0.6)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          );
        })}
      </span>

      <motion.span
        animate={{ scale: [1, 1.2, 1], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="ml-3 inline-block text-emerald-400 shrink-0"
      >
        <Sparkles size={28} className="inline drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
      </motion.span>
    </motion.span>
  );
}

const Linkedin = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Fiverr = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
  </svg>
);

const Behance = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0v4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Antigravity Ambient Hero Spotlight & Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-emerald-400/20 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Floating Anti-Gravity Levitating Spheres */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-8 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-md -z-10 shadow-glow-indigo hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 35, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-12 w-36 h-36 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 border border-emerald-400/30 backdrop-blur-md -z-10 shadow-glow-emerald hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

        {/* Left Column: Headline & Intro */}
        <motion.div
          className="lg:col-span-7 flex flex-col text-left justify-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-200/60 dark:bg-darkCard/80 border border-slate-300/40 dark:border-white/10 text-emerald-600 dark:text-emerald-400 font-outfit text-xs font-semibold uppercase tracking-widest mb-6 w-fit shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for Opportunities &amp; Freelance
          </motion.div>

          {/* Main Title with 3D Kinetic Reveal */}
          <motion.h1 variants={itemVariants} className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-900 dark:text-white mb-6 tracking-tight">
            Hi, I'm <br className="hidden sm:inline" />
            <AnimatedName text="Deepak K N" />
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} className="font-outfit font-semibold text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex flex-wrap items-center gap-2">
            <span>Front-End Developer</span>
            <span className="text-indigo-500 font-bold">•</span>
            <span className="text-emerald-500 dark:text-emerald-400">B.Tech AI &amp; Data Science</span>
          </motion.h2>

          {/* Short Bio */}
          <motion.p variants={itemVariants} className="font-inter text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            Combining artificial intelligence insights with intuitive, user-centric visual design to build high-impact web applications and sleek digital experiences.
          </motion.p>

          {/* Action Call To Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
            <Magnetic actionScale={0.15}>
              <a
                href="#portfolio"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 text-white font-outfit font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center gap-3 group hover:scale-[1.02] active:scale-[0.98] block"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic actionScale={0.15}>
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-white/80 dark:bg-darkCard/80 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-outfit font-bold hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all neo-box-out hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md block"
              >
                Let's Talk
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Connect:</span>

            {[
              { href: "https://www.linkedin.com/in/deepaknandhakumar/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com/ig.singleop", icon: Instagram, label: "Instagram" },
              { href: "https://www.fiverr.com/sellers/ig_single/", icon: Fiverr, label: "Fiverr" },
              { href: "https://www.behance.net/deepak-nandhakumar", icon: Behance, label: "Behance" },
              { href: "mailto:deepaksamu77@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+919363112798", icon: Phone, label: "Phone" }
            ].map((social, idx) => {
              const IconComp = social.icon;
              return (
                <Magnetic key={idx} actionScale={0.25}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-white dark:bg-darkCard text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-emerald-400 border border-slate-200/60 dark:border-white/5 transition-all block"
                    title={social.label}
                  >
                    <IconComp size={19} />
                  </a>
                </Magnetic>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Prominent Large-Format Profile Picture Showcase */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Container with generous sizing */}
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/5] flex items-center justify-center p-4">

            {/* Ambient Background Aura Rings */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-400 opacity-30 blur-3xl animate-pulse-glow"></div>

            {/* Animated Rotating Gradient Frame Border */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-teal-400 to-emerald-500 opacity-60 blur-md animate-spin-slow"></div>

            {/* Profile Image Main Card Frame */}
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden glass-panel-strong border-2 border-white/50 dark:border-white/10 shadow-2xl group flex flex-col justify-end">

              {/* Profile Image - Clean & Unobscured */}
              <img
                src={profileImg}
                alt="Deepak K N Profile Showcase"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Direct Name & Certification Text with Smooth Floating Motion */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 p-6 text-left"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/85 backdrop-blur-md text-white font-outfit text-xs font-bold mb-2 shadow-md"
                >
                  <CheckCircle2 size={13} />
                  GUVI Certified UI/UX Specialist
                </motion.div>
                <h3 className="font-sora font-extrabold text-2xl text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  Deepak K N
                </h3>
                <p className="font-inter text-slate-100 text-xs mt-0.5 font-semibold tracking-wide drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.8)]">
                  UI &amp; Front-End Developer
                </p>
              </motion.div>
            </div>

            {/* Floating Trendy Badge 1: Top-Left AI/Data */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-4 sm:-left-6 p-3.5 rounded-2xl glass-panel-strong shadow-xl border border-white/40 dark:border-white/10 flex items-center gap-3 backdrop-blur-xl z-20"
            >
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-500 dark:text-indigo-400">
                <Cpu size={20} />
              </div>
              <div className="text-left">
                <div className="font-sora font-bold text-xs text-slate-800 dark:text-white">Front-End Developer</div>
                <div className="font-inter text-[10px] text-slate-500 dark:text-slate-400">Carrezza Global Solutions Pvt Ltd</div>
              </div>
            </motion.div>

            {/* Floating Trendy Badge 2: Bottom-Right Client Projects */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 p-3.5 rounded-2xl glass-panel-strong shadow-xl border border-white/40 dark:border-white/10 flex items-center gap-3 backdrop-blur-xl z-20"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <Sparkles size={20} />
              </div>
              <div className="text-left">
                <div className="font-sora font-bold text-xs text-slate-800 dark:text-white">Figma &amp; Prototyping</div>
                <div className="font-inter text-[10px] text-slate-500 dark:text-slate-400">100% Client Dedication</div>
              </div>
            </motion.div>

            {/* Floating Badge 3: Top-Right Experience */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/3 -right-6 sm:-right-8 p-3 rounded-2xl glass-panel-strong shadow-lg border border-white/40 dark:border-white/10 flex items-center gap-2.5 backdrop-blur-xl z-20 hidden sm:flex"
            >
              <div className="p-2 rounded-xl bg-violet-500/20 text-violet-500">
                <Layout size={18} />
              </div>
              <div className="text-left pr-2">
                <div className="font-sora font-bold text-xs text-slate-800 dark:text-white">UI Developer</div>
                <div className="font-outfit text-[10px] text-slate-400">Univally</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Smooth Seamless Blend Overlay into About Section */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-slate-100/30 to-slate-100/60 dark:via-darkCard/10 dark:to-darkCard/25 pointer-events-none z-10" />
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[700px] h-[140px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-400/10 rounded-full blur-[90px] pointer-events-none -z-10" />
    </section>
  );
}

