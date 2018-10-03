import React from 'react';
import './Services.css';

class Services extends React.Component{
	render(){
		return(
			<div className="services">
				<h3>Services</h3>
				<h2>What We Offer</h2>
				<div className="row">
					<div>
						<span>
							<ion-icon name="phone-portrait"></ion-icon>
						</span>
						<h4>Responsive</h4>
						<p>Looks great on any screen!</p>
					</div>
					<div>
						<span>
							<ion-icon name="brush"></ion-icon>
						</span>
						<h4>Redesigned</h4>
						<p>Freshly Redesigned for Bootstrap 4!</p>						
					</div>
					<div>
						<span>
							<ion-icon name="thumbs-up"></ion-icon>
						</span>
						<h4>Favorited</h4>
						<p>Millions of users Start Bootstrap!</p>
					</div>
					<div>
						<span>
							<ion-icon name="help"></ion-icon>
						</span>
						<h4>Question</h4>
						<p>I moustache you a question!</p>					
					</div>
				</div>

			</div>
			);
	}
}

export default Services;