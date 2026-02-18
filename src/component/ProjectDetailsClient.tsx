"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  details: string;
  images: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function ProjectDetailsClient({ project }: { project: Project }) {
  return (
    <div className="bg-gray-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full flex items-center justify-center text-center overflow-hidden">


        <Image
          src={project.images?.[0] || "/fallback.jpg"}
          alt={project.title}
          fill
          priority
          className="object-contain sm:object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 px-4 max-w-3xl"
        >
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg mb-6">
            {project.desc}
          </p>

          <Link
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition hover:scale-105"
          >
            Explore Project ↓
          </Link>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-10 sm:py-14 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              About The Project
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
              {project.details}
            </p>

            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>✔ Fully Responsive Layout</li>
              <li>✔ SEO Optimized Structure</li>
              <li>✔ Fast Loading Performance</li>
              <li>✔ Conversion Focused Design</li>
              <li>✔ Clean & Modern UI</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-800 hover:scale-[1.02] transition duration-500"
          >
            <Image
              src={project.images?.[0] || "/fallback.jpg"}
              alt="Project Preview"
              fill
              className="object-contain md:object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10 sm:py-14 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
          >
            Key Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Modern UI/UX", desc: "Clean structured interface focused on engagement." },
              { title: "SEO Optimized", desc: "Semantic structure & lightning fast performance." },
              { title: "High Conversion", desc: "Strong CTA sections that generate leads." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-5 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-10">
            My Working Process
          </h2>

          <div className="grid grid-cols-4 gap-4 sm:gap-6">
            {["Research", "Design", "Development", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 mb-2 bg-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  {i + 1}
                </div>

                <h3 className="font-medium text-xs sm:text-sm">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 sm:py-14 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-3xl font-bold mb-3">
            Ready to Build Your Website?
          </h2>

          <p className="mb-6 text-sm sm:text-base">
            Let’s create a high-performing website for your business.
          </p>

          <Link
            href="/Contact"
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-5 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Shreyas. Built with Next.js & Tailwind CSS.
      </footer>

    </div>
  );
}
