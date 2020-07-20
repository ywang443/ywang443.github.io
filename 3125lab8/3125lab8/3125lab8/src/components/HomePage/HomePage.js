import React, { Component } from 'react';


class HomePage extends Component {
	render() {
		return (
			<div class="container background-light pt-5">
				<h5><a class="text-success">SweetHome</a>
           <img src="./imgs/icons/sweethome.png" width="45px"/></h5>
           <div class="card">
            <img class="card-img" src="./imgs/bodybck.jpg" alt="Card image" width="500px"height="500px"/>
            <div class="card-img-overlay">
            <div class="container text-light bg-success col-xl-6 sticky-top">
						<br></br>
						<h3 class="text-center" >Find a clean and nice rental suite</h3>
						<br></br>
						<div class="row">
						<select class="container col-xl-auto">
							<option value="select an area">--Please select an area--</option>
							<option value="Southkeys">Southkeys</option>
							<option value="Byward Market">Byward Market</option>
							<option value="Sandy Hill">Sandy Hill</option>
							<option value="Vanier">Vanier</option>
							<option value="Centertown">Centertown</option>
						</select>

						</div>
						<br></br>
						<br></br>

						<div class="row col-12">
						<input type="checkbox">
							</input><p>Studio</p>
						<input type="checkbox">
							</input><p>1 Bedroom</p>
						<input type="checkbox">
							</input><p>2 Bedroom</p>
						<input type="checkbox">
							</input><p>3 Bedroom</p>
						<input type="checkbox">
							</input>Penthahouse
						</div>

						<div>
						<br></br>
						<button type="button" class="text-success btn btn-light btn-outline-light btn-block">Search</button>
						<br></br>
						</div>
						<br></br>
            </div>
            </div>
           </div>
			</div>

		);
	}
}

export default HomePage;
