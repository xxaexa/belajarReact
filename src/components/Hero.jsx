import waves from '../assets/images/waves.jpg'

const Hero = () => {
  return (
    <section id="hero">
      <img src={waves} alt="" className="absolute opacity-40 h-screen w-screen object-cover" />
      <div className="min-h-screen flex flex-wrap  relative">
        <div className="w-full self-center lg:w-1/2">
          <div className="mx-auto w-48 bg-slate-900 text-white hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out py-2 px-4 rounded-full font-bold text-center">
            <a href="" target="blank" className="">
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div className="w-full self-center lg:w-1/2">
          <h1
            className="mx-auto mb-5 max-w-sm text-4xl 
          lg:max-w-lg"
          >
            Halo Saya Andre Eka
          </h1>
          <p
            className="mx-auto max-w-sm text-2xl 
          lg:max-w-lg"
          >
            Mahasiswa semester 6, selama berkuliah saya menjadi tertarik dengan dunia pemrograman web akhirnya saya mencoba belajar mulai dari mencari tutorial,membaca dokumentasi sampai mengikuti beberapa kursus secara online dan saya
            punya beberapa portofolio yang pernah saya buat
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
