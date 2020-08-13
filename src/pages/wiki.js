import React from "react"
import Layout2 from "../components/layout2"
import SEO from "../components/seo"
import Footer from "../components/footer"
import DragDrop from "../components/wiki/dragDrop.js";
import Waves from "../images/wave.png"

class Lore extends React.Component{
	render(){
  		return (
    			<>
      				<Layout2>
        				<SEO title="lore" />
					<DragDrop />
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
}

export default Lore
