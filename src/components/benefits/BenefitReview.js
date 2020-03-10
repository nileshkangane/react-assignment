import React, { Fragment } from "react";
import "./Review.scss";
import {connect} from "react-redux";
import ReviewSection from "./ReviewSection.js";
import beneftisData from "../../benefits.json";

class BenefitReview extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }
  
    handleBack(e) {
        window.location.href = "/";
    }

    render () {

        //prepare the data
        var selectedPackages = this.props.selectedPackages;
        var selectedBenefits = this.props.selectedBenefits; 

        beneftisData.map(pVal => {
            pVal.categories.map(cVal => {
                cVal.benefits.map(bVal => {
                    if(selectedBenefits.indexOf(bVal.benefitId) > -1 && selectedPackages.indexOf(pVal.packageId) > -1) {
                      pVal.selected = true;
                      cVal.selected = true;
                      bVal.selected = true;
                    }
                });   
            });  
        });

        let arrBenefits = beneftisData.filter( function (data) {
            return data.selected
        });

        return (
            <Fragment>
                <h1>
                  <span>Review</span>
                </h1>
                <section className="review-section">
                  <p>Review your selection before accepting</p>
                  <ul>
                  { arrBenefits.map( data => <ReviewSection key={data.packageId} packageData={data} /> ) }

                  </ul>
                </section>
                <div className="button-bar">
                  {/** Back button routes back to '/' which loads selection */}
                  <button onClick = {this.handleBack}>Back</button>
                  {/** Keep Accept button disabled */}
                  <button disabled>Accept</button>
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

export default connect(mapStateToProps)(BenefitReview)