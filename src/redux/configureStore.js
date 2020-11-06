import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TransportationCompanies } from './TransportationCompanies';
import { Countries } from './Countries';
import { Cities } from './Cities';
import { createForms } from 'react-redux-form';
import { InitialTransportationCompany } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            transportationCompanies: TransportationCompanies,
            countries: Countries,
            cities: Cities,
            ...createForms({
                newTransportationCompany: InitialTransportationCompany,
                // Country: '',
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}