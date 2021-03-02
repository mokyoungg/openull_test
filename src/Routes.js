import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartTableContainer from "./components/ChartTableContainer";
import Album from "./components/Album";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ChartTableContainer} />
          <Route exact path="/album/:id" component={Album} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
