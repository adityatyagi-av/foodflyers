import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <>
    <div>
        <Navbar/>
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
