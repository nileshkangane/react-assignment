import React from "react";
import BenefitSectionHeader from "./BenefitSectionHeader.js"
import BenefitSectionCategory from "./BenefitSectionCategory.js"

export default class BenefitSection extends React.Component {
    render() {
        return (
            <section className="benefits-section">
                <BenefitSectionHeader benefitsData={this.props.benefitsData} />
                <p>{this.props.benefitsData.packageDesc}</p>
                <div className="benefits-section__categories">
                    {this.props.benefitsData.categories.map(data => <BenefitSectionCategory key={data.categoryId} benefitsData={data} />)}
                </div>
        </section>
        );
    }
}