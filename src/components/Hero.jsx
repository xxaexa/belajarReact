import { Navbar } from './Navbar'
const Hero = () => {
  return (
    <section id="Hero" className="bg-violet-500 bg-opacity-50 flex justify-center items-center flex-wrap min-h-screen p-16">
      <div className="md:w-1/2">
        <button className="md:left-0 bg-slate-900 text-white hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out py-2 px-4 rounded-full font-bold">
          <a href="" target="blank" className="">
            DOWNLOAD CV
          </a>
        </button>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-4xl tracking-wider">Halo Saya Andre Eka</h1>
        <br />
        <h2 className="text-2xl md:text-3xl">Saya seorang mahasiswa semester 6, saya mempunyai portofolio di akun github, saya juga suka belajar hal baru, saya orang yang mudah bergaul dan beradaptasi</h2>
        <br />
        <Navbar />
      </div>
    </section>
  )
}

export default Hero
