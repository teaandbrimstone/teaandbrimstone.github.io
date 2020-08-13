import React from 'react';
import './charmgrid.scss';
import charms from './listCharms.json';

class Charm extends React.Component{

	constructor(){
		super();
		this.mousedown = this.mousedown.bind(this);
                this.mousemove = this.mousemove.bind(this);
                this.mouseup = this.mouseup.bind(this);
	}

	element;

	charmRoot;

	id = Math.floor(Math.random()*1000000).toString(16);
	
	componentDidMount(){
		this.element = document.getElementById(this.id);
		this.charmRoot = this.element.parentNode;
		this.element.addEventListener("mousedown", this.mousedown);
	}

	
	componentWillUnmount(){
		this.element.removeEventListener("mousedown", this.mousedown);
	}

	mousedown = function(e){
		window.addEventListener("mousemove", this.mousemove);
		window.addEventListener("mouseup", this.mouseup);
	}

	mousemove = function(e){
		e.stopPropagation();
		e.preventDefault();
		this.element.style.position = "absolute";
		this.element.style.top = `${e.clientY + window.scrollY}px`;
		this.element.style.left = `${e.clientX + window.scrollX}px`;
	}

	mouseup = function(e){
		window.removeEventListener("mousemove", this.mousemove);
		window.removeEventListener("mouseup", this.mouseup);
		this.props.onDrop(e, this, this.props.charm);
	}

	transitionToNode(Node, transitionEnd){
		this.element.classList.add("dropped");
		this.element.style.left = Node.offsetLeft+"px";
		this.element.style.top = Node.offsetTop+"px";
		let tEnd = function(e){
			if (transitionEnd){
				transitionEnd();
			};
			e.target.classList.remove("dropped");
			e.target.removeEventListener("transitionend", tEnd);
		};
		this.element.addEventListener("transitionend", tEnd);
	}

	moveTo(x, y){
		x ? this.element.style.left = x+"px" : this.element.style.left = this.element.parentNode.offsetLeft+"px";
		y ? this.element.style.top = y+"px" : this.element.style.top = this.element.parentNode.offsetTop+"px";
	}

	atHome(){
		if (parseInt(this.element.style.top) != this.element.parentNode.offsetTop){
			if(parseInt(this.element.style.left) != this.element.parentNode.offsetLeft){
				return false;
			}
		}
		return true;

	}

	render(){
		return(
			<div className="charmRoot">
				<div className="charm" id={this.id}>
					{this.props.charm.name}
				</div>
			</div>
		)
	}
};


class CharmGrid extends React.Component{

	charms = charms[this.props.charmType].map( (c) => 
		<Charm charm={c} onDrop={this.props.onDrop}/>
	);

	render(){
		return(
			<div className="charmGridRoot">
				<div className="charmGrid">
					{this.charms}
				</div>
			</div>
		)
	}

}


export default CharmGrid;
