import { portofolio } from '../Data'
import { useState } from 'react'

export const Cards = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-wrap justify-center p-16 ">
      {portofolio.map((p) => {
        const { id, img, desc } = p
        return (
          <div key={id} className=" cursor-pointer hover:bg-white">
            <div className=" p-20 space-y-2 border-2 ">
              <img src={img} alt="" className="relative max-w-xs md:max-w-xl" onMouseEnter={() => setShow((prev) => !prev)} onMouseOut={() => setShow((prev) => !prev)} />

              {show && <div className="max-w-l absolute bg-slate-900 text-white opacity-70 text-center">{desc}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
