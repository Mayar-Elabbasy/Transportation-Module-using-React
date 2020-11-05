import * as ActionTypes from './ActionTypes';

export const TransportationCompanies = (state = { 
    isLoading: true,
    errMessage: null,
    transportationCompanies: [] 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_Transportation_Company:
            return {...state, isLoading: false, errMessage: null,
                     transportationCompanies: action.payload.Data
                    };

        case ActionTypes.Transportation_Company_LOADING:
            return {...state, isLoading: true, errMessage: null, transportationCompanies: []};

        case ActionTypes.Transportation_Company_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, 
                    transportationCompanies: []
                    };
        default:
            return state;
    }
    
    
};