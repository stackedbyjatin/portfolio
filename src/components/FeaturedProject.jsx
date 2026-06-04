import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import home from "../assets/home.jpeg";
import products from "../assets/products.jpeg";
import cart from "../assets/shopping cart.jpeg";
import checkout from "../assets/checkout.jpeg";
import checkout2 from "../assets/checkout 1.jpeg";
import login from "../assets/login.jpeg";
import contact from "../assets/contact.jpeg";

export default function FeaturedProject() {
  const screenshots = [
  { image: home, label: "Home Page" },
  { image: products, label: "Products Catalog" },
  { image: cart, label: "Shopping Cart" },
  { image: checkout, label: "Checkout" },
  { image: checkout2, label: "Payment Gateway" },
  { image: login, label: "Login System" },
  { image: contact, label: "Contact Page" },
];

  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured Project
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">

          {/* Screenshot Gallery */}
          <div>
            <div>
  <AnimatePresence mode="wait">
    <motion.img
      key={currentImage}
      src={screenshots[currentImage].image}
      alt="EzVeggies"
      className="w-full md:h-[500px] h-[250px] object-cover rounded-3xl shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    />
  </AnimatePresence>

  {/* Progress Dots */}
  <div className="flex justify-center gap-2 mt-5">
    {screenshots.map((_, index) => (
      <div
        key={index}
        className={`h-2 rounded-full transition-all duration-300 ${
          currentImage === index
            ? "w-8 bg-cyan-400"
            : "w-2 bg-zinc-600"
        }`}
      />
    ))}
  </div>

  {/* Animated Label */}
  <AnimatePresence mode="wait">
    <motion.div
      key={currentImage}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center mt-5"
    >
      <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
        ◉ {screenshots[currentImage].label}
      </span>
    </motion.div>
  </AnimatePresence>
</div>

            {/* Label */}
            <p className="text-center mt-4 text-cyan-400 font-medium">
              {screenshots[currentImage].label}
            </p>
          </div>

          {/* Project Details */}
          <div>

            <h3 className="text-4xl font-bold mb-4">
              EzVeggies
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Built a full-stack e-commerce platform using Django,
              Python, SQLite, JavaScript, HTML and CSS. Implemented
              secure user authentication, shopping cart management,
              address management, order processing and Razorpay
              payment gateway integration.
            </p>

            {/* Project Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="bg-black/30 p-4 rounded-xl border border-zinc-800">
                <p className="text-gray-500 text-sm">Role</p>
                <p className="font-semibold">Full Stack Developer</p>
              </div>

              <div className="bg-black/30 p-4 rounded-xl border border-zinc-800">
                <p className="text-gray-500 text-sm">Database</p>
                <p className="font-semibold">SQLite</p>
              </div>

              <div className="bg-black/30 p-4 rounded-xl border border-zinc-800">
                <p className="text-gray-500 text-sm">Backend</p>
                <p className="font-semibold">Django</p>
              </div>

              <div className="bg-black/30 p-4 rounded-xl border border-zinc-800">
                <p className="text-gray-500 text-sm">Payment</p>
                <p className="font-semibold">Razorpay</p>
              </div>

            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                Django
              </span>

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                Python
              </span>

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                SQLite
              </span>

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                JavaScript
              </span>

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                HTML
              </span>

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                CSS
              </span>

            </div>

            {/* Features */}
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>✓ User Authentication & Authorization</li>
              <li>✓ Product Catalog Management</li>
              <li>✓ Shopping Cart System</li>
              <li>✓ Address Management</li>
              <li>✓ Razorpay Payment Integration</li>
              <li>✓ Order Checkout & Processing</li>
            </ul>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">
                Key Highlights
              </h4>

              <ul className="space-y-2 text-gray-400">
                <li>• Secure user authentication system</li>
                <li>• Real payment workflow using Razorpay</li>
                <li>• Complete shopping cart functionality</li>
                <li>• Address management and checkout process</li>
              </ul>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/stackedbyjatin/EzVeggies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Source Code
            </a>

          </div>

        </div>

      </div>
    </motion.section>
  );
}