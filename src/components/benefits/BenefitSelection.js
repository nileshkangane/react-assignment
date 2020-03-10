import React, { Fragment } from "react";
import "./Benefits.scss";
import beneftisData from "../../benefits.json";
import BenefitSection from "./BenefitSection.js";
import {connect} from "react-redux";

class BenefitSelection extends React.Component {
  constructor(props) {
      super(props);
      this.processReviewSelection = this.processReviewSelection.bind(this);
  }

  processReviewSelection(e) {
      window.location.href = "/review";
  }

  render(){
    var disableBtnReviewSelection =  this.props.selectedBenefits.length > 0 && this.props.selectedPackages.length > 0;
    return (
      
      <Fragment>
        <h1>
          <span>Select Benefits</span>
        </h1>

        { beneftisData.map( data => <BenefitSection key={data.packageId} benefitsData={data} /> ) }

        <div className="button-bar">
          <button onClick={this.processReviewSelection} disabled={!disableBtnReviewSelection}>Review  selection</button>
        </div>
      </Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      selectedBenefits : state.benefitsReducer.selectedBenefits,
      selectedPackages : state.benefitsReducer.selectedPackages
  }
};


export default connect(mapStateToProps)(BenefitSelection)