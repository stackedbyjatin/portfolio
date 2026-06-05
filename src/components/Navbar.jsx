export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg z-50 border-b border-white/5">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">

        <h1 className="font-black text-xl md:text-2xl tracking-wide">
          PORTFOLIO
        </h1>

        <div className="flex gap-3 md:gap-8 text-[11px] md:text-base">

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

          <a
            href="/Jatin Sharma Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Resume
          </a>

        </div>

      </div>

    </nav>
  );
}