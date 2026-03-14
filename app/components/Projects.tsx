const projects = [
  {
    name: "FarmConnect",
    desc: "Farmer to consumer marketplace built with MERN stack.",
    tech: "React · Node · MongoDB"
  },
  {
    name: "Netflix ML Analysis",
    desc: "Machine learning analysis on Netflix dataset.",
    tech: "Python · Pandas · ML"
  },
  {
    name: "Student Task Manager",
    desc: "Task manager platform with authentication.",
    tech: "React · Express · MongoDB"
  }
]

export default function Projects(){
  return(
    <section id="projects" className="space-y-8">

      <h2 className="text-3xl font-bold">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project)=>(
          <div
            key={project.name}
            className="border border-gray-800 p-6 rounded-xl hover:border-gray-500 transition"
          >

            <h3 className="text-xl font-semibold">
              {project.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {project.desc}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {project.tech}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}