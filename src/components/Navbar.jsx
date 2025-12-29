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

  const navLinks = [
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Coding', href: '/coding' },
    { name: 'Skills', href: '/skills' },
  ];

  const handleNavClick = (e, href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] hidden md:block transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-5 border-b border-white/10' : 'bg-transparent py-12'
      }`}>
        <div className="max-w-[1800px] mx-auto px-12 flex justify-between items-center">
          <Link to="/" className="text-4xl font-black italic tracking-tighter hover:text-purple-500 transition-all duration-300">
            ASHWATHA.
          </Link>
          
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all group relative"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE TRIGGER */}
      <div className={`fixed top-8 right-8 z-[120] md:hidden transition-all duration-400 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isVisible || isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
      }`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black w-16 h-16 flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        >
          {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
        </button>
      </div>

      {/* MOBILE OVERLAY - FASTER TRANSITION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            // Faster timing: 0.4s with a sharp ease-out
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-black z-[110] md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  // Staggered items also faster
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-7xl font-black italic tracking-tighter uppercase text-white active:text-purple-600 transition-colors leading-[0.9]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16"
              >
                <div className="h-[3px] w-20 bg-purple-600 mb-8" />
                <a 
                  href="mailto:singarisai777@gmail.com"
                  className="text-sm font-black uppercase tracking-[0.4em] text-zinc-500"
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