import profile from "../assets/profile.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 max-w-7xl mx-auto gap-10 overflow-hidden">

      {/* Background Text */}
      <h1 className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] font-black text-white/[0.03] select-none pointer-events-none">
        JATIN
      </h1>

      {/* Left Side */}
      <motion.div
        className="w-full lg:max-w-3xl z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-cyan-400 mb-4 tracking-widest uppercase">
          Hi, my name is
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black leading-none">
          Jatin
        </h1>

        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black leading-none text-cyan-400">
          Sharma
        </h1>

        <h2 className="text-2xl md:text-5xl text-gray-300 mt-6 font-medium">
          Frontend Web Developer
        </h2>

        <p className="text-gray-500 mt-8 max-w-xl text-lg leading-relaxed">
          Building modern web applications with React, Django and
          JavaScript. Passionate about creating responsive,
          interactive and user-focused digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/jatin-sharma-428686411/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="/Jatin-Sharma-Resume.pdf"
            download
            className="border border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>

        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="block z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          x: { duration: 1, delay: 0.3 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-52 md:w-[420px] mx-auto hover:scale-105 transition duration-300"
        />
      </motion.div>

    </section>
  );
}