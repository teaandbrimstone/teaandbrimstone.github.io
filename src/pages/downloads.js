import React, { useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import Mac from "../images/mac.svg"
import PC from "../images/pc.svg"

import { AiOutlineDownload } from 'react-icons/ai';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const windowGlobal = typeof window !== 'undefined' && window

const ThirdPage = () => {
  const ref = useRef(null)

  // function getOS() {
  //   if (windowGlobal.navigator === 'undefined') {
  //     return ""
  //   }
  //   else {
  //     var userAgent = windowGlobal.navigator.userAgent,
  //     platform = windowGlobal.navigator.platform,
  //     macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  //     windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  //     iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  //     os = null;

  //     if (macosPlatforms.indexOf(platform) !== -1) {
  //       os = 'Mac OS';
  //     } else if (iosPlatforms.indexOf(platform) !== -1) {
  //       os = 'iOS';
  //     } else if (windowsPlatforms.indexOf(platform) !== -1) {
  //       os = 'Windows';
  //     } else if (/Android/.test(userAgent)) {
  //       os = 'Android';
  //     } else if (!os && /Linux/.test(platform)) {
  //       os = 'Linux';
  //     }
  //     return os;
  //   }
  // }

  return (
    <>
      <Layout>
        <SEO title="downloads" />
        <div className="heroText">
          <h3>Downloads </h3>
          <p> Check out the art/tech demo </p>
        </div>
        <div className="btnGroup">
          <button className="cButton filled pop" onClick={() => scrollToRef(ref)}>
            <AiOutlineDownload /> Download
          </button>
          <button className="cButton pop">
            Repo
      </button>
        </div>
      </Layout>
      <div className="pageContent">
        <div className="row" ref={ref}>
          <div className="cardCol">
            <div className="card pop cardMed" >
              <div className="cardHeader">
                <h3> Windows </h3>
              </div>
              <a target="_blank" rel="noreferrer" href="https://mega.nz/file/dkkHRR7A#RJynffohjau8wVlGF_I45mB7DB-7tBXenwiIZOduTAM">Download</a>
              <div className="cardBody">
                <img src={PC} alt="pc" width="300px" />
              </div>
            </div>
            <div className="card pop cardMed" >
              <div className="cardHeader">
                <h3> Mac </h3>
              </div>
              <a target="_blank" rel="noreferrer" href="https://mega.nz/file/BstBibRJ#pGfo7kXVeCJsuuoXbrsCVaVWQ-O2w2P-2ls6PFPR_fc">Download</a>
              <div className="cardBody">
                <img src={Mac} alt="mac" width="300px" />
              </div>
            </div>
          </div>
          <div className="cardCol">
            <div className="card pop cardMed" >
              <div className="cardHeader">
                <h3> v0.1 </h3>
              </div>
              <div className="cardBody">
                <h2> Art/Tech Demo </h2>
                <p> Basic collisions, movement, and physics for orbiting colliders (for attacks). Player spritesheet has cardinal directions mostly complete, working on diagonals. </p>
                <br />
                <p> I don't have the demo compiled for mobile devices or Linux yet. Once a more substantial product is present, this will be done. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ThirdPage
