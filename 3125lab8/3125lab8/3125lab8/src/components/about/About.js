import React, { Component } from 'react';
import {connect} from 'react-redux';

class About extends Component {
	render() {
		return (
			<div class="container background-light pt-5 ">
				<h5><a class="text-success">SweetHome</a>
           <img src="./imgs/icons/sweethome.png" width="45px"/></h5>
           <div class="card">
					 <a class="text">  <img class="card-img" src="./imgs/bodybck.jpg" alt="Card image" width="auto"height="200px"/>
					 	<h6>Our Promise and Purpose</h6>
				
					 	Sweet Home is committed to providing personalized, professional and responsive services to the residents.
					  Its buildings are located in an area with convenient services, facilities and transits.
						The company creates a sense of home within each property while also connecting with the community through social-responsibility programs.
						All of these combine to provide tenants with the best customer experience and make the community a real home.
						</a>
           </div>
			</div>

		);
	}
}


export default About;
