import React, { useState,useEffect } from "react";
import './navBar.css';
import {Link} from 'react-router-dom'

import {Button} from './Button';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button,setButton]= useState(true);
  
  const showButton=() =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
useEffect(()=>
  {
    showButton()
  },[]
)
  window.addEventListener('resize',showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="fab fa-angellist navbar-logo" onClick={closeMobileMenu} to='/'>  LoGo</Link>
          
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to='/'  className="nav-links" onClick={closeMobileMenu}>Home</Link>
             
            </li>

            <li className="nav-item">
              <Link to='/About' className="nav-links" onClick={closeMobileMenu}> About</Link>
              
            </li>
            <li className="nav-item">
            <Link to="/photos" className="nav-links" onClick={closeMobileMenu}>Photo</Link>
              
            </li>

            <li className="nav-item">
            <Link to="/sign-up"
                className="nav-links-mobile "
                onClick={closeMobileMenu}> Sign Up</Link>
             
            </li>
          </ul>
          {button && <Button className='btn--outline' buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
