import { motion } from "framer-motion";

import sphere from "../assets/showcase/sphere.png";
import ring from "../assets/showcase/ring.png";
import cube from "../assets/showcase/cube.png";
import orb from "../assets/showcase/orb.png";

const visuals = [
  {
    image: sphere,
    title: "Precision",
  },
  {
    image: ring,
    title: "Innovation",
  },
  {
    image: cube,
    title: "Structure",
  },
  {
    image: orb,
    title: "Experience",
  },
];

const positions = [
  "md:translate-y-0",
  "md:translate-y-24",
  "md:-translate-y-10",
  "md:translate-y-32",
];

export default function VisualShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">

      {/* Heading */}
      <div className="text-center mb-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          SELECTED VISUALS
        </p>

        <h2 className="text-5xl md:text-8xl font-black">
          BUILDING
        </h2>

        <h2 className="text-5xl md:text-8xl font-black text-cyan-400">
          DIGITAL EXPERIENCES
        </h2>

      </div>

      {/* Visual Cards */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-20">

        {visuals.map((item, index) => (
          <motion.div
  animate={{
    y: [0, -10, 0],
  }}
            key={index}
            initial={{
  opacity: 0,
  y: 150,
  scale: 0.9,
}}
            whileInView={{
  opacity: 1,
  y: 0,
  scale: 1,
}}
            viewport={{ once: true }}
           transition={{y: {
  duration: 4 + index,
  repeat: Infinity,
  ease: "easeInOut",
},
  duration: 1.2,
  delay: index * 0.2,
}}
            className={`group ${positions[index]}`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <img
                src={item.image}
                alt=""
                className="w-full object-cover transition duration-1000 group-hover:scale-110"
              />

            </div>
            <div className="mt-5">

  <p className="text-cyan-400 text-sm tracking-[0.3em] mb-2">
    {item.number}
  </p>

  <h3 className="text-2xl font-bold">
    {item.title}
  </h3>

</div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}