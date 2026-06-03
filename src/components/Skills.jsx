import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiSqlite,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Django", icon: <SiDjango size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "SQLite", icon: <SiSqlite size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <p className="text-cyan-400 mb-4">
        03
      </p>

      <h2 className="text-5xl font-bold mb-4">
        Skills
      </h2>

      <p className="text-gray-500 mb-12 max-w-2xl">
        Technologies and tools I use to build modern,
        responsive and scalable web applications.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >
            <div className="mb-4 text-cyan-400">
              {skill.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {skill.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}