import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";

import SmoothScroll from "./components/SmoothScroll";
import AnimatedBackground from "./components/AnimatedBackground";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";

// Below-the-fold sections are code-split for a faster initial paint.
const About = lazy(() => import("./sections/About"));
const Playbook = lazy(() => import("./sections/Playbook"));
const Experience = lazy(() => import("./sections/Experience"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Education = lazy(() => import("./sections/Education"));
const Achievements = lazy(() => import("./sections/Achievements"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(10,10,11,0.9)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            backdropFilter: "blur(12px)",
          },
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <About />
          <Playbook />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
