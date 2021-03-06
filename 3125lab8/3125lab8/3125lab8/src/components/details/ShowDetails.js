import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { useTranslation } from  'react-i18next';
import { withTranslation } from 'react-i18next';


class ShowDetails extends Component {

	formatDate = date => {
		const yy = Number(date.substr(0,4)); const mm = Number(date.substr(5,2)); const dd = Number(date.substr(8,2));
		switch(mm){
			case 1: return `${dd} Jan ${yy}`;
			case 2: return `${dd} Feb ${yy}`;
			case 3: return `${dd} Mar ${yy}`;
			case 4: return `${dd} Apr ${yy}`;
			case 5: return `${dd} May ${yy}`;
			case 6: return `${dd} Jun ${yy}`;
			case 7: return `${dd} Jul ${yy}`;
			case 8: return `${dd} Aug ${yy}`;
			case 9: return `${dd} Sep ${yy}`;
			case 10: return `${dd} Oct ${yy}`;
			case 11: return `${dd} Nov ${yy}`;
			case 12: return `${dd} Dec ${yy}`;
			default:
		}
	}


	render() {
		const { t } = this.props;

		if(Object.keys(this.props.eachApt).length===0){
			return null;
		}

		return (
			<div className="container mt-5">
				<div className="row no-gutters shadow-sm border rounded overflow-hidden" id="show_details_top">
					<div className="col-md-7">
					<img src={"./imgs/apts/" + this.props.eachApt.image} alt={this.props.eachApt.image} className="card-img rounded-0"/></div>
					<div className="col-md-5 d-flex align-items-center bg-change">
						<div className="card rounded-0 border-0 p-4 bg-light shadow-lg">
							<div className="card-body">
								<h4 className="text-dark">{this.props.eachApt.name}</h4>
								<p className="text-secondary">
								</p>    <p className="text-secondary">
			                <span className="mr-4">

			                  {t("Apts:Consyear")}：{this.props.eachApt.consyear}
			                </span>
			                <span className="">

			                </span>
			                <div>
			                <span className="mr-4">

			                  {t("Apts:Size")}({t("Apts:sqft")}):{this.props.eachApt.size}
			                </span>
			                </div>
			                <div>
			                <span className="mr-4">

			                  {t("Apts:Type")}:{t("Apts:Bedroom")}：{this.props.eachApt.bed_num}，{t("Apts:Penthahouse")}：{this.props.eachApt.penthouse}，{t("Apts:Den")}:{this.props.eachApt.den}, {t("Apts:Balcony")}:{this.props.eachApt.balcony}.

			                </span>
			                </div>
			              </p>
			              <p className="text-secondary">
			                  {t("Apts:RentPerMonth")}:{" "}
			                {this.props.eachApt.book_status ? (
			                  <span className="text-secondary">
			                   ${this.props.eachApt.rent_month}
			                  </span>
			                ) : (
			                  <span className="text-primary">$ {this.props.eachApt.rent_month}</span>
			                )}
			              </p>

								<div>
									{this.props.eachApt.book_status?<a href="#!" className="btn btn-secondary btn-block disabled mr-2">Request </a>:<Link to="/booking" className="btn btn-dark btn-block shadow mr-2" onClick={()=>this.props.bookApt(this.props.eachApt)}>{t("Apts:Request")} </Link>}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-12">
						<h4>Apartment Details</h4>
						<hr/>
						{this.props.eachApt.book_status ? <h5><span className="badge badge-danger">Not Available</span></h5> : <h5><span className="badge badge-success">Available</span></h5>}

						<p className="text-secondary">{t("Apts:Size")}: {this.props.eachApt.size}{t("Apts:sqft")}</p>
						<p className="text-secondary">{t("Apts:Type")}: {this.props.eachApt.description.type}</p>
						<p className="text-secondary">{t("Apts:RentPerMonth")}:${this.props.eachApt.rent_month}</p>
						<p className="text-secondary">{this.props.eachApt.description.content}</p>
					</div>
				</div>
				<div>
					{this.props.eachApt.book_status ?
						(
							<div className="row mt-5">
								<div className="col-12">
									<h4>Current Booking</h4>
									<hr/>
									<div className="table-responsive-sm">
										<table className="table table-striped">
											<thead>
												<tr>
													<th>Name</th>
													<th>Phone No.</th>
													<th>Start Date</th>
													<th>End Date</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>{this.props.eachApt.userDetails.name}</td>
													<td>{this.props.eachApt.userDetails.phoneNo}</td>
													<td>{this.formatDate(this.props.eachApt.userDetails.StartDate)}</td>
													<td>{this.formatDate(this.props.eachApt.userDetails.EndDate)}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						) : null
					}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {eachApt: {...state.show_apt}}
}

const mapDispatchToProps = dispatch => {
	return {
		bookApt: item => {
			dispatch({
				type: "BOOK_APT",
				payload:{item}
			})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ShowDetails));
