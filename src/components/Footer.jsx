import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

        <h2 className="text-2xl font-black mb-2">
          JATIN SHARMA
        </h2>

        <p className="text-gray-500 mb-6">
          Frontend Web Developer
        </p>

        <div className="flex flex-wrap gap-6 mb-8">

          <a
            href="https://github.com/stackedbyjatin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jatin-sharma-428686411/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:stackedbyjatin@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            EmailS
          </a>

        </div>

        <p className="text-gray-600 text-sm">
          © 2025 Jatin Sharma. All rights reserved.
        </p>

      </div>

    </footer>
  );
}