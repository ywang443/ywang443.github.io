import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// Importing components
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import RentalProperties from "./components/RentalProperties/RentalProperties";
import ShowDetails from "./components/details/ShowDetails";
import Booking from "./components/booking/Booking";
import NotFound from "./components/pages/NotFound";
import About from "./components/about/About";
import contact from "./components/contact/contact";
import ResidentsPortal from "./components/ResidentsPortal/ResidentsPortal";

// ------------------------------------------------------------
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/RentalProperties" component={RentalProperties} />
          <Route path="/details" component={ShowDetails} />
          <Route path="/booking" component={Booking} />
          <Route path="/page404" component={NotFound} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={contact} />
          <Route path="/ResidentsPortal" component={ResidentsPortal} />
          <Redirect path="*" to="/page404"/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
