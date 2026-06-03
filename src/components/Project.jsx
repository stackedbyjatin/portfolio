export default function Project() {
 const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack E-Commerce Platform built using Django, JavaScript, HTML and CSS. Features secure user authentication, product catalog management, shopping cart functionality, checkout workflow, order processing and a custom admin dashboard for managing products and customers.",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with React and Tailwind CSS showcasing my projects and skills.",
  },
  {
    title: "Weather App",
    description:
      "Weather forecasting application using API integration and JavaScript.",
  },
];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-12 py-32"
    >
      <p className="text-cyan-400 mb-4">
        02
      </p>

      <h2 className="text-5xl font-bold mb-12">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
            <div
             key={index}
            className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-400 transition"
             >
            <h3 className="text-3xl font-bold mb-4">
                {project.title}
            </h3>

             <p className="text-gray-400 text-lg">
                {project.description}
            </p>
            </div>
        ))}
      </div>
    </section>
  );
}