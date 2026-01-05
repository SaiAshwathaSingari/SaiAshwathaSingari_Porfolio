import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("singarisai777@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // FORCE BLACK AT ROOT
    <section
      id="contact"
      className="relative min-h-screen w-full bg-black text-white overflow-hidden px-6 sm:px-12 py-24"
    >
      {/* WATERMARK */}
      <div className="pointer-events-none absolute top-24 right-[-6%] text-[22vw] font-black italic uppercase text-white/5 select-none">
        Reach
      </div>

      {/* CONTENT WRAPPER (NO container) */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24 bg-black"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black italic uppercase tracking-tight leading-[0.9]">
            Get In <br />
            <span className="text-purple-500">Touch.</span>
          </h2>
          <div className="mt-6 h-1.5 w-20 bg-purple-500" />
        </motion.div>

        {/* CONTACT ITEMS */}
        <div className="space-y-16 bg-black">
          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={copyToClipboard}
            className="group relative cursor-pointer border-l-2 border-zinc-800 pl-8 md:pl-16 py-10 bg-black transition-colors hover:border-purple-500"
          >
            <div className="absolute left-[-9px] top-10 h-4 w-4 rounded-full bg-zinc-800 border-2 border-black transition-all group-hover:bg-purple-500 group-hover:scale-125" />

            <span className="block text-xs font-black tracking-[0.35em] uppercase text-zinc-500">
              {copied ? "COPIED TO CLIPBOARD" : "EMAIL"}
            </span>

            <h3 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tight break-all group-hover:text-purple-400 transition-colors">
              singarisai777@gmail.com
            </h3>

            <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-5xl font-black italic text-zinc-800 group-hover:text-zinc-700 select-none">
              COPY
            </span>
          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative border-l-2 border-zinc-800 pl-8 md:pl-16 py-10 bg-black transition-colors hover:border-white"
          >
            <div className="absolute left-[-9px] top-10 h-4 w-4 rounded-full bg-zinc-800 border-2 border-black transition-all group-hover:bg-white group-hover:scale-125" />

            <span className="block text-xs font-black tracking-[0.35em] uppercase text-zinc-500">
              PHONE
            </span>

            <h3 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tight text-zinc-200">
              +91 80740 34506
            </h3>
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-zinc-900 flex justify-between text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 bg-black"
        >
          <span>Sai Ashwatha Singari</span>
          <span>© 2026</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
