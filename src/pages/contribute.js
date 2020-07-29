import React, { useRef } from "react"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Parallax2 from "../components/parallax2"

import Tape from "../images/tape.svg"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const FourthPage = () => {
  const ref = useRef(null)

  return (
    <>
      <Layout2>
        <SEO title="contribute" />
        <div className="heroText">
          <h3>Contribute </h3>
          <p> Join the team officially, or just lend a helping hand. Anything is appreciated. </p>
          <div className="btnGroup">
            <button className="cButton pop" onClick={() => scrollToRef(ref)}>
              Application
            </button>
          </div>
        </div>
        <Parallax2 />
      </Layout2>
      <div className="pageContent">
        <div className="row">
          <div className="card pop cardMed empty" >
            <div className="cardHeader">
              <h3> Interested in development? </h3>
            </div>
            <div className="cardBody">
              Join the band. We're looking for programmers, those who doodle, and creatives that deal in stories, music scores, and anything in between. Please apply below!
            </div>
          </div>
          <img src={Tape} className="shadow" alt="tape" height="360px" width="500px" />
        </div>
        <div className="row shade2">
          <iframe title="app" ref={ref} src="https://docs.google.com/forms/d/e/1FAIpQLSe1ti0WPji7ejlRfsCvDrDefWLY2k2swucd7jP76XOlKVwLdA/viewform?embedded=true" width="600" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
        <div className="row">
          <div className="card pop cardMed empty" >
            <div className="cardHeader">
              <h3> Fundraising? </h3>
            </div>
            <div className="cardBody">
              Maybe once everything is up and running.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FourthPage