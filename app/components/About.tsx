const items = [
  {
    title: "Full Stack Development",
    desc: "Building scalable web applications using React, Next.js and Node.js."
  },
  {
    title: "Machine Learning",
    desc: "Creating ML models and analyzing data using Python."
  },
  {
    title: "Hackathons",
    desc: "Participating in national hackathons and rapid prototyping."
  },
  {
    title: "Open Source",
    desc: "Collaborating with developers and contributing to projects."
  }
]

export default function About() {
  return (
    <section id="about" className="space-y-10">

      <h2 className="text-3xl font-bold">
        What I Do
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {items.map((item)=>(
          <div
            key={item.title}
            className="p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition"
          >

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}