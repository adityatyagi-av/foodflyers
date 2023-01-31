import React,{useState} from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import './navbar.css';

const Menu =()=>(
  <>
     <p><Link to="#home">Home</Link></p>
        <p><Link to="#wgpt3">Indian Food</Link></p>
        <p><Link to="#possibility">Blogs</Link></p>
        <p><Link to="#features">Items</Link></p>
        <p><Link to="#blog">List</Link></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="navbar-links_container">
        <Menu/>
      </div> 
      </div>
    <div className="navbar-sign">
    <p><Link to="/SignIn">Sign In</Link></p>
      <button type='button'><Link to="/SignUp">Sign up</Link></button>
    </div>
    <div className="navbar-menu">
      {toggleMenu
      ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
      :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
      
    }
    {toggleMenu && (
      <div className="navbar-menu_container scale-up-center">
        <div className="navbar-menu_container-links">
          <Menu/>
          <div className="navbar-menu_container-links-sign">
      <p><Link to="/SignIn">Login</Link></p>
      <button type='button'><Link to="/SignUp">Sign up</Link></button>
    </div>
        </div>
      </div>
    )
    }
    </div>
    </div>
  )
}

export default Navbar
