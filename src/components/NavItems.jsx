import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import sm from "../assets/images/logo/sm.png"
import { AuthContext } from '../contexts/AuthProvider';

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // auth info
  const {user} = useContext(AuthContext);
  console.log(user)

  // add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
          <div className='header-top-area'>
            <Link to="/signup" className='lab-btn me-3'><span>Create acount</span></Link>
          </div>
        </div>
      </div>
      {/* Header bottom */}
      <div className='header-bottom'>
        <div className="container">
          <div className="header-wrapper">
            {/* logo section */}
            <div className='logo-search-acte'>
              <div className="logo">
                <Link to={"/"}>
                  {/* <img src={sm} alt="" /> */}
                  <h2 className='lab-btn me-3'><span>Semi-Shop</span></h2>
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>

                </ul>
              </div>
              {/* Register & log in area */}
              <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
              <Link to="/login" className='d-none d-md-block'>Log In</Link>
              <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* toggler social media icons */}
              <div className="ellepsis-bar d-md-none"
              onClick={()=>setSocialToggle(!socialToggle)}>
                <i className="icofont-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavItems
