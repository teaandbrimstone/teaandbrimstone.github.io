import React from "react"
import { FaDiscord, FaMailBulk, FaRedditSquare, FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {

  return (
    <div className="footer">
      <div className="footerContent">
        <a href="./"><FaDiscord /> &nbsp;discord </a>
        <a href="./"><FaRedditSquare />&nbsp;reddit </a>
        <a href="./"><FaTwitterSquare />&nbsp;twitter </a>
        <a href="./"><FaMailBulk /> &nbsp;email us </a>
      </div>
    </div>
  )
}

export default Footer
