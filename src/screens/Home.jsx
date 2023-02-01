import React from 'react'
import Cards from '../components/card/Cards'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/Hero/Hero'
import food1 from '../assets/food1.jpeg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/foood3.jpg'
import food4 from '../assets/food4.jpg'
import food5 from '../assets/food1.jpg'



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
        <Cards image={food1} FoodName={"Daal Makhni"} Text={"One of the delicious food in the world and you can find it more tasty "}/>
    </div>
    <div>
      <Footer/>
    </div>
    </> 
  )
}
