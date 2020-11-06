import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchTransportationCompanies, postNewTransportationCompany,
         fetchCountries, fetchCities } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import AllTransportationCompaniesComponent from './AllTransportationCompaniesComponent';
import AddTransportationCompanyComponent from './AddTransportationCompanyComponent';
import MainNavbar from '../shared/navbar';

const mapStateToProps = state => {
  // console.log(state);
  return {
    transportationCompanies: state.transportationCompanies,
    countries: state.countries,
    cities: state.cities,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTransportationCompanies: () => { dispatch(fetchTransportationCompanies())}, 
  postNewTransportationCompany: (ID, Name, Address, Country, City, TelephoneNumber,
  ContactPerson_Name, ContactPerson_TelephoneNumber, ContactPerson_Email,
  TransportationCompanyBuses) => 
                  dispatch(postNewTransportationCompany(ID, Name, Address, Country, City, TelephoneNumber,
  ContactPerson_Name, ContactPerson_TelephoneNumber, ContactPerson_Email,
  TransportationCompanyBuses)),
  resetForm: () => { dispatch(actions.reset('newTransportationCompany'))},
  fetchCountries: () => { dispatch(fetchCountries())}, 
  fetchCities: () => { dispatch(fetchCities(1))}, 
});

class MainComponent extends Component {

  componentDidMount() {
    this.props.fetchTransportationCompanies();
    this.props.fetchCountries();
    this.props.fetchCities(1);
  }

  render() {
    // console.log(this.props.transportationCompanies.transportationCompanies);
    return (
      <React.Fragment>
        <div>
          <MainNavbar />
          <Switch>
            <Route exact path='/AddTransportationCompanyComponent' 
            component={() => <AddTransportationCompanyComponent 
            countries={this.props.countries.countries}
            cities={this.props.cities.cities}
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