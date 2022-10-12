import React from "react"
import { Link } from "gatsby"
//icons
import HomeIcon from "../images/icons/home.svg"
import AboutIcon from "../images/icons/about5.svg"
import PortfolioIcon from "../images/icons/portfolio2.svg"
import ContactIcon from "../images/icons/mail.svg"

const Navbar = ({ navbarVisible, setNavbarVisible }) => {
  //main page sections
  const sections = [
    {
      name: "start",
      displayedName: "Start",
      icon: <HomeIcon className="icon" />,
    },
    {
      name: "about",
      displayedName: "O mnie",
      icon: <AboutIcon className="icon" />,
    },
    {
      name: "portfolio",
      displayedName: "Portfolio",
      icon: <PortfolioIcon className="icon" />,
    },
    {
      name: "contact",
      displayedName: "Kontakt",
      icon: <ContactIcon className="icon" />,
    },
  ]

  return (
    <nav className={`navbar ${navbarVisible ? "navbar-visible" : ""}`}>
      {sections.map(section => {
        return (
          <li>
            <Link
              to={`/#${section.name}`}
              onClick={() => setNavbarVisible(false)}
            >
              {section.icon}
              {section.displayedName}
            </Link>
          </li>
        )
      })}
    </nav>
  )
}

export default Navbar
