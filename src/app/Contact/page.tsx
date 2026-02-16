"use client";

import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const texts = [
  "Let's Connect",
  "Start a Project",
  "Build Something Amazing",
];

export default function ContactPage() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div className="bg-gray-950 text-white min-h-screen">

         <section className="px-6 py-16 sm:py-20 text-center bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">

      {/* Animated Heading */}
      <h1 className="text-3xl sm:text-6xl font-extrabold mb-6 flex justify-center flex-wrap">

        <AnimatePresence mode="popLayout">
          {displayText.split("").map((char, i) => (
            <motion.span
              key={i + char}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.03,
              }}
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>

        {/* Blinking Cursor */}
        <span className="ml-1 animate-pulse text-blue-400">|</span>
      </h1>

      {/* Subtitle Fade */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg"
      >
        Have a project idea, collaboration request, or just want to say hello?
        I'm always open to discussing new opportunities.
  </motion.p>

</section>

<section className="px-4 sm:px-6 py-16">
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

    {/* PHONE */}
    <div className="bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 hover:border-blue-500 transition text-center">
      <Phone className="mx-auto mb-3 text-blue-500" size={22} />
      <h3 className="text-sm sm:text-lg font-semibold mb-1">
        Call
      </h3>
      <a
        href="tel:7065895037"
        className="text-blue-400 hover:underline text-xs sm:text-sm break-words"
      >
        +91 7065895037
      </a>
    </div>

    {/* EMAIL */}
    <div className="bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 hover:border-blue-500 transition text-center">
      <Mail className="mx-auto mb-3 text-blue-500" size={22} />
      <h3 className="text-sm sm:text-lg font-semibold mb-1">
        Email
      </h3>
      <a
        href="mailto:your@email.com"
        className="text-blue-400 hover:underline text-xs sm:text-sm break-all"
      >
        GenZwebsite@email.com
      </a>
    </div>

    {/* WHATSAPP */}
    <div className="bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 hover:border-green-500 transition text-center col-span-2 md:col-span-1">
      <MessageCircle className="mx-auto mb-3 text-green-500" size={22} />
      <h3 className="text-sm sm:text-lg font-semibold mb-1">
        WhatsApp
      </h3>
    <a
      href="https://wa.me/917065895037"
      target="_blank"
      className="text-green-400 hover:underline text-xs sm:text-sm break-words"
    >
      Chat Now
    </a>
  </div>
</div>
  </section>





      {/* ===== CTA SECTION ===== */}
      <section className="px-6 py-24 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether it's a portfolio website, business landing page,
          or full-stack web application — let's build something amazing together.
        </p>

        <a
          href="https://wa.me/917065895037"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white font-medium transition duration-300"
        >
          Start a Conversation
        </a>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>

    </div>
  );
}
