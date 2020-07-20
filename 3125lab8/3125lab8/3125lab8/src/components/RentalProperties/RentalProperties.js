import React, { Component } from 'react';
import Apts from './Apts';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RangeSlider from './RangeSlider';
import { useTranslation } from 'react-i18next';


class RentalProperties extends Component {
    render() {
      const { t } = this.props;

        return (
            <div className="container pt-5">
                <h4>Apartment For Rent </h4>
                <hr/>
                <div>
								Filter
                    <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                    >
                        <Grid item xs>

														<div>
														<Button variant="contained">Studio</Button>
														<Button variant="contained">1BD</Button>
														<Button variant="contained">2BD</Button>
														<Button variant="contained">3BD</Button>
														<Button variant="contained">Penthahouse</Button>
														<br></br>
														<br></br>
														</div>
														<div>
														<RangeSlider/>
														</div>
														<div>
														Room Size
														<div class = "card mb-3 shadow bg-light">
															<input placeholder="sqft"></input>
														</div>
														</div>
		                        </Grid>

		                        <Grid item xs={9}>
		                            <Grid container direction="column" justify="flex-start" alignItems="stretch">
		                            <Grid item xs>
		                            <div>
		                                {this.props.Array.map(eachApt=>{
		                                    return (
		                                        <Apts key={eachApt.id} eachApt={eachApt} />
		                                    )
		                                })}

		                            </div>
		                            </Grid>
		                            </Grid>
		                        </Grid>

				                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { Array: [...state.apts] }
}



export default connect(mapStateToProps, null)(RentalProperties);
