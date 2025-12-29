import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to clear, professional naming with optimized sizes
  const navLinks = [
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coding', href: '#coding' }, // Shortened for better fit
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] hidden md:block transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-10'
      }`}>
        <div className="container mx-auto px-12 flex justify-between items-center">
          {/* Brand Name */}
          <a href="/" className="text-2xl font-black italic tracking-tighter hover:text-purple-600 transition-colors">
            ASHWATHA.
          </a>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-all group relative"
              >
                {link.name}
                {/* Thin Purple Underline on Hover */}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE TRIGGER (Minimalist Floating Button) */}
      <div className="fixed top-6 right-6 z-[110] md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black p-3 shadow-2xl active:scale-90 transition-transform"
        >
          {isOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-black z-[105] md:hidden flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black italic tracking-tighter uppercase text-white hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="h-[1px] w-12 bg-purple-600 mt-4" />
              <a 
                href="mailto:singarisai777@gmail.com"
                className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;