import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransportationCompanies } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    ID: state.ID,
    Name: state.Name,
    TotalFleet: state.TotalFleet,
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
    return (
      <React.Fragment>
        <div>
          <h4>Test ( Check Transportation Companies in console ^_^ )</h4>
        </div> 
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);