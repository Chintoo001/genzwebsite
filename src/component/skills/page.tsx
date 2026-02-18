"use client";
import { FaFigma } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiSeoLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdVideoCameraBack } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineShoppingCart, AiOutlineInstagram, AiOutlineFileText } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineRefresh } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";
import { RiToolsLine, RiPaletteLine } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";


export default function Skills() {
 const skills = [
  // 🌐 Web Development
  {
    name: "Website Development",
    icon: [
      <SiNextdotjs key="next" className="text-black" />,
      <SiReact key="react" className="text-cyan-500" />,
      <SiTailwindcss key="tailwind" className="text-sky-500" />,
    ],
    level: "100%",
  },
  {
    name: "E-Commerce Development",
    icon: <AiOutlineShoppingCart className="text-green-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Landing Page Design",
    icon: <TbLayoutDashboard className="text-indigo-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Website Redesign",
    icon: <MdOutlineRefresh className="text-yellow-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Website Speed Optimization",
    icon: <BsSpeedometer2 className="text-orange-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Website Maintenance",
    icon: <RiToolsLine className="text-gray-400 text-2xl" />,
    level: "100%",
  },

  // 🎨 Design Services
  {
    name: "Banner / Graphic Design",
    icon: <FaFigma className="text-pink-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Logo Design",
    icon: <MdOutlineDesignServices className="text-purple-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Brand Identity Design",
    icon: <RiPaletteLine className="text-rose-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Social Media Post Design",
    icon: <AiOutlineInstagram className="text-pink-400 text-2xl" />,
    level: "100%",
  },
  {
    name: "Business Card / Brochure Design",
    icon: <AiOutlineFileText className="text-blue-400 text-2xl" />,
    level: "100%",
  },

  // 📈 Marketing & Growth
  {
    name: "SEO Optimization",
    icon: <RiSeoLine className="text-orange-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Local SEO & Google Listing",
    icon: <FcGoogle className="text-2xl" />,
    level: "100%",
  },
  {
    name: "Social Media Marketing",
    icon: <FaMeta className="text-blue-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Marketing Strategy",
    icon: <BsGraphUpArrow className="text-green-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Advertisement Creation",
    icon: <RiAdvertisementLine className="text-blue-500 text-2xl" />,
    level: "100%",
  },

  // 🎥 Media Services
  {
    name: "Video Editing",
    icon: <MdVideoCameraBack className="text-red-500 text-2xl" />,
    level: "100%",
  },
  {
    name: "Product Photography",
    icon: <IoCameraOutline className="text-emerald-500 text-2xl" />,
    level: "100%",
  },

  {
    name: "Know More",
    icon: <AiOutlineInfoCircle className="text-yellow-500 text-2xl" />,
    level: "100%",
  },
];


  return (
    <section id="skills" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            {/* Icon */}
            <div className="flex items-center gap-3  text-3xl mb-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="text-sm sm:text-base font-medium mb-4">
              {skill.name}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>

            {/* Glow Layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
