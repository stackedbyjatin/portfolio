import home from "../assets/home.jpeg";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold mb-12">
        Featured Project
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={home}
          alt="EzVeggies"
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <h3 className="text-4xl font-bold mb-4">
            EzVeggies
          </h3>

          <p className="text-gray-400 mb-6">
            EzVeggies is a full-stack e-commerce platform built
            using Django, Python, SQLite, JavaScript, HTML and CSS.
            The application allows users to browse products, manage
            shopping carts, save delivery addresses and complete
            orders through Razorpay payment integration.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
              Django
            </span>

            <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
              HTML
            </span>

            <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
              CSS
            </span>
          </div>

          <ul className="space-y-3 text-gray-300">
            <li>✓ User Authentication & Authorization</li>
            <li>✓ Product Catalog Management</li>
            <li>✓ Shopping Cart System</li>
            <li>✓ Address Management</li>
            <li>✓ Razorpay Payment Integration</li>
            <li>✓ Order Checkout & Tracking</li>
          </ul>
        </div>

      </div>
    </section>
  );
}