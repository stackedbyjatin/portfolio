export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Django",
    "Python",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-12 py-32"
    >
      <p className="text-cyan-400 mb-4">
        03
      </p>

      <h2 className="text-5xl font-bold mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800 hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}