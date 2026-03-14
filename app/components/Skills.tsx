const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Python",
  "Machine Learning",
  "Git"
]

export default function Skills(){
  return(
    <section id="skills" className="space-y-8">

      <h2 className="text-3xl font-bold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill)=>(
          <span
            key={skill}
            className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  )
}