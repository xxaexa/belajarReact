import { portofolio } from '../Data'

export const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center p-16">
      {portofolio.map((p) => {
        const { id, img } = p
        return (
          <div key={id}>
            <div className="p-20 space-y-2 border-2">
              <img src={img} alt="" className="max-w-xs md:max-w-md   " />
            </div>
          </div>
        )
      })}
    </div>
  )
}
