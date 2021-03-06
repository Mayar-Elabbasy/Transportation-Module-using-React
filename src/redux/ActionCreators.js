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

export const addTransportationCompany = (transportationCompany) => ({
    type: ActionTypes.ADD_New_Transportation_Company, 
    payload : transportationCompany
});

export const postNewTransportationCompany = ( ID, Name, Address, Country, City, TelephoneNumber,
                                              ContactPerson_Name, ContactPerson_TelephoneNumber, 
                                              ContactPerson_Email, BusTypeID, Brand, YearModel,
                                              Description, Number_Of_Seats, 
                                              Number_Of_Seats_Per_Raw, Total_Number_Of_Buses,
                                              Notes ) => (dispatch) => {
    const newTransportationCompany = {
      ID: ID,
      Name: Name,
      Address: Address,
      Country: Country,
      City: City,
      TelephoneNumber: TelephoneNumber,
      ContactPerson_Name: ContactPerson_Name,
      ContactPerson_TelephoneNumber: ContactPerson_TelephoneNumber,
      ContactPerson_Email: ContactPerson_Email,
      TransportationCompanyBuses: [{
        BusTypeID: BusTypeID,
        Brand: Brand,
        YearModel: YearModel,
        Description: Description,
        Number_Of_Seats :Number_Of_Seats ,
        Number_Of_Seats_Per_Raw: Number_Of_Seats_Per_Raw,
        Total_Number_Of_Buses: Total_Number_Of_Buses,
        Notes: Notes 
      }]
    };
  
  return fetch(baseUrl + 'TransportationCompany/Add', {
      method: "POST",
      body: JSON.stringify(newTransportationCompany),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
            throw error;
    })
    .then(response => { dispatch(addTransportationCompany(response));
      alert(response)})
    .catch(error =>  { alert('Your Company could not be added\nError: '+error.message); });
  };

// ============================Countries=============================================

export const fetchCountries = () => (dispatch) => {

  dispatch(countriesLoading(true));

  return fetch(baseUrl + 'Lookup/GetCountries').then(response => {
    console.log(response);
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
      .then(countries => dispatch(addCountries(countries)))
      .catch(error => dispatch(countriesFailed(error.message)));
}
  
export const countriesLoading = () => ({
    type: ActionTypes.Vehicle_Types_LOADING
});

export const countriesFailed = (errMessage) => ({
    type: ActionTypes.Vehicle_Types_LOADING,
    payload: errMessage
});

export const addCountries = (countries) => ({
    type: ActionTypes.ADD_Countries,
    payload: countries
});

// ============================Cities=============================================

export const fetchCities = (countryId) => (dispatch) => {

  dispatch(citiesLoading(true));

  return fetch(baseUrl + `Lookup/GetCities?countryId=${countryId}`).then(response => {
    console.log(response);
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
      .then(cities => dispatch(addCities(cities)))
      .catch(error => dispatch(citiesFailed(error.message)));
}
  
export const citiesLoading = () => ({
    type: ActionTypes.Cities_LOADING
});

export const citiesFailed = (errMessage) => ({
    type: ActionTypes.Cities_LOADING,
    payload: errMessage
});

export const addCities = (cities) => ({
    type: ActionTypes.ADD_Cities,
    payload: cities
});

// ============================VehicleTypes=============================================

export const fetchVehicleTypes = () => (dispatch) => {

  dispatch(vehicleTypesLoading(true));

  return fetch(baseUrl + 'Lookup/GetVehicleType').then(response => {
    console.log(response);
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
      .then(vehicleTypes => dispatch(addVehicleTypes(vehicleTypes)))
      .catch(error => dispatch(vehicleTypesFailed(error.message)));
}

export const vehicleTypesLoading = () => ({
    type: ActionTypes.Vehicle_Types_LOADING
});

export const vehicleTypesFailed = (errMessage) => ({
    type: ActionTypes.Vehicle_Types_FAILED,
    payload: errMessage
});

export const addVehicleTypes = (vehicleTypes) => ({
    type: ActionTypes.ADD_Vehicle_Types,
    payload: vehicleTypes
});
