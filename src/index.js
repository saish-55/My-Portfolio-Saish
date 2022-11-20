import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import AboutLight from "./views/about-light";
import About from "./views/about";
import Home from "./views/home";
import HomeLight from "./views/home-light";
import PortfolioLight from "./views/portfolio-light";
import Contact from "./views/contact";
import ContactLight from "./views/contact-light";
import Portfolio from "./views/portfolio";
import Resume from "./views/resume";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AboutLight} exact path="/about-light" />
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={HomeLight} exact path="/home-light" />
        <Route component={PortfolioLight} exact path="/portfolio-light" />
        <Route component={Contact} exact path="/contact" />
        <Route component={ContactLight} exact path="/contact-light" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Resume} exact path="/resume" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
