import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div class="container background-light pt-5 ">
				<h5><a class="text-success">SweetHome</a>
           <img src="./imgs/icons/sweethome.png" width="45px"/></h5>
           <div class="card">
					 <a class="text">  <img class="card-img" src="./imgs/bodybck.jpg" alt="Card image" width="auto"height="200px"/>
           <p className="text-secondary">
             1st Floor, No: 666, 0 Sussex Dr, K1A 0U0
           </p>
           <p className="text-secondary mb-4">Ottawa, ON, 613-613-NICE</p>
           <div className="socialIcons mb-5">

           </div>
						</a>
           </div>
			</div>

		);
	}
}


export default About;
