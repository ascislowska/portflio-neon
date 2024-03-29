import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Link, StaticImage } from "gatsby"
import Navbar from "./Navbar"

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(false)
  return (
    <div className="header">
      <Link to="/#start" className="logo">
        {/* <div className="photo-wrapper">
          <StaticImage
            src="../images/profile.jpg"
            className="photo"
            alt="anna Ścisłowska portrait"
          />
        </div> */}
        <h4>Front-end developer</h4>
        <h3>Anna Ścisłowska</h3>
      </Link>
      <div className="btn-wrapper">
        <button
          className={`nav-btn ${
            navbarVisible ? "navbar-visible" : "navbar-hidden"
          }`}
          onClick={() => {
            setNavbarVisible(!navbarVisible)
          }}
        >
          <FiMenu className="icon open" />
          <FiX className="icon close" />
        </button>
      </div>
      <Navbar
        navbarVisible={navbarVisible}
        setNavbarVisible={setNavbarVisible}
      />
    </div>
  )
}

export default Header
