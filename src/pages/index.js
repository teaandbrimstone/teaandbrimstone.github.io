import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import Intro from "../images/intro.png"
import Char from "../images/charcard.png"
import Tree from "../images/skilltree.png"
import Sprite from "../images/sprite.gif"


const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="home" />
        <div className="heroText">
          <h3>The stars breathe... </h3>
          <p> and in a world where the sky has fallen into the sea, incendiary flowers paint an empire madder. </p>
        </div>
      </Layout>
      <div className="pageContent">
        <div className="row">
          <img src={Intro} className="shadow" alt="demo" width="600" height="360" />
          <div className="card cardSmall pop empty">
            <div className="cardHeader">
              <h3> An indie pixel RPG </h3>
            </div>
            <div className="cardBody">
              <p> with fluid combat that revolves around controlling the elements and combo based techniques. Not bending, entirely different concept. </p>
            </div>
          </div>
        </div>
        <div className="row shade">
          <div className="card cardSmall pop empty">
            <div className="cardHeader">
              <h3> Featuring a cast of characters </h3>
            </div>
            <div className="cardBody">
              <p> that currently (and only) consists of a masked madman, clad in cinder and flame. They don't look very nice. There's also the dummy. </p>
            </div>
          </div>
          <div className="charGroup">
            <img src={Char} className="shadow" alt="demo" width="430" height="320" />
            <img src={Sprite} alt="demo" className="pixel sprite shadow" width="60" height="90" />
          </div>
        </div>
        <div className="row">
          <img src={Tree} className="darkShadow" alt="demo" width="600" height="360" />
          <div className="card cardSmall pop empty">
            <div className="cardHeader">
              <h3> And a dual tone narrative </h3>
            </div>
            <div className="cardBody">
              <p> that probably borders on disingenuous. But I suppose that's a matter of perspective. </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
