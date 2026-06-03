export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
        
        <h1 className="font-bold text-lg md:text-xl">
          Portfolio
        </h1>

        <div className="flex gap-3 md:gap-8 text-[11px] md:text-base">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a
            href="/Jatin-Sharma-Resume.pdf"
            download
            className="text-cyan-400"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}