import React from "react";

import {connect} from "react-redux";

class BenefitSectionCategoryList extends React.Component {
    render() {
        let benefitSelected = this.props.selectedBenefits.indexOf(this.props.benefitsData.benefitId) > -1;
        return (
            <li>
                <input type="checkbox" onChange={(e) => {this.props.addBenefit(this.props.benefitsData.benefitId, e.target.checked)}} checked={benefitSelected}/>
                <label>{this.props.benefitsData.benefitName}</label>
            </li>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        selectedBenefits : state.benefitsReducer.selectedBenefits,
        selectedPackages : state.benefitsReducer.selectedPackages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBenefit : (benefitId, checked) => {
            var actionType = checked ? "ADD_BENEFIT" : "REMOVE_BENEFIT";
            dispatch({type : actionType, payload : benefitId})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitSectionCategoryList)