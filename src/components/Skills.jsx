import { skills } from '../Data'

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center p-24 md:space-x-6  ">
      {skills.map((skill) => {
        const { id, title } = skill
        return (
          <div key={id}>
            <button className="w-28 bg-slate-900 text-white hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out py-2 px-4 rounded-full font-bold my-4">{title}</button>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
