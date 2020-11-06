import React, { Component } from 'react';
import { Button, Label, Row, Col, Card, CardTitle } from 'reactstrap';
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
                                values.ContactPerson_Email,
                                values.TransportationCompanyBuses[0].BusTypeID,
                                values.TransportationCompanyBuses[0].Brand,
                                values.TransportationCompanyBuses[0].YearModel,
                                values.TransportationCompanyBuses[0].Description,
                                values.TransportationCompanyBuses[0].Number_Of_Seats,
                                values.TransportationCompanyBuses[0].Number_Of_Seats_Per_Raw,
                                values.TransportationCompanyBuses[0].Total_Number_Of_Buses,
                                values.TransportationCompanyBuses[0].Notes,   
                                );
        alert(JSON.stringify(values))
        this.props.resetForm();
    }

    render(){
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    // console.log(this.props); 
    return(
        <div className="container px-4 py-4">
            <div className="row row-content">
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
                    onSubmit={(values) => this.handleSubmit(values)} onChange={(values)=> console.log(values.TransportationCompanyBuses[0])}>
                    <Card body>
                        <CardTitle tag="h5" className="text-info font-weight-bold">
                            Company Data
                        </CardTitle>
                        <Row className="form-group">
                            <Col md={2}>
                                <Label htmlFor="ID" md={20}>Company ID #</Label>
                                <Control.text model=".ID" id="ID" name="ID" 
                                    className="form-control" placeholder="Company ID #"
                                    validators={{
                                        required, minLength: minLength(1), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".ID"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be 1 number at least',
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
                                <Label htmlFor="City" md={20}>City</Label>
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
                            <Col md={2}>
                                <Button type="submit"
                                 style={{ backgroundColor: "#2774AE", color: "white", textAlign: "center",
                                          textDecoration: "none", display: "inline-block",
                                          fontSize: "16px", padding: "10px 55px 10px 55px"}}>
                                    ADD
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                        {/* Second Form */}
                    <Card body className="mt-3">
                        <CardTitle tag="h5" className="text-info font-weight-bold">
                            Bus Data
                        </CardTitle>
                        <Row className="form-group">
                            <Col md={2}>
                                <Label htmlFor="Vehicle Type 1" md={20}>Vehicle Type 1</Label>
                                <Control.select model=".TransportationCompanyBuses.0.BusTypeID" 
                                    name="BusTypeID" className="form-control">
                                    {this.props.vehicleTypes.map((vehicleType)=> { return (
                                    <option style={{textAlign: "center"}} key={vehicleType.ID}
                                            value={vehicleType.ID}>{vehicleType.Value}</option>
                                            );
                                        })
                                    }
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.BusTypeID"
                                    show="touched"
                                     />
                            </Col> 
                            <Col md={2}>
                                <Label htmlFor="Brand" md={20}>Brand</Label>
                                <Control.text model=".TransportationCompanyBuses.0.Brand" 
                                    id="Brand" name="Brand" 
                                    className="form-control" placeholder="Brand" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.Brand"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>
                            <Col md={2}>
                                <Label htmlFor="YearModel" md={20}>Year Model</Label>
                                <Control.text model=".TransportationCompanyBuses.0.YearModel" 
                                    id="YearModel" name="YearModel" 
                                    className="form-control" placeholder="YearModel" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.YearModel"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 numbers',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>
                            <Col md={6}>
                                <Label htmlFor="Description" md={20}>Description</Label>
                                <Control.text model=".TransportationCompanyBuses.0.Description" 
                                    id="Description" name="Description" 
                                    className="form-control" placeholder="Description"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.Description"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={3}>
                                <Label htmlFor="Number_Of_Seats" md={20}>Number Of Seats</Label>
                                <Control.text model=".TransportationCompanyBuses.0.Number_Of_Seats" 
                                    id="Number_Of_Seats" name="Number_Of_Seats" 
                                    className="form-control" placeholder="Number_Of_Seats"
                                    validators={{
                                        required, minLength: minLength(1), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.Number_Of_Seats"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be 1 number at least',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Number_Of_Seats_Per_Raw" md={20}>Number Of Seats Per Raw</Label>
                                <Control.text model=".TransportationCompanyBuses.0.Number_Of_Seats_Per_Raw" 
                                    id="Number_Of_Seats_Per_Raw" name="Number_Of_Seats_Per_Raw" 
                                    className="form-control" placeholder="Number Of Seats Per Raw"
                                    validators={{
                                        required, minLength: minLength(1), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.Number_Of_Seats_Per_Raw"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be 1 number at least',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Total_Number_Of_Buses" md={20}>Total Number Of Buses</Label>
                                <Control.text model=".TransportationCompanyBuses.0.Total_Number_Of_Buses" 
                                    id="Total_Number_Of_Buses" name="Total_Number_Of_Buses" 
                                    className="form-control" placeholder="Total Number Of Buses"
                                    validators={{
                                        required, minLength: minLength(1), maxLength: maxLength(15), isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.Total_Number_Of_Buses"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be 1 number at least',
                                        maxLength: ' Must be 15 numbers or less',
                                        isNumber: ' Must be a number'
                                    }} />
                            </Col>
                            <Col md={6}>
                                <Label htmlFor="Notes" md={20}>Notes</Label>
                                <Control.text model=".TransportationCompanyBuses.0.Notes" id="Notes" 
                                    name="Notes" placeholder="Notes" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".TransportationCompanyBuses.0.Notes"
                                    show="touched"
                                    messages={{
                                        required: ' Required',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={2}>
                                <Button type="submit" style={{ backgroundColor: "#2774AE", color: "white",
                                    textAlign: "center", textDecoration: "none", display: "inline-block",
                                    fontSize: "16px", padding: "10px 55px 10px 55px"}}>
                                    ADD
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
}  

export default AddTransportationCompanyComponent;