import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"
import "../styles/style.scss"

const Layout2 = ({ children }) => {

  return (
    <div className="heroContainer black" >
      <Header/>
      <div className="heroContent heroRow">
        {children}
      </div>
    </div>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
