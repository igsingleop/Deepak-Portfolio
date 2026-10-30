import React from 'react';

export default function TechMarquee() {
  const techStack = [
    'React 19',
    'Next.js',
    'Tailwind CSS',
    'Figma UI/UX',
    'TypeScript',
    'Node.js',
    'Meta Ads',
    'SEO Optimization',
    'Framer Motion',
    'Python',
    'Webflow',
    'GraphQL',
    'Copywriting',
    'Brand Strategy',
  ];

  return (
    <div className="py-6 bg-[#ED7751]/10 dark:bg-[#201D1A]/80 border-y border-[#ED7751]/15 overflow-hidden select-none">
      <div className="flex gap-6 w-max animate-marquee">
        <div className="flex items-center gap-6 shrink-0">
          {techStack.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-[#ED7751]/20 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#ED7751]" />
              <span className="font-space font-medium text-xs sm:text-sm text-[#2B2926] dark:text-[#FFFDFB] tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 shrink-0">
          {techStack.map((item, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-[#ED7751]/20 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#ED7751]" />
              <span className="font-space font-medium text-xs sm:text-sm text-[#2B2926] dark:text-[#FFFDFB] tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

