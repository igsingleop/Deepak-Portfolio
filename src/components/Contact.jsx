import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate database query/message sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success state after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail size={22} />,
      label: 'Email Address',
      value: 'deepaksamu77@gmail.com',
      href: 'mailto:deepaksamu77@gmail.com',
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone Number',
      value: '+91 9363112798',
      href: 'tel:+919363112798',
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Perundurai, Erode, Tamil Nadu, India',
      subValue: '20/21A North Car Street, Ariyankadu, Kanjikovil, 638116',
      href: 'https://maps.google.com/?q=Kanjikovil,+Perundurai,+Erode',
      target: '_blank',
    },
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn Profile',
      value: 'Deepak Nandhakumar',
      href: 'https://www.linkedin.com/in/deepaknandhakumar/',
      target: '_blank',
    },
    {
      icon: <Instagram size={22} />,
      label: 'Instagram Profile',
      value: 'ig.singleop',
      href: 'https://www.instagram.com/ig.singleop',
      target: '_blank',
    },
    {
      icon: <Fiverr size={22} />,
      label: 'Fiverr Profile',
      value: 'ig_single',
      href: 'https://www.fiverr.com/ig_single/',
      target: '_blank',
    },
    {
      icon: <Behance size={22} />,
      label: 'Behance Profile',
      value: 'deepak-nandhakumar',
      href: 'https://www.behance.net/deepak-nandhakumar',
      target: '_blank',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full glow-orb-indigo -z-10 animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-sora font-bold text-2xl text-slate-800 dark:text-white mb-4 px-2">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactDetails.map((detail, idx) => (
                <Magnetic key={idx} className="block w-full" actionScale={0.07}>
                  <a
                    href={detail.href}
                    target={detail.target}
                    rel={detail.target ? 'noopener noreferrer' : undefined}
                    className="p-5 rounded-2xl bg-white dark:bg-darkCard border border-white/30 dark:border-white/5 flex items-start gap-4 hover:neo-box-in transition-all duration-300 neo-box-out group block"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="font-outfit text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                        {detail.label}
                      </div>
                      <div className="font-sora font-semibold text-sm md:text-base text-slate-800 dark:text-white mt-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {detail.value}
                      </div>
                      {detail.subValue && (
                        <div className="font-inter text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {detail.subValue}
                        </div>
                      )}
                    </div>
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl glass-panel-strong shadow-xl border border-white/20 dark:border-white/5 relative">
              <h3 className="font-sora font-bold text-2xl text-slate-800 dark:text-white mb-6 text-left">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label htmlFor="name-input" className="block font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-3 rounded-2xl glass-input text-slate-800 dark:text-white font-inter placeholder-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-3 rounded-2xl glass-input text-slate-800 dark:text-white font-inter placeholder-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message-input"
                    placeholder="Type your message here..."
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-5 py-3 rounded-2xl glass-input text-slate-800 dark:text-white font-inter placeholder-slate-400 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Magnetic className="w-full block">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-white font-outfit font-bold shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-75 disabled:pointer-events-none block"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </form>

              {/* Form Submission Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white/95 dark:bg-darkBg/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4 border border-green-500/20">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="font-sora font-extrabold text-xl text-slate-800 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="font-inter text-sm text-slate-500 dark:text-slate-400 text-center max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out, Deepak! I have received your message simulation and will respond shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-outfit text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
