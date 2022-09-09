import React from "react";
//icons
import HomeIcon from "../images/icons/home.svg";
import AboutIcon from "../images/icons/about5.svg";
import PortfolioIcon from "../images/icons/portfolio2.svg";
import ContactIcon from "../images/icons/mail.svg";
import Home from "../pages";

const Header = (props) => {
  const renderNavList = () => {
    return <li>menu</li>;
    //main page sections
    // const sections = [
    //   {
    //     key: "hero",
    //     displayedName: "Start",
    //     icon: <HomeIcon className="icon" />,
    //   },
    //   {
    //     key: "about",
    //     displayedName: "O mnie",
    //     icon: <AboutIcon className="icon" />,
    //   },
    //   {
    //     key: "portfolio",
    //     displayedName: "Portfolio",
    //     icon: <PortfolioIcon className="icon" />,
    //   },
    //   {
    //     key: "contact",
    //     displayedName: "Kontakt",
    //     icon: <ContactIcon className="icon" />,
    //   },
    // ];

    // return sections.map((section) => {
    //   return (
    //     <li>
    //       {/* <AniLink cover to="/" color="black" direction="up"> */}
    //         {section.icon}
    //         {section.displayedName}
    //       {/* </AniLink> */}
    //     </li>
    //   );
    // });
  };
  return (
    <div className="header">
      <h3>Anna Ścisłowska</h3>
      <h3> Front-end developer</h3>
      <nav>
        <HomeIcon />
        Tu menu
        {renderNavList}
      </nav>
    </div>
  );
};

export default Header;
