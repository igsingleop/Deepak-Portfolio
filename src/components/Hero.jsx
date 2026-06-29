import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MousePointerClick } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import Magnetic from './Magnetic';

const Linkedin = ({ size = 24, className }) => (
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

const Instagram = ({ size = 24, className }) => (
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

const Fiverr = ({ size = 24, className }) => (
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

const Behance = ({ size = 24, className }) => (
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full glow-orb-emerald -z-10 animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full glow-orb-indigo -z-10 animate-float-medium"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Text Info */}
        <motion.div
          className="lg:col-span-7 flex flex-col text-left justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-outfit text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-sora font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-slate-800 dark:text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 bg-clip-text text-transparent">Deepak K N</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="font-outfit font-semibold text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            AI & Data Science Graduate <span className="text-emerald-500">&amp;</span> Freelance UI/UX Designer
          </motion.h2>

          <motion.p variants={itemVariants} className="font-inter text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself, combining artificial intelligence insights with user-centered design excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <Magnetic>
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-outfit font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98] block"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-2xl bg-white dark:bg-darkCard text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-outfit font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all neo-box-out hover:neo-box-in hover:scale-[1.02] active:scale-[0.98] block"
              >
                Contact Me
              </a>
            </Magnetic>
          </motion.div>

          {/* Quick Socials */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/deepaknandhakumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-white/20 dark:border-white/5 block"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.instagram.com/ig.singleop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-white/20 dark:border-white/5 block"
                title="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.fiverr.com/sellers/ig_single/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-white/20 dark:border-white/5 block"
                title="Fiverr Seller Profile"
              >
                <Fiverr size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.behance.net/deepak-nandhakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-white/20 dark:border-white/5 block"
                title="Behance Profile"
              >
                <Behance size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:deepaksamu77@gmail.com"
                className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-white/20 dark:border-white/5 block"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="tel:+919363112798"
                className="w-11 h-11 rounded-2xl flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-white/20 dark:border-white/5 block"
                title="Call Phone"
              >
                <Phone size={18} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Visual Showcase (Glass Card Stack) */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Stack of Glassmorphic Cards */}
          <div className="relative w-full max-w-[360px] h-[360px] flex items-center justify-center">
            {/* Background glowing card */}
            <div className="absolute w-[280px] h-[280px] rounded-3xl bg-gradient-to-tr from-emerald-500 to-indigo-600 opacity-20 blur-2xl animate-pulse-slow"></div>

            {/* Bottom Card - Education */}
            <div className="absolute w-[280px] p-5 rounded-3xl glass-panel shadow-lg -rotate-6 -translate-x-6 -translate-y-6 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 transition-all duration-500 hover:z-10 group">
              <div className="text-emerald-500 font-sora font-semibold text-xs mb-1">EDUCATION</div>
              <div className="font-outfit font-bold text-slate-800 dark:text-white">B.Tech AI &amp; Data Science</div>
              <div className="font-inter text-slate-400 text-xs mt-1">Muthayammal Eng. College (2025)</div>
            </div>

            {/* Middle Card - Experience */}
            <div className="absolute w-[280px] p-5 rounded-3xl glass-panel shadow-lg rotate-3 translate-x-6 translate-y-6 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 transition-all duration-500 hover:z-10 group">
              <div className="text-indigo-500 font-sora font-semibold text-xs mb-1">EXPERIENCE</div>
              <div className="font-outfit font-bold text-slate-800 dark:text-white">Freelance UI Designer</div>
              <div className="font-inter text-slate-400 text-xs mt-1">Univally &amp; Hexaware Tech BPS</div>
            </div>

            {/* Top Interactive Glass Card */}
            <div className="absolute w-[290px] p-6 rounded-3xl glass-panel-strong shadow-2xl hover:scale-105 transition-all duration-500 z-10 border border-white/30 dark:border-white/10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-2 border-emerald-500/30 overflow-hidden mb-4 shadow-lg shadow-emerald-500/10">
                <img src={profileImg} className="w-full h-full object-cover" alt="Deepak K N Profile" />
              </div>
              <div className="font-sora font-extrabold text-xl text-slate-800 dark:text-white mb-1">Deepak K N</div>
              <div className="font-outfit text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-4">UI/UX &amp; AI Engineering</div>
              
              <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50 mb-4"></div>
              
              <div className="grid grid-cols-3 gap-2 w-full text-center">
                <div>
                  <div className="font-sora font-bold text-lg text-slate-800 dark:text-white">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Dedication</div>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-700/50">
                  <div className="font-sora font-bold text-lg text-slate-800 dark:text-white">GUVI</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Certified</div>
                </div>
                <div>
                  <div className="font-sora font-bold text-lg text-slate-800 dark:text-white">Figma</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
