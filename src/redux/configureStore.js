import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TransportationCompanies } from './TransportationCompanies';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            transportationCompanies: TransportationCompanies,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}