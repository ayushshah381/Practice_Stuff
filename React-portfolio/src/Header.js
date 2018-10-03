import React from 'react';
import Background from './img/bimage.jpg';
import './Header.css';

const myStyles = {
	background: `url( ${Background} )`,
	height: '50vh',
	backgroundSize: 'cover'
}

class Header extends React.Component{
	render(){
		return(
			<header style={myStyles}>
				<h1>{this.props.title}</h1>
				<p>A Free Bootstrap Theme By Start Bootstrap</p>
				<a href="#button">{this.props.button}</a>
			</header>

			);
	}
}

export default Header;