import React from "react"
import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import Footer from "../components/footer"

import Waves from "../images/wave.png"

const Lore = () => {
  const charms = [5, 5, 5, 5, 5]

  function genCharmCard(charm) {
    return <div className="card">x</div>
  }

  return (
    <>
      <Layout2>
        <SEO title="lore" />
        <div className="charmBack">
          <img className="water" src={Waves} width="664" height="564"/>
          <img className="fire" src={Waves} width="664" height="564"/>
        </div>
        <div className="charmGrid">
          {charms.map(charm => genCharmCard(charm))}
        </div>
        <div className="heroText">
          <h3> Wiki </h3>
          <p> The elements, at your fingertips </p>
        </div>
        <div className="charmGrid">
          {charms.map(charm => genCharmCard(charm))}
        </div>
      </Layout2>
      <div className="pageContent">
        <div className="row">
          Lore goes here.
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Lore