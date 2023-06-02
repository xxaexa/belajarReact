import { useState } from 'react'
import { skills } from './../Data'
import { Title } from './Title'

const Toggle = (props) => {
  const { title, body, id } = props
  const [toggleThisElement, setToggleThisElement] = useState(false)
  return (
    <div className="text-center my-4">
      <button
        className=" w-32 bg-slate-900 text-white  hover:text-slate-200 transition  py-2 px-4 rounded-full font-bold mx-auto hover:rounded-none ease-in duration-500"
        onMouseOut={() => setToggleThisElement((prev) => !prev)}
        onMouseEnter={() => setToggleThisElement((prev) => !prev)}
      >
        {title}
      </button>
      {toggleThisElement && <div className="w-32 bg-slate-900 text-white   transition duration-500 ease-in-out py-2 px-4 rounded-b-lg font-bold mx-auto">{body}</div>}
    </div>
  )
}

export default function Kemampuan() {
  return (
    <section id="kemampuan" className="my-4">
      <Title text="KEMAMPUAN" />
      <div className="flex flex-wrap justify-center  ">
        {skills.map((skill) => {
          // const { id, title, body } = skill
          return (
            <div key={skill.id} className="self-center lg:w-1/6 space-y-4 h-60 p-16">
              <Toggle {...skill} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
