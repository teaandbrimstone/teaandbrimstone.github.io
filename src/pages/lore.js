import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"


const Lore = () => {
  return (
    <>
      <Layout>
        <SEO title="lore" />
        <div className="heroText">
          <h3> Euryale's Journal </h3>
          <p> Check out the art/tech demo </p>
        </div>
      </Layout>
      <div className="pageContent">

      </div>
      <Footer/>
    </>
  )
}

export default Lore