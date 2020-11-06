import React, { Component } from 'react';
import { Button, Label, Row, Col,} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
// import { baseUrl } from '../shared/baseUrl';
// import axios from 'axios';

class AddTransportationCompanyComponent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         countryId: '1',
    //         cities: []
    //     }
    // }

    handleSubmit = (values) =>{
        this.props.postNewTransportationCompany(values.ID, values.Name, values.Address, 
                                values.Country, values.City, values.TelephoneNumber,
                                values.ContactPerson_Name,values.ContactPerson_TelephoneNumber,
                                values.ContactPerson_Email, values.TransportationCompanyBuses,
                                );
        this.props.resetForm();
    }

    render(){
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    console.log(this.state); 
    return(
        <div className="container px-5 py-5">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Add New Transportation Company</h3>
                </div>
                <div className="col-12 col-md-12">
                    <Form model="newTransportationCompany" 
                    // onChange={(values)=> {
                    //     // this.props.fetchCities();
                    //     this.setState({
                    //             countryId: values.Country
                    //         }) 
                    //     axios.get(baseUrl + `Lookup/GetCities?countryId=${this.state.countryId}`)
                    //     .then(res => {
                    //             console.log(res.data.Data);
                    //             this.setState({ 
                    //                 cities: res.data.Data,
                    //             })
                                    
                    //         }).catch(error => {
                    //             console.log(error)
                    //         }); 
                    // }} 
                    onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col md={2}>
                                <Label htmlFor="ID" md={20}>Company ID #</Label>
                                <Control.text model=".ID" id="ID" name="ID" 
                                    className="form-control" placeholder="Company ID #"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".ID"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 numbers',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Name" md={20}>Company Name</Label>
                                <Control.text model=".Name" id="Name" name="Name" 
                                    className="form-control" placeholder="Company Name" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".Name"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Address" md={20}>Company Address</Label>
                                <Control.text model=".Address" id="Address" name="Address" 
                                    className="form-control" placeholder="Address" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".Address"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>
                            <Col md={2}>
                                <Label htmlFor="Country" md={20}>Country</Label>
                                <Control.select model=".Country" name="Country" className="form-control">
                                    {this.props.countries.map((country)=> { return (
                                    <option style={{textAlign: "center"}} key={country.ID}
                                            value={country.ID}>{country.Value}</option>
                                            );
                                        })
                                    }
                                </Control.select>
                            </Col>  
                            <Col md={2}>
                                <Label htmlFor="City" md={2}>City</Label>
                                <Control.select model=".City" name="City" className="form-control">
                                    {this.props.cities.map((city)=> { return (
                                        <option style={{textAlign: "center"}} key={city.ID}
                                                value={city.ID}>{city.Value}</option>
                                                );
                                            })
                                        }
                                </Control.select>
                            </Col>  
                        </Row>
                        <Row className="form-group">
                            <Col md={2}>
                                <Label htmlFor="TelephoneNumber" md={20}>Company Telephone</Label>
                                <Control.text model=".TelephoneNumber" id="TelephoneNumber" name="Company Telephone Num." 
                                    className="form-control" placeholder="Tel. number"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TelephoneNumber"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 numbers',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="ContactPerson_Name" md={10}>Contact Person Name</Label>
                                <Control.text model=".ContactPerson_Name" id="ContactPerson_Name" name="Contact Person Name" 
                                    className="form-control" placeholder="Contact Person Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".ContactPerson_Name"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>  
                            <Col md={3}>
                                <Label htmlFor="ContactPerson_TelephoneNumber" md={12}>Contact Person Telephone</Label>
                                <Control.text model=".ContactPerson_TelephoneNumber" id="ContactPerson_TelephoneNumber" 
                                    name="ContactPerson_TelephoneNumber" 
                                    className="form-control" placeholder="Contact Person Telephone Num."
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".ContactPerson_TelephoneNumber"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 numbers',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>                      
                            <Col md={4}>
                                <Label htmlFor="ContactPerson_Email" md={10}>Contact Person Email</Label>
                                <Control.text model=".ContactPerson_Email" id="ContactPerson_Email" name="ContactPerson_Email" 
                                    className="form-control" placeholder="Contact Person Email"  
                                    validators={{
                                        required, validEmail
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".ContactPerson_Email"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        validEmail: ' Invalid Email Address'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 30, offset: 2}}>
                                <Button type="submit" color="primary">
                                    ADD
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
}  

export default AddTransportationCompanyComponent;