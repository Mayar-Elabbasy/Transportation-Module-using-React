import * as ActionTypes from './ActionTypes';

export const VehicleTypes = (state = { 
    isLoading: true,
    errMessage: null,
    vehicleTypes: [] 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_Vehicle_Types:
            return {...state, isLoading: false, errMessage: null,
                     vehicleTypes: action.payload.Data
                    };

        case ActionTypes.Vehicle_Types_LOADING:
            return {...state, isLoading: true, errMessage: null, vehicleTypes: []};

        case ActionTypes.Vehicle_Types_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, 
                    vehicleTypes: []
                    };
        default:
            return state;
    }
      
};