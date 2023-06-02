export const Footer = () => {
  return (
    <footer className="bg-violet-500 bg-opacity-50 text-center p-8">
      <p className="md:text-2xl">TERHUBUNG DENGAN SAYA</p>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="https://www.twitter.com" target="blank">
            <i className="fab fa-twitter text-4xl text-violet-500 hover:text-white ease-in-out duration-500"></i>
          </a>
        </li>
        <li>
          <a href="https://https://www.instagram.com/andreekaaa1" target="blank">
            <i className="fab fa-instagram text-4xl text-violet-500 hover:text-white ease-in-out duration-500"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="blank">
            <i className="fa-regular fa-envelope text-4xl text-violet-500 hover:text-white ease-in-out duration-500"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/xxaexa" target="blank">
            <i className="fa-brands fa-github text-4xl text-violet-500 hover:text-white ease-in-out duration-500"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}
