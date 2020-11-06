import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TransportationCompanies } from './TransportationCompanies';
import { Countries } from './Countries';
import { createForms } from 'react-redux-form';
import { InitialTransportationCompany } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            transportationCompanies: TransportationCompanies,
            countries: Countries,
            ...createForms({
                newTransportationCompany: InitialTransportationCompany
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}