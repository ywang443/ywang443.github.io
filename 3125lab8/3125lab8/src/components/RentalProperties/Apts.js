import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

function Apt(props) {
  return (
    <div className="col-md-12">
      <div
        className={
          props.eachApt.book_status
            ? "card mb-3 shadow bg-grey"
            : "card mb-3 shadow bg-light"
        }
      >
        <Grid container justify="flex-start" alignItems="stretch">
          <Grid item xs="6">
            <div className="card-body">
              <img
                src={"./imgs/apts/" + props.eachApt.image}
                alt={props.eachApt.image}
                className="card-img"
              />
            </div>
          </Grid>

          <Grid item xs="6">
            <div className="card-body">
              <p className="text-dark">
                <b>{props.eachApt.name}</b>
              </p>
              <p className="text-secondary">
                <span className="mr-4">

                  {props.eachApt.consyear}
                </span>
                <span className="">

                  {props.eachApt.bed_num} Bedroom
                </span>
                <div>
                <span className="mr-4">

                  Size:{props.eachApt.size}
                </span>
                </div>
                <div>
                <span className="mr-4">

                  Type:{props.eachApt.type}
                </span>
                </div>
              </p>
              <p className="text-secondary">
                Rent/Month:{" "}
                {props.eachApt.book_status ? (
                  <span className="text-secondary">
                   ${props.eachApt.rent_month}
                  </span>
                ) : (
                  <span className="text-primary">$ {props.eachApt.rent_month}</span>
                )}
              </p>
              <div>
                {props.eachApt.book_status ? (
                  <Link to="/" className="btn btn-secondary disabled mr-2">
                    Request View
                  </Link>
                ) : (
                  <Link
                    to="/booking"
                    className="btn btn-dark mr-2 book-btn"
                    onClick={() => props.bookApt(props.eachApt)}
                  >
                    Request View
                  </Link>
                )}
                <Link
                  to="/details"
                  className="btn btn-outline-dark details-btn"
                  onClick={() => props.showDetails(props.eachApt)}
                >
                  Details
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showDetails: item => {
      dispatch({
        type: "SHOW_APT",
        payload: { item }
      });
    },
    bookApt: item => {
      dispatch({
        type: "BOOK_APT",
        payload: { item }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Apt);
