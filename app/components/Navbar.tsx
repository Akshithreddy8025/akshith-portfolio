export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-lg font-bold">
          Akshith.dev
        </h1>

        <div className="space-x-6 text-gray-400 text-sm">

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}