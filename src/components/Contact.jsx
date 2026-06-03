import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-cyan-400 mb-4">
        04
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Get In Touch
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
        I'm currently looking for Frontend and Full Stack Developer
        opportunities. Whether you have a project, internship, freelance work,
        or just want to connect, feel free to reach out.
      </p>

      <a
        href="mailto:stackedbyjatinS@gmail.com"
        className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block"
      >
        Contact Me
      </a>
    </motion.section>
  );
}