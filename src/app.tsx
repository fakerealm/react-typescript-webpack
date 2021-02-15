import React, { Component } from "react";
import "./main.scss";
//@ts-ignore
import img from "./main.png";

export default class App extends Component{
	render(){
		return(
			<>
				<h1 className="heading"> Thanks for using this template. </h1>
				<h3>Edit src/App.tsx and create your own react project.</h3>
				<img src={img} />
			</>
		);
	}
}