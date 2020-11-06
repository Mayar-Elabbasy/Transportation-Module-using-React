import * as ActionTypes from './ActionTypes';

export const Countries = (state = { 
    isLoading: true,
    errMessage: null,
    countries: [] 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_Countries:
            return {...state, isLoading: false, errMessage: null,
                     countries: action.payload.Data
                    };

        case ActionTypes.Countries_LOADING:
            return {...state, isLoading: true, errMessage: null, countries: []};

        case ActionTypes.Countries_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, 
                    countries: []
                    };
        default:
            return state;
    }
      
};