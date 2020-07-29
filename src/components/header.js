import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.png"

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Switch } from 'antd';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import "../styles/ants.scss"

const Header = () => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Link to="/downloads">
            <h2> Downloads </h2>
          </Link>
          <Link to="/wiki">
            <h2> Wiki </h2>
          </Link>
          <Link to="/contribute">
            <h2> Contribute </h2>
          </Link>
          <div style={{ marginLeft: '1rem' }}>
            <Switch defaultChecked={darkMode ? false : true} checkedChildren={<FaSun />} unCheckedChildren={<FaMoon />} onChange={() => dispatch({ type: `SWAP_THEME` })} />
          </div>
        </div>
        <div className="mobileLinks">
          <button className="menuButton" onClick={handleClick}>
            <FaBars />
          </button>
          <Menu
            className="navMenu"
            id="simple-menu"
            elevation={4}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}> <Link to="/downloads"> Downloads </Link> </MenuItem>
            <MenuItem onClick={handleClose}> <Link to="/wiki"> Wiki </Link> </MenuItem>
            <MenuItem onClick={handleClose}> <Link to="/contribute"> Contribute </Link> </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
