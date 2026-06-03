export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <p className="text-cyan-400 mb-4">
        01
      </p>

      <h2 className="text-5xl font-bold mb-8">
        About Me
      </h2>

      <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-400">

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

        <p>
          Recently, I developed <span className="text-cyan-400 font-medium">EzVeggies</span>,
          a full-stack e-commerce platform featuring user
          authentication, shopping cart management, address
          handling and Razorpay payment integration.
        </p>

        

      </div>
    </section>
  );
}