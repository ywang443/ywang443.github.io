import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { useTranslation } from  'react-i18next';
import { withTranslation } from 'react-i18next';

class Booking extends Component {

	state = {
		details: { name: "", phoneNo: "", StartDate: "", EndDate: "" },
		redirect: false
	}

	renderRedirect = () => {
		if (this.state.redirect) {
    		return <Redirect to='/' />
	    }
	    return null;
	}

	onChange = (e) => {
		const obj1 = { [e.target.name]: e.target.value };
		this.setState({ details: {...this.state.details, ...obj1} });
	}

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

	dateValidation = (StartDate, EndDate) => {
		let flag=0;
		const d = new Date();
		const date = d.getDate();
		const month = d.getMonth()+1;   // Month returns 0-11
		const year = d.getFullYear();
		const iyy = Number(StartDate.substr(0,4)); const imm = Number(StartDate.substr(5,2)); const idd = Number(StartDate.substr(8,2));
		const ryy = Number(EndDate.substr(0,4)); const rmm = Number(EndDate.substr(5,2)); const rdd = Number(EndDate.substr(8,2));

		if(iyy<year){
			flag=1;
		}
		else if(iyy===year) {
			if(imm<month){
				flag=1;
			}
			else if(imm===month && idd<date) {
				flag=1;
				console.log(flag);
			}
			else{
				console.log("Start Date is valid.");
				if(ryy<iyy){
					flag=2;
				}
				if(ryy===iyy){
					if(rmm<imm){
						flag=2;
					}
					else if(rmm===imm && rdd<=idd){
						flag=2;
					}
					else{
						console.log("End Date is valid.");
					}
				}
			}
		}
		// (iyy>year)
		else{
			if(ryy<iyy){
				console.log("Start Date is valid. 2");
				flag=2;
			}
			if(ryy===iyy){
				if(rmm<imm){
					flag=2;
				}
				else if(rmm===imm && rdd<=idd){
					flag=2;
				}
				else{
					console.log("End Date is valid. 2");
				}
			}
		}


		console.log("End", flag);
		return flag;
	}

	openModal = () => {
		document.querySelector(".modal-wrapper").style.display = "flex";
	}

	closeModal = () => {
		document.querySelector(".modal-wrapper").style.display = "none";
		this.setState({details: { name: "", phoneNo: "", StartDate: "", EndDate: "" }, redirect: true});
	}

	onSubmit = (e) => {
		e.preventDefault();
		// passing the two date strings to dateValidation()
		const flag = this.dateValidation(this.state.details.StartDate, this.state.details.EndDate);
		// To stop the function from further excuting return something
		if(flag===1){
			this.setState({details: {...this.state.details, StartDate: ""}});
			return alert("You cannot rent an apartment in the past!");
		}
		if(flag===2){
			this.setState({details: {...this.state.details, EndDate: ""}});
			return alert("Please enter a valid End date!");
		}

		const updatedCar = {...this.props.carToBook, userDetails: this.state.details, book_status: true};
		// below this the modal function should be written
		this.props.updateState(updatedCar);
		this.openModal();
	}

	render() {
		const { t } = this.props;

		if(Object.keys(this.props.aptToBook).length===0){
			return null;
		}

		return (
			<div className="container my-5">
				{this.renderRedirect()}
				<div className="modal-wrapper justify-content-center align-items-center my-fade" style={{display: "none"}}>
					<div className="modal-content w-75 h-50 d-flex justify-content-center align-items-center">
						<div className="row">
							<div className="col-md-4">
								<div className="h-100 overflow-fidden">
									<img className="modal-img" src="./imgs/book_confirm.png" alt="bg" />
								</div>
							</div>
							<div className="col-md-8 d-flex justify-content-center align-items-center">
								<div className="p-3">
									<h2 className="border-bottom pb-3">{t("Booking:String1")}</h2>
									<p className="text-secondary">{t("Booking:String2")} <span className="text-dark font-weight-bold">{this.props.aptToBook.name}</span></p>
									<p className="text-secondary mb-4">{t("Booking:String3")} <span className="text-dark font-weight-bold">{this.formatDate(this.state.details.StartDate)}</span>{t("Booking:To")} <span className="text-dark font-weight-bold">{this.formatDate(this.state.details.EndDate)}</span></p>
									<p><button className="btn btn-dark float-right" onClick={this.closeModal}>{t("Booking:Countinue")} <img src="./imgs/icons/arrow.png" className="icon_img" alt="arrow"/></button></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="h-100 overflow-hidden" id="side_img_checkout">
							<img src="./imgs/checkout.png" alt="checkout"/>
						</div>
					</div>
					<div className="col-md-9 py-5" id="booking-form">
                        <h4>{t("Booking:String4")}</h4>
                        <hr/>
                        <form className="pt-3" onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">{t("Booking:Name")}</label>
                                        <input type="text" title={t("Booking:String4")} className="form-control" name="name" value={this.state.details.name} onChange={this.onChange} pattern="^[A-Za-z\s]{1,}[A-Za-z\s]{0,}$" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contact">{t("Booking:Cellphone")}</label>
                                        <input type="text" title={t("Booking:String5")} className="form-control" name="phoneNo" value={this.state.details.phoneNo} onChange={this.onChange} pattern="^[0-9]\d{9}$" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="StartDate">{t("Booking:StartDate")}</label>
                                        <input type="date" className="form-control" name="StartDate" value={this.state.details.StartDate} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="EndDate">{t("Booking:EndDate")}</label>
                                        <input type="date" className="form-control" name="EndDate" value={this.state.details.EndDate} onChange={this.onChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4">
	                            <div className="col-6">
	                                <Link to="/" className="btn btn-light">{t("Booking:Cancel")}</Link>
	                            </div>
	                            <div className="col-6 text-align-right">
	                                <button type="submit" className="btn btn-dark">{t("Booking:Request")} </button>
	                            </div>
	                        </div>
                        </form>
                    </div>
				</div>
			</div>
		);
	}
}




const mapStateToProps = state => {
	return {aptToBook: {...state.book_apt}}
}

const mapDispatchToProps = dispatch => {
	return {
		updateState: item => {
			dispatch({
				type: "UPD_APT",
				payload: {item}
			})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Booking));
