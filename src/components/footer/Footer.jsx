import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Order best and delicious food from FoodFlyers</h1>
      </div>

      <div className="footer-btn">
        <p>Order Food Now</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>FoodFlyer, B.H. 51 , Muradnagar, All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>FoodFlyer, B.H. 51 , Muradnagar</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2023 Food-Flyers. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer