import React from 'react';
import './dragDrop.scss';
import CharmGrid from './charmgrid.js';

class DropZone extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){
		this.element = document.getElementsByClassName("dropZone")[0];
		this.charmRoot = this.element.children[0];
		this.props.onMount(this);
	};

	element;

	charmRoot;

	render(){
		return(
			<div className="dropZone">
				<div className="charmAnchor">
				</div>
			</div>
		)
	}
}

class DragDrop extends React.Component{
	constructor(){
		super();
		this.onMount = this.onMount.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.state = {charm: ""};
	}

	dz;

	onDrop(e, Charm, charmInfo){
		if (e.pageX >= this.dz.element.offsetLeft && (e.pageX <= this.dz.element.offsetLeft + this.dz.element.offsetWidth)){
			if (e.pageY >= this.dz.element.offsetTop && (e.pageY <= this.dz.element.offsetTop + this.dz.element.offsetHeight)){
				if(this.state.charm){
					this.state.charm.Charm.transitionToNode(this.state.charm.Charm.charmRoot);
				}
				let tEnd = function(){
					this.dz.charmRoot.appendChild(Charm.element);
					this.setState({charm: {
						name: charmInfo.name,
						description: charmInfo.description,
						Charm: Charm
					}});
				};
				tEnd = tEnd.bind(this);
				Charm.transitionToNode(this.dz.charmRoot, tEnd);
				return;
			}
		}
		let tEnd = function(){
			Charm.charmRoot.appendChild(Charm.element);
		};
		tEnd = tEnd.bind(this);
		Charm.transitionToNode(Charm.charmRoot, tEnd);
	}

	onMount(DropZone){
		this.dz = DropZone;
	}

	render(){
		return(
			<div className="dragDrop">
				<CharmGrid charmType="fire" onDrop={this.onDrop}/>
				<div className="heroText">
					<h3>Wiki</h3>
					<p>The elements at your fingertips.</p>
						<p>{this.state.charm.name + ":" + this.state.charm.description}</p>
					<DropZone onMount={this.onMount}/>
				</div>
				<CharmGrid charmType="water" onDrop={this.onDrop}/>
			</div>
		);
	}
}

export default DragDrop;
