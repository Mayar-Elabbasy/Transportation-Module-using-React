import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchTransportationCompanies = () => (dispatch) => {

  dispatch(transportationCompaniesLoading(true));

  return fetch(baseUrl + 'TransportationCompany/All').then(response => {
    if (response.ok) {
      return response;
    } else {
      let error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
    error => {
          let errMessage = new Error(error.message);
          throw errMessage;
    }).then(response => response.json())
      .then(transportationCompanies => dispatch(addTransportationCompanies(transportationCompanies)))
      .catch(error => dispatch(transportationCompaniesFailed(error.message)));
}

export const transportationCompaniesLoading = () => ({
    type: ActionTypes.Transportation_Company_LOADING
});

export const transportationCompaniesFailed = (errMessage) => ({
    type: ActionTypes.Transportation_Company_LOADING,
    payload: errMessage
});

export const addTransportationCompanies = (transportationCompanies) => ({
    type: ActionTypes.ADD_Transportation_Company,
    payload: transportationCompanies
});


