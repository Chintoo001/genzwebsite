"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = ["/vet.png", "/beuty.png","/gym.png", "/doctor.png", "/physio.png"];

const rotatingTexts = [
  "Website Developer",
  "SEO Specialist",
  "Google Listing Expert",
  "Business Growth Partner"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Slider Auto
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // ===== Typing Animation Logic =====
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = rotatingTexts[textIndex];
    const speed = isDeleting ? 40 : 80;

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
          setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative w-full">

      <div className="relative w-full aspect-[16/9] sm:h-[85vh] lg:h-screen overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt="hero slide"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-4xl">

          {/* Static Heading */}
          <h1 className="text-lg sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            I Am
          </h1>

          {/* Typing Animated Text */}
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold mb-2">

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              {displayText}
            </span>

            <span className="ml-1 animate-pulse text-blue-400">|</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-200 mb-6 max-w-xl">
            I build fast, SEO-optimized websites that help businesses grow online.
          </p>

          <Link
            href="#contact"
            className="w-fit bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-sm sm:text-base shadow-lg hover:scale-105"
          >
            Hire Me
          </Link>
        </div>

      </div>
    </section>
  );
}
