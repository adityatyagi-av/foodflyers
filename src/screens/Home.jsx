import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
      <Hero/>
    </div>
     <div>
        <Cards />
    </div>
    <div>
      <Footer/>
    </div>
    </> 
  )
}
