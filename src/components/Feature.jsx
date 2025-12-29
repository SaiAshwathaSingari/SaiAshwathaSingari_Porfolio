import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const NavigationHub = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const sections = [
    { title: 'Education', path: '/education', desc: 'ACADEMIC' },
    { title: 'Experience', path: '/experience', desc: 'PROFESSIONAL' },
    { title: 'Projects', path: '/projects', desc: 'PORTFOLIO' },
    { title: 'Coding', path: '/coding', desc: 'LEETCODE' },
    { title: 'Skills', path: '/skills', desc: 'STACK' },
  ];

  useEffect(() => {
    // Reveal animation on scroll
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black py-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-4 sm:px-12 relative z-10">
        <div className="flex items-center justify-between mb-12 sm:mb-20">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-purple-600" />
            <span className="text-zinc-500 font-black tracking-[0.3em] text-[10px] sm:text-xs uppercase">
              DIRECTORY / INDEX
            </span>
          </div>
          <span className="hidden sm:block text-zinc-700 font-mono text-xs">
            [ 05 SECTIONS ]
          </span>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              onClick={() => navigate(section.path)}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  gsap.to(e.currentTarget.querySelector('.bg-overlay'), { scaleY: 1, duration: 0.4, ease: "expo.out" });
                  gsap.to(e.currentTarget.querySelector('.text-main'), { x: 40, italic: true, color: '#000', duration: 0.4 });
                  gsap.to(e.currentTarget.querySelector('.text-num'), { x: -20, color: '#9333ea', duration: 0.4 });
                  gsap.to(e.currentTarget.querySelector('.arrow-box'), { rotate: 45, scale: 1.2, backgroundColor: '#000', color: '#fff', duration: 0.4 });
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  gsap.to(e.currentTarget.querySelector('.bg-overlay'), { scaleY: 0, duration: 0.4, ease: "expo.in" });
                  gsap.to(e.currentTarget.querySelector('.text-main'), { x: 0, italic: false, color: '#fff', duration: 0.4 });
                  gsap.to(e.currentTarget.querySelector('.text-num'), { x: 0, color: '#52525b', duration: 0.4 });
                  gsap.to(e.currentTarget.querySelector('.arrow-box'), { rotate: 0, scale: 1, backgroundColor: 'transparent', color: '#fff', duration: 0.4 });
                }
              }}
              className="nav-item group relative cursor-pointer border-b border-white/10 py-8 sm:py-12 flex items-center justify-between overflow-hidden touch-manipulation"
            >
              {/* Hover Background Fill */}
              <div className="bg-overlay absolute inset-0 bg-white origin-bottom scale-y-0 z-0" />

              <div className="relative z-10 flex items-baseline gap-4 sm:gap-10 pointer-events-none">
                <span className="text-num text-zinc-600 font-black text-sm sm:text-xl italic transition-transform">
                  /0{index + 1}
                </span>
                
                <div className="flex flex-col">
                  <h3 className="text-main text-[11vw] sm:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.9] tracking-[ -0.05em] text-white transition-all">
                    {section.title}
                  </h3>
                  {/* Mobile Only Description */}
                  <span className="sm:hidden text-purple-500 font-black text-[10px] tracking-[0.3em] mt-2">
                    {section.desc}
                  </span>
                </div>
              </div>

              {/* Desktop Metadata */}
              <div className="relative z-10 hidden md:flex items-center gap-12 text-right">
                <p className="text-zinc-500 font-black tracking-widest text-[10px] uppercase transition-colors group-hover:text-black/40">
                  VIEW {section.desc}
                </p>
                <div className="arrow-box h-20 w-20 rounded-full border border-white/10 flex items-center justify-center transition-all">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              {/* Mobile Arrow - Solid and clean */}
              <div className="relative z-10 md:hidden bg-zinc-900 p-3 rounded-full">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Brand Decoration */}
      <div className="absolute left-6 bottom-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="w-1 h-20 bg-gradient-to-t from-purple-600 to-transparent" />
          <p className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-widest text-zinc-800 uppercase">
            EST 2024 — NAVIGATION SYSTEM
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavigationHub;