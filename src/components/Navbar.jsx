import { navLink } from './../Data'

const Navbar = () => {
  return (
    <nav>
      <ul className="space-x-3 mx-auto max-w-sm text-2xl lg:max-w-lg hidden md:block lg:flex">
        {navLink.map((nav) => {
          const { id, text, href } = nav
          return (
            <li key={id}>
              <a className="hover:text-white" href={href}>
                {text}{' '}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
