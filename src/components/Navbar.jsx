import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 30);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [controlNavbar]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Coding', href: '/coding' },
    { name: 'Skills', href: '/skills' },
  ];

  const handleNavClick = (e, href) => {
    setIsOpen(false);
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const Logo = () => (
    <Link 
      to="/" 
      onClick={(e) => handleNavClick(e, '/')}
      className="group flex items-center gap-0"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center"
      >
        <span className="bg-white text-black px-1.5 md:px-2 py-1 text-lg md:text-2xl font-black italic tracking-tighter uppercase transition-colors group-hover:bg-purple-600 group-hover:text-white">
          Sai Ashwatha
        </span>
        <span 
          className="border-2 border-white text-white px-1.5 md:px-2 py-0.5 text-lg md:text-2xl font-black italic tracking-tighter uppercase group-hover:border-purple-600 transition-colors"
          style={{ textRendering: 'optimizeLegibility' }}
        >
          .
        </span>
      </motion.div>
    </Link>
  );

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] hidden md:block transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-[1800px] mx-auto px-12 flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-all group relative"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE HEADER */}
      <div className={`fixed top-0 left-0 w-full z-[120] md:hidden flex justify-between items-center px-4 py-4 transition-transform duration-400 ${
        isVisible || isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Logo />
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black w-10 h-10 flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        >
          {isOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-black z-[110] md:hidden h-[100dvh] overflow-y-auto"
          >
            {/* CHANGE: Added 'max-w-[85%] mx-auto' to the inner container 
                to reduce width and prevent text from getting cut off.
            */}
            <div className="min-h-full max-w-[88%] mx-auto flex flex-col justify-between py-10">
              <div className="h-20" />

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-6xl font-black italic tracking-tighter uppercase text-white active:text-purple-600 transition-colors leading-none block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pb-6"
              >
                <div className="h-1 w-12 bg-purple-600 mb-6" />
                <a 
                  href="mailto:singarisai777@gmail.com"
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500"
                >
                  SAY HELLO —
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;