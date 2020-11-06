import * as ActionTypes from './ActionTypes';

export const Cities = (state = { 
    isLoading: true,
    errMessage: null,
    cities: [] 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_Cities:
            return {...state, isLoading: false, errMessage: null,
                       cities: action.payload.Data
                    };

        case ActionTypes.Cities_LOADING:
            return {...state, isLoading: true, errMessage: null, cities: []};

        case ActionTypes.Cities_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, 
                       cities: []
                    };
        default:
            return state;
    }
      
};