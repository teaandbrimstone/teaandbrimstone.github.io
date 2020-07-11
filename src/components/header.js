import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.png"

import { Switch } from 'antd';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import "../styles/ants.scss"

const Header = () => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="nav">
        <Link
          className="logo"
          to="/"
        >
          <img className="logo" src={Logo} alt="logo" />
          <h1>project</h1>
        </Link>
        <span className="mlAuto" />
        <div className="desktopLinks">
          {/* <Link to="/devlog">
            <h2> Devlog </h2>
          </Link> */}
          <Link to="/downloads">
            <h2> Downloads </h2>
          </Link>
          <Link to="/contribute">
            <h2> Contribute </h2>
          </Link>
          <div style={{ marginLeft: '1rem' }}>
            <Switch defaultChecked={darkMode ? false : true} checkedChildren={<FaSun />} unCheckedChildren={<FaMoon />} onChange={() => dispatch({ type: `SWAP_THEME` })} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
