import React, { Component, Fragment } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Gallery,
} from "./components";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Fragment>
        <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
            <Switch>
              <Route path="/Gallery" exact component={Gallery} />
            </Switch>
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;