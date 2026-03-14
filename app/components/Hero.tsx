export default function Hero() {
  return (
    <section className="pt-24 flex flex-col md:flex-row items-center gap-12">

      <div className="flex-1 space-y-6">

        <p className="text-gray-400 tracking-widest text-sm">
          SOFTWARE ENGINEER
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Akshith Reddy
        </h1>

        <p className="text-gray-400 text-lg max-w-xl">
          Full-stack developer building modern web applications,
          AI tools and scalable platforms.
        </p>

        <div className="flex gap-4">

          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-full hover:border-white"
          >
            Contact
          </a>

        </div>

      </div>

      <div className="flex-1 flex justify-center">

        <div className="h-64 w-64 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-2xl opacity-70"/>

      </div>

    </section>
  )
}