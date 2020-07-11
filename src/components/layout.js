import React from "react"
import PropTypes from "prop-types"
import Parallax from "./parallax"

import Header from "./header"
import "./layout.scss"
import "../styles/style.scss"

const Layout = ({ children }) => {

  return (
    <div className="heroContainer" >
      <Header/>
      <div className="heroContent">
        {children}
      </div>
      <Parallax />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
