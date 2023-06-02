import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero'
import './index.css'
import Kemampuan from './components/Kemampuan'
import Portofolio from './components/Portofolio'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="font-mainFont">
    <Hero />
    <Kemampuan />
    <Portofolio />
    <Footer />
  </div>
)
