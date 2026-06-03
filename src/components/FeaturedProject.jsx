import products from "../assets/products.jpeg";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h2 className="text-5xl font-bold mb-12">
          Featured Project
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">

          {/* Project Image */}
          <img
            src={products}
            alt="EzVeggies"
            className="w-full md:h-[500px] h-[250px] object-cover rounded-3xl shadow-2xl"
          />

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
              <li>✓ Order Checkout & Order Processing</li>
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

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href="https://github.com/stackedbyjatin/EzVeggies"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Source Code
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}