// import food1 from '../../assets/food1.jpeg'
// import food2 from '../../assets/food2.jpg'
// import food3 from '../../assets/foood3.jpg'
// import food4 from '../../assets/food4.jpg'
// import food5 from '../../assets/food1.jpg'
import React from 'react';
import food1 from '../../assets/foood3.jpg'
import './hero.css'
const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${food1})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to FoodFlyer</h1>
        <p className="hero-subtitle">Find what you're looking for</p>
        <div className="hero-search-container">
          <input type="text" placeholder="Search" className="hero-search" />
          <button className="hero-search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
