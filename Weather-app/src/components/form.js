import React from 'react';

class Form extends React.Component{
	render(){
		return(
			<div>
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="City" /><br />
					<p></p>
					<input type="text" name="country" placeholder="Country" /><br />
					<p></p>
					<button>Get Weather</button><br />
					<p></p>
				</form>
			</div>
			);
	}
}

export default Form;