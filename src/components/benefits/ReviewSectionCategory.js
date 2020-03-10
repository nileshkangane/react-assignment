import React from "react";
import ReviewSectionBenefit from "./ReviewSectionBenefit.js"

export default class ReviewSectionCategory extends React.Component {
    render() {
        
        let arrBenefits = this.props.categoryData.benefits.filter( function (data) {
            return data.selected
        });

        return (
            <li>
            <div className="review-section__category-label">{this.props.categoryData.categoryName}</div>
            <ul>
            { arrBenefits.map( data => <ReviewSectionBenefit key={data.categoryId} benefitData={data} /> ) }
            </ul>
            </li>
        );
    }
}