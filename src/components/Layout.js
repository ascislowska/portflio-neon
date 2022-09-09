import React from "react";
import Header from "./header";

import '../styles/global/layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
