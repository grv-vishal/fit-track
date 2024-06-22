import React from 'react'
import Slider from '../components/HomeSlider/Slider'
import Footer from '../components/Footer'
import Content from '../components/HomeContent/Content'

const Home = () => {
  return (
    <div className="max-w-[100vw] flex flex-col bg-gray-100">
      <Slider/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home
