import React from "react";
import ReviewSectionCategory from "./ReviewSectionCategory.js"

export default class ReviewSection extends React.Component {
    render() {
        
        let arrCategories = this.props.packageData.categories.filter( function (data) {
            return data.selected
        });

        return (
            <li>
                <div className="review-section__package-label">{this.props.packageData.packageName} benefits</div>
                <ul>
                    { arrCategories.map( data => <ReviewSectionCategory key={data.categoryId} categoryData={data} /> ) }
                </ul>
            </li>
        );
    }

}