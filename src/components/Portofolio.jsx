import { useState } from 'react'
import { portofolio } from './../Data'
import { Title } from './Title'

const Toggle = (props) => {
  const { id, img, desc } = props
  const [toggleThisElement, setToggleThisElement] = useState(false)
  return (
    <div className=" text-center">
      <div className="relative border-2 mx-auto md:max-w-xl">
        <img src={img} alt="Portofolio1" className=" mx-auto " onMouseEnter={() => setToggleThisElement((prev) => !prev)} />
        {toggleThisElement && <div className="absolute md:max-w-xl items-center right-0 bottom-0 h-28 bg-slate-900 text-white bg-opacity-60 py-2 px-4 font-bold mx-auto">{desc}</div>}
      </div>
    </div>
  )
}

export default function Portofolio() {
  return (
    <section id="" className="my-10">
      <Title text="PORTOFOLIO" />
      <div className="flex flex-wrap justify-center  ">
        {portofolio.map((p) => {
          return (
            <div key={p.id} className="self-center md:w-1/2  p-8">
              <Toggle {...p} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
