import React from "react";
import {connect} from "react-redux";

class BenefitSectionHeader extends React.Component {
    render() {
        let packageSelected = this.props.selectedPackages.indexOf(this.props.benefitsData.packageId) > -1;
        return (
            <div className="benefits-section__header">
                <h2>{this.props.benefitsData.packageName} Benefits</h2>
                <div className="benefits-section__header-cb">
                <input type="checkbox" onChange={(e) => {this.props.addPackage(this.props.benefitsData.packageId, e.target.checked)}} checked={packageSelected}/>
                <label>Include</label>
                </div>
            </div>
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
        addPackage : (packageId, checked) => {
            var actionType = checked ? "ADD_PACKAGE" : "REMOVE_PACKAGE"
            dispatch({type : actionType, payload : packageId})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitSectionHeader)