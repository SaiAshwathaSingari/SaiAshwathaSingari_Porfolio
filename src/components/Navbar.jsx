import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // New states for scroll direction detection
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Handle background blur on scroll
      setScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down - Hide
        setIsVisible(false);
      } else {
        // Scrolling Up - Show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

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
      {/* DESKTOP NAVBAR - Added dynamic translation for hiding */}
      <nav className={`fixed top-0 w-full z-[100] hidden md:block transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-black/95 backdrop-blur-xl py-5 border-b border-white/10' : 'bg-transparent py-12'
      }`}>
        <div className="container mx-auto px-12 flex justify-between items-center">
          <Link to="/" className="text-3xl font-black italic tracking-tighter hover:text-purple-600 transition-colors">
            ASHWATHA.
          </Link>
          
          <div className="flex items-center gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-black uppercase tracking-[0.5em] text-zinc-400 hover:text-white transition-all group relative"
              >
                {link.name}
                <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE TRIGGER - Added dynamic translation to hide button on scroll too */}
      <div className={`fixed top-8 right-8 z-[110] md:hidden transition-transform duration-500 ${
        isVisible || isOpen ? 'translate-x-0' : 'translate-x-[200%]'
      }`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black p-4 shadow-2xl active:scale-95 transition-transform"
        >
          {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[105] md:hidden flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-5xl font-black italic tracking-tighter uppercase text-white hover:text-purple-600 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <div className="h-[2px] w-16 bg-purple-600 mb-6" />
                <a 
                  href="mailto:singarisai777@gmail.com"
                  className="text-xs font-black uppercase tracking-[0.6em] text-zinc-500 hover:text-purple-500 transition-colors"
                >
                  GET IN TOUCH
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