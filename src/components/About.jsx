import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-cyan-400 mb-4">
        01
      </p>

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">

        {/* Left Side */}
        <div>

          <h2 className="text-5xl md:text-7xl font-black leading-none">
            ABOUT
          </h2>

          <h2 className="text-5xl md:text-7xl font-black text-cyan-400 leading-none">
            ME
          </h2>

          <p className="text-gray-500 mt-8 uppercase tracking-[0.3em] text-sm">
            Frontend Developer
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              React
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Django
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Python
            </span>

          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-8 text-lg leading-8 text-gray-400">

          <p>
            I'm a self-driven Frontend Developer passionate about
            building modern, responsive and user-friendly web
            applications. I enjoy transforming ideas into real
            products through clean design and efficient code.
          </p>

          <p>
            My journey started with HTML, CSS and JavaScript and
            has grown into working with React, Tailwind CSS,
            Django and Python. I learn best by building projects,
            solving problems and continuously exploring new
            technologies.
          </p>

          <div className="border-l-2 border-cyan-400 pl-6">

            <p>
              Recently, I developed
              <span className="text-cyan-400 font-medium">
                {" "}EzVeggies
              </span>,
              a full-stack e-commerce platform featuring secure
              authentication, shopping cart management, address
              handling and Razorpay payment integration.
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}