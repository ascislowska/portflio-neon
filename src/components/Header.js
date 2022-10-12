import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "./Navbar"

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(false)
  console.log(navbarVisible)
  return (
    <div className="header">
      <Link to="/#start" className="logo">
        {/* <div className="photo-wrapper">
          <StaticImage src="../images/profile.jpg" className="photo" />
        </div> */}
        <h4>Front-end developer</h4>
        <h3>Anna Ścisłowska</h3>
      </Link>
      <div className="btn-wrapper">
        <a
          className={`nav-btn ${
            navbarVisible ? "navbar-visible" : "navbar-hidden"
          }`}
          onClick={() => {
            setNavbarVisible(!navbarVisible)
          }}
        >
          <FiMenu className="icon open" />
          <FiX className="icon close" />
        </a>
      </div>
      <Navbar
        navbarVisible={navbarVisible}
        setNavbarVisible={setNavbarVisible}
      />
    </div>
  )
}

export default Header
