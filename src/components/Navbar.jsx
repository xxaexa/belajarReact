import { navLink } from './../Data'

export const Navbar = () => {
  return (
    <nav>
      <ul className="space-x-3 text-3xl hidden md:block lg:flex">
        {navLink.map((nav) => {
          const { id, text, href } = nav
          return (
            <li key={id}>
              <a href={href}>{text} </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
