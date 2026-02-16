"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";

export default function ProjectsPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section className="px-6 py-28 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            My Creative <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Here are some of the projects I have built using modern
            technologies like React, Next.js, and Tailwind CSS.
            Each project reflects my passion for clean UI,
            performance optimization, and real-world problem solving.
          </p>
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="px-6 py-24 flex-1">
        <div className="max-w-7xl mx-auto">

          <h3 className="text-3xl font-bold text-center mb-16">
            Featured Work
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => {
              const imageSrc =
                project.images?.find((img) => img && img.trim() !== "") || null;

              return (
                <div
                  key={project.slug}
                  className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative w-full h-56">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-800 text-gray-400 text-sm">
                        No Image Available
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h4>

                    <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                      {project.desc}
                    </p>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-blue-400 text-sm font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= EXTRA DETAILS SECTION ================= */}
      <section className="px-6 py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Why These Projects Matter
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            Every project in this portfolio is designed with
            performance, scalability, and user experience in mind.
            I focus on writing clean code, reusable components,
            and responsive layouts that work seamlessly across devices.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From landing pages to full-stack applications,
            I continuously experiment with new tools and best practices
            to improve development efficiency and product quality.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">

  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* ===== ABOUT SECTION ===== */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-4">
        My Portfolio
      </h3>
      <p className="text-sm leading-relaxed">
        I build modern, responsive and high-performance web
        applications using Next.js, React and Tailwind CSS.
        My focus is on clean UI, scalability and real-world solutions.
      </p>
    </div>

    {/* ===== QUICK LINKS ===== */}
    <div>
      <h4 className="text-white font-semibold mb-4">
        Quick Links
      </h4>
      <ul className="space-y-3 text-sm">
        <li>
          <a href="/" className="hover:text-blue-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-400 transition">
            About Me
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* ===== CONTACT SECTION ===== */}
    <div>
      <h4 className="text-white font-semibold mb-4">
        Let's Work Together
      </h4>
      <p className="text-sm mb-6">
        Have a project in mind or want to collaborate?
        Feel free to reach out and let's build something amazing.
      </p>

      <a
        href="/contact"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition duration-300"
      >
        Contact Me
      </a>
    </div>

  </div>

  {/* ===== BOTTOM BAR ===== */}
  <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} My Portfolio. All rights reserved.
  </div>

</footer>


    </div>
  );
}
