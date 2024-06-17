import React from 'react'
import Slider from '../components/HomeSlider/Slider'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="max-w-[100vw] flex flex-col bg-redPink-5">
      <Slider/>
      <Footer/>
    </div>
  )
}

export default Home
