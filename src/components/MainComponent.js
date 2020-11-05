import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchTransportationCompanies } from '../redux/ActionCreators';
import AllTransportationCompaniesComponent from './AllTransportationCompaniesComponent';
import MainNavbar from '../shared/navbar';

const mapStateToProps = state => {
  return {
    transportationCompanies: state.transportationCompanies,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTransportationCompanies: () => { dispatch(fetchTransportationCompanies())}, 
});

class MainComponent extends Component {

  componentDidMount() {
    this.props.fetchTransportationCompanies();
  }

  render() {
    // console.log(this.props.transportationCompanies.transportationCompanies);
    return (
      <React.Fragment>
        <div>
          <MainNavbar />
          <Switch>
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