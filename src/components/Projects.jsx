import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, TrendingDown, ShoppingCart, HelpCircle } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonResults, setComparisonResults] = useState(null);

  // Mock comparison database
  const productDatabase = {
    iphone: [
      { store: 'Amazon', price: 79900, rating: 4.6, url: 'https://www.amazon.in/s?k=iphone+15' },
      { store: 'Flipkart', price: 77500, rating: 4.5, url: 'https://www.flipkart.com/search?q=iphone+15', best: true },
      { store: 'Meesho', price: 82000, rating: 4.2, url: 'https://www.meesho.com/search?q=iphone+15' },
    ],
    laptop: [
      { store: 'Amazon', price: 54990, rating: 4.4, url: 'https://www.amazon.in/s?k=laptop', best: true },
      { store: 'Flipkart', price: 56500, rating: 4.3, url: 'https://www.flipkart.com/search?q=laptop' },
      { store: 'Meesho', price: 58000, rating: 4.0, url: 'https://www.meesho.com/search?q=laptop' },
    ],
    headphones: [
      { store: 'Amazon', price: 14999, rating: 4.7, url: 'https://www.amazon.in/s?k=headphones' },
      { store: 'Flipkart', price: 15499, rating: 4.6, url: 'https://www.flipkart.com/search?q=headphones' },
      { store: 'Meesho', price: 13999, rating: 4.3, url: 'https://www.meesho.com/search?q=headphones', best: true },
    ],
    figma: [
      { store: 'GUVI Store', price: 499, rating: 4.9, url: 'https://www.guvi.in', best: true },
      { store: 'Udemy Pro', price: 999, rating: 4.7, url: 'https://www.udemy.com/courses/search/?q=figma' },
      { store: 'Skillshare', price: 1200, rating: 4.5, url: 'https://www.skillshare.com/search?query=figma' },
    ],
  };

  const handleCompare = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsComparing(true);
    setComparisonResults(null);

    // Simulate network delay
    setTimeout(() => {
      const term = searchTerm.toLowerCase().trim();
      let matchKey = 'iphone'; // Default fallback

      if (term.includes('lap') || term.includes('pc') || term.includes('dell') || term.includes('mac')) {
        matchKey = 'laptop';
      } else if (term.includes('phone') || term.includes('head') || term.includes('ear') || term.includes('audio')) {
        matchKey = 'headphones';
      } else if (term.includes('fig') || term.includes('design') || term.includes('ui') || term.includes('course')) {
        matchKey = 'figma';
      } else if (productDatabase[term]) {
        matchKey = term;
      }

      setComparisonResults(productDatabase[matchKey]);
      setIsComparing(false);
    }, 1200);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute right-10 bottom-1/4 w-[400px] h-[400px] rounded-full glow-orb-emerald -z-10 animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Project Description */}
          <div className="lg:col-span-5 flex flex-col text-left justify-start">
<<<<<<< HEAD
            <div className="p-8 rounded-3xl glass-panel-strong shadow-lg border border-white/20 dark:border-white/5 mb-6 relative">
              <span className="absolute top-6 right-6 font-outfit text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
=======
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-strong shadow-lg border border-white/20 dark:border-white/5 mb-6 relative">
              <span className="absolute top-6 right-6 font-outfit text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
