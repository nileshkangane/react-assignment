import React from "react";

export default class ReviewSectionBenefit extends React.Component {
    render() {
        return (    
            <li className="review-section__benefit-label">{this.props.benefitData.benefitName}</li>
        );
    }
}