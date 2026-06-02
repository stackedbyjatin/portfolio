import profile from "../assets/profile.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-12 max-w-7xl mx-auto">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] font-black text-white/[0.04] select-none pointer-events-none">
                PORTFOLIO
            </h1>
      {/* Left Side */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
>
        <p className="text-cyan-400 mb-4">
          Hi, my name is
        </p>

        <h1 className="text-7xl md:text-[9rem] font-black leading-none">
          Jatin
        </h1>

        <h1 className="text-7xl md:text-[9rem] font-black leading-none">
          Sharma
        </h1>

        <h2 className="text-3xl md:text-5xl text-gray-400 mt-6">
          Frontend Web Developer
        </h2>

        <p className="text-gray-500 mt-8 max-w-xl">
          I build responsive, modern and interactive
          websites using React, JavaScript and Tailwind CSS.
        </p>

        <button className="mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          View Projects
        </button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        >
        <img
          src={profile}
          alt="Profile"
          className="w-[400px] hover:scale-105 transition duration-300"
        />
      </motion.div>

    </section>
  );
}