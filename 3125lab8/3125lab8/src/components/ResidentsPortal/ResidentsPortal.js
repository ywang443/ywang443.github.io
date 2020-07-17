import React, { Component } from 'react';
import {connect} from 'react-redux';
import StepperDemo from '../Stepper';
import TabsDemo from '../Tabs';



function ResidentsPortal() {
  return (
		<div class="container">
    <div className="App">
     <StepperDemo/>
    </div>
		</div>
  );
}

export default ResidentsPortal;
