const iState = {
    selectedBenefits : [],
    selectedPackages : []
};

export const benefitsReducer = (state = iState, action) => {
    switch(action.type) {

        case "ADD_BENEFIT":
            return {
                ...state,
                selectedBenefits : [...state.selectedBenefits, action.payload]
            };
            break;

        case "ADD_PACKAGE":
            return {
                ...state,
                selectedPackages : [...state.selectedPackages, action.payload]
            };
            break;
        
        case "REMOVE_BENEFIT" : 
            var obj = {
                ...state
            };
            obj.selectedBenefits = obj.selectedBenefits.filter(function( val ) {
                return val !== action.payload;
            });
            return obj;

            break;
        
        case "REMOVE_PACKAGE" : 
            var obj = {
                ...state
            };
            obj.selectedPackages = obj.selectedPackages.filter(function( val ) {
                return val !== action.payload;
            });
            return obj;

            break;    

        default :
            return state;
    }
};