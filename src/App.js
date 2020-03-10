import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BenefitSelection from "./components/benefits/BenefitSelection";
import BenefitReview from "./components/benefits/BenefitReview";
import "./styles.scss"; 

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={BenefitSelection} />
              <Route path="/review" component={BenefitReview} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      )      
    }
}

const NotFound = () => <h1>Page Not Found</h1>;