export default function Contact(){
  return(
    <section id="contact" className="space-y-6">

      <h2 className="text-3xl font-bold">
        Contact
      </h2>

      <p className="text-gray-400">
        I'm open to internships and collaborations.
      </p>

      <div className="flex gap-6">

        <a
          href="mailto:yourmail@gmail.com"
          className="px-6 py-3 bg-white text-black rounded-full"
        >
          Email
        </a>

        <a
          href="https://github.com"
          className="text-gray-400 hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          className="text-gray-400 hover:text-white"
        >
          LinkedIn
        </a>

      </div>

      <p className="text-gray-600 text-sm pt-10">
        © 2026 Akshith Reddy
      </p>

    </section>
  )
}