>>>>>>> 0a87d38d4e5dcd9df2bb7fee46e67e30030a7eea
                2024
              </span>

              <h3 className="font-sora font-extrabold text-2xl text-slate-800 dark:text-white mb-3">
                Online Price Comparison
              </h3>

              <p className="font-inter text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Online price comparison tool allows you to effortlessly find the best deals across multiple retailers. Simply enter the product you are looking for, and save time and money by ensuring you always get the best value for your purchases.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React.js', 'Tailwind CSS', 'SQL', 'JavaScript', 'APIs'].map((t) => (
                  <span key={t} className="font-outfit text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              <div className="h-px bg-slate-200 dark:bg-slate-800/80 mb-6"></div>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs font-inter text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                  Vercel Ready
                </div>
                <div className="flex items-center gap-2 text-xs font-inter text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                  Responsive Design
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-3">
              <HelpCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
              <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong>Try the Widget:</strong> On the right side, search for keywords like <strong>"iPhone"</strong>, <strong>"Laptop"</strong>, <strong>"Headphones"</strong>, or <strong>"Figma"</strong> to see how the price comparison logic displays results in real-time.
              </p>
            </div>
          </div>

          {/* Column 2: Interactive Demo Widget */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl neo-box-out bg-white dark:bg-darkCard border border-white/40 dark:border-white/5 relative">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-sora font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
<<<<<<< HEAD
                  <Sparkles size={18} className="text-emerald-500" />
                  Live Logic Sandbox
=======
                  <Sparkles size={18} className="text-cyan-500" />
                  Compare the price of product you need
>>>>>>> 0a87d38d4e5dcd9df2bb7fee46e67e30030a7eea
                </h4>
                <span className="text-[10px] font-sora font-extrabold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 uppercase">
                  Simulated
                </span>
              </div>

              {/* Search input Form */}
              <form onSubmit={handleCompare} className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/40 dark:bg-darkCard/40 backdrop-blur-sm border border-white/10 dark:border-white/5 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/50 transition-all mb-8">
                <div className="pl-3 text-slate-400 shrink-0">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder='Search: "iPhone", "Laptop", "Headphones"...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none outline-none py-2 px-2 placeholder-slate-400 text-slate-800 dark:text-white text-sm"
                />
                <Magnetic className="shrink-0">
                  <button
                    type="submit"
<<<<<<< HEAD
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-outfit text-sm font-semibold hover:shadow-md hover:shadow-emerald-500/10 transition-all block"
=======
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-outfit text-sm font-semibold hover:shadow-md hover:shadow-cyan-500/10 transition-all block"
>>>>>>> 0a87d38d4e5dcd9df2bb7fee46e67e30030a7eea
                  >
                    Compare
                  </button>
                </Magnetic>
              </form>

              {/* Comparison Results */}
              <div className="min-h-[220px] flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-slate-50/50 dark:bg-slate-900/10">
                <AnimatePresence mode="wait">
                  {isComparing && (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-3"
                    >
                      {/* Interactive neomorphic spinner */}
                      <div className="w-12 h-12 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 animate-spin"></div>
                      <p className="font-outfit text-sm text-slate-400 animate-pulse">Scanning multiple retailers...</p>
                    </motion.div>
                  )}

                  {!isComparing && !comparisonResults && (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center max-w-sm"
                    >
                      <ShoppingCart className="mx-auto text-slate-300 dark:text-slate-700 mb-4" size={40} />
                      <p className="font-outfit text-slate-700 dark:text-slate-300 font-semibold mb-1">Start Price Comparison</p>
                      <p className="font-inter text-xs text-slate-400">Type a keyword above (e.g. "Laptop") and click Compare to trigger the custom comparative data interface.</p>
                    </motion.div>
                  )}

                  {!isComparing && comparisonResults && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="w-full space-y-5"
                    >
                      {/* Success Metrics Banner */}
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-xs font-semibold">
                        <span className="flex items-center gap-1.5">
                          <TrendingDown size={14} />
                          Best deal found on: {comparisonResults.find(r => r.best)?.store}
                        </span>
                        <span>
                          Save up to {((Math.max(...comparisonResults.map(r => r.price)) - Math.min(...comparisonResults.map(r => r.price)))).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}!
                        </span>
                      </div>

                      {/* Store Listings */}
                      <div className="space-y-3 text-left">
                        {comparisonResults.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-xl border flex flex-col sm:flex-row justify-between sm:items-center gap-3 transition-all ${item.best
<<<<<<< HEAD
                                ? 'bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border-emerald-500/30 shadow-sm'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
=======
                              ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border-cyan-500/30 shadow-sm'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
>>>>>>> 0a87d38d4e5dcd9df2bb7fee46e67e30030a7eea
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm ${item.best ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                }`}>
                                {item.store[0]}
                              </div>
                              <div>
                                <div className="font-sora font-bold text-sm text-slate-800 dark:text-white flex items-center gap-1.5">
                                  {item.store}
                                  {item.best && (
                                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-[8px] text-white uppercase font-extrabold font-sora tracking-wide">
                                      Best Deal
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] text-slate-400">Rating: ★ {item.rating}</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-4">
                              <div className="font-sora font-extrabold text-lg text-slate-800 dark:text-white">
                                {item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                              </div>
                              <Magnetic>
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`px-4 py-2 rounded-lg font-outfit text-xs font-semibold transition-all block ${item.best
<<<<<<< HEAD
                                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
=======
                                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
>>>>>>> 0a87d38d4e5dcd9df2bb7fee46e67e30030a7eea
                                    }`}
                                >
                                  View Deal
                                </a>
                              </Magnetic>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
