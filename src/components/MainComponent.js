import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchTransportationCompanies, postNewTransportationCompany,
         fetchCountries, fetchCities, fetchVehicleTypes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import AllTransportationCompaniesComponent from './AllTransportationCompaniesComponent';
import AddTransportationCompanyComponent from './AddTransportationCompanyComponent';
import MainNavbar from '../shared/navbar';

const mapStateToProps = state => {
  // console.log(state.forms.newTransportationCompany.Country.value);
  return {
    transportationCompanies: state.transportationCompanies,
    countries: state.countries,
    cities: state.cities,
    vehicleTypes: state.vehicleTypes
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTransportationCompanies: () => { dispatch(fetchTransportationCompanies())}, 
  postNewTransportationCompany: (ID, Name, Address, Country, City, TelephoneNumber,
  ContactPerson_Name, ContactPerson_TelephoneNumber, ContactPerson_Email,
  BusTypeID, Brand,YearModel, Description, Number_Of_Seats, Number_Of_Seats_Per_Raw,
  Total_Number_Of_Buses, Notes) => 
                  dispatch(postNewTransportationCompany(ID, Name, Address, Country, City, TelephoneNumber,
  ContactPerson_Name, ContactPerson_TelephoneNumber, ContactPerson_Email,
  BusTypeID, Brand, YearModel, Description, Number_Of_Seats, Number_Of_Seats_Per_Raw, 
  Total_Number_Of_Buses, Notes)),
  resetForm: () => { dispatch(actions.reset('newTransportationCompany'))},
  fetchCountries: () => { dispatch(fetchCountries())}, 
  fetchCities: () => { dispatch(fetchCities(1))}, 
  fetchVehicleTypes: () => { dispatch(fetchVehicleTypes())}, 
});

class MainComponent extends Component {

  componentDidMount() {
    this.props.fetchTransportationCompanies();
    this.props.fetchCountries();
    this.props.fetchCities(1);
    this.props.fetchVehicleTypes();
    // this.props.change('newTransportationCompany.Country')
    // this.props.dispatch(change('Country'));
  }

  render() {
    // console.log(this.props.transportationCompanies.transportationCompanies);
    return (
      <React.Fragment>
        <div>
          <MainNavbar />
          <Switch>
            <Route exact path='/AddTransportationCompany' 
            component={() => <AddTransportationCompanyComponent 
            countries={this.props.countries.countries}
            cities={this.props.cities.cities}
            vehicleTypes={this.props.vehicleTypes.vehicleTypes}
            resetForm={this.props.resetForm} 
            postNewTransportationCompany={this.props.postNewTransportationCompany} />} />

            <Route path='/' component={() => <AllTransportationCompaniesComponent 
            transportationCompanies={this.props.transportationCompanies.transportationCompanies}
            isLoading={this.props.transportationCompanies.isLoading}
            errMess={this.props.transportationCompanies.errMessage} />} />

            <Route exact path='/AllTransportationCompanies' component={() => <AllTransportationCompaniesComponent 
            transportationCompanies={this.props.transportationCompanies.transportationCompanies}
            isLoading={this.props.transportationCompanies.isLoading}
            errMess={this.props.transportationCompanies.errMessage} />} />
            <Redirect to="/" />
          </Switch>
        </div> 
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));