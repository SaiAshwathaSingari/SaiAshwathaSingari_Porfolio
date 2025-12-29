import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Tilt from "react-parallax-tilt";
import clsx from "clsx";
import { Github, Linkedin, Mail, Sparkles, Terminal, Cpu } from "lucide-react";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const roles = ["Full Stack Developer", "UI/UX Designer", "Creative Coder"];
    const mainTimeline = gsap.timeline({ repeat: -1 });

    roles.forEach((role) => {
      const tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1.2,
      });

      tl.to(typeRef.current, {
        duration: 1.2,
        text: role,
        ease: "power1.inOut",
      });

      mainTimeline.add(tl);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-200 overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-900/30 rounded-full blur-[80px]" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-900/30 rounded-full blur-[80px]" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-900/20 rounded-full blur-[80px]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-24 pb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for Projects
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg uppercase tracking-widest text-zinc-400 mb-2">
              Welcome to my world
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-6">
              Hi, I am <br />
              <span className="bg-gradient-to-b from-white via-purple-200 to-purple-500 bg-clip-text text-transparent italic">
                Singari Sai Ashwatha
              </span>
            </h1>
          </motion.div>

          {/* Typing text */}
          <div className="h-12 flex items-center justify-center mb-10">
            <p className="text-xl sm:text-3xl text-zinc-400">
              A passionate{" "}
              <span
                ref={typeRef}
                className="text-purple-400 font-semibold border-r-2 border-purple-500 ml-1"
              />
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-transform hover:scale-105">
              Explore Portfolio
            </button>
            <button className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full">
              Resume.pdf
            </button>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <ServiceCard
              icon={<Terminal size={24} />}
              title="Frontend Dev"
              desc="React, Next.js, smooth UI animations."
              color="border-purple-500/20"
            />
            <ServiceCard
              icon={<Cpu size={24} />}
              title="Backend Logic"
              desc="APIs, databases, system design."
              color="border-indigo-500/20"
            />
            <ServiceCard
              icon={<Sparkles size={24} />}
              title="UX/UI Design"
              desc="Clean and modern Figma designs."
              color="border-fuchsia-500/20"
            />
          </div>
        </div>
      </main>

      {/* Social bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-8 px-8 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
          <SocialLink icon={<Github size={22} />} />
          <SocialLink icon={<Linkedin size={22} />} />
          <SocialLink icon={<Mail size={22} />} />
        </div>
      </nav>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, color }) => (
  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.1}>
    <div
      className={clsx(
        "p-6 rounded-3xl bg-white/5 border backdrop-blur-sm h-full transition hover:bg-white/10",
        color
      )}
    >
      <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{desc}</p>
    </div>
  </Tilt>
);

const SocialLink = ({ icon }) => (
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href="/"
    className="text-zinc-400 hover:text-purple-400"
  >
    {icon}
  </motion.a>
);

export default Home;
