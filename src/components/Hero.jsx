import profile from "../assets/profile.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 max-w-7xl mx-auto gap-10">

      {/* Background Text */}
      <h1 className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] font-black text-white/[0.04] select-none pointer-events-none">
        PORTFOLIO
      </h1>

      {/* Left Side */}
      <motion.div
        className="w-full lg:max-w-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-cyan-400 mb-4">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-[9rem] font-black leading-none">
          Jatin
        </h1>

        <h1 className="text-5xl sm:text-6xl md:text-[9rem] font-black leading-none">
          Sharma
        </h1>

        <h2 className="text-3xl md:text-5xl text-gray-400 mt-6">
          Frontend Web Developer
        </h2>

        <p className="text-gray-500 mt-8 max-w-xl">
          Frontend Web Developer skilled in React, JavaScript, Django and modern web technologies.
          Passionate about building responsive web applications and full-stack projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-8">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/jatin-sharma-428686411/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/stackedbyjatin"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="/Jatin-Sharma-Resume.pdf"
            download
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>

        </div>
      </motion.div>

      {/* Right Side */}
      {/* Right Side */}
<motion.div
  className="block"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <img
    src={profile}
    alt="Profile"
    className="w-48 md:w-[400px] mx-auto hover:scale-105 transition duration-300"
  />
</motion.div>

    </section>
  );
}