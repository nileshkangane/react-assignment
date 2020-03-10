import React from "react";
import BenefitSectionCategoryList from "./BenefitSectionCategoryList.js"

export default class BenefitSectionCategory extends React.Component {
    render() {
        return (
            <section className="benefits-section__category-section">
                <h3>{this.props.benefitsData.categoryName}</h3>
                <ul>
                    {this.props.benefitsData.benefits.map( data => <BenefitSectionCategoryList key={data.benefitId} benefitsData={data} /> )}
                </ul>
            </section>
        );
    }
}