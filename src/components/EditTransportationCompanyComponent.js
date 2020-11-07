import React, { useState, useEffect } from 'react';
import { Button, Label, Row, Col, Card, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';

const EditTransportationCompanyComponent = props => {
    const [state, setState] = useState({
        ...props,
        ID: '',
        Name: '',
        Address: '',
        Country: '1',
        City: '1',
        TelephoneNumber: '',
        ContactPerson_Name: '',
        ContactPerson_TelephoneNumber: '',
        ContactPerson_Email: '',
    TransportationCompanyBuses: [{
      BusTypeID: '',
      Brand: '',
      YearModel: '',
      Description: '',
      Number_Of_Seats: '',
      Number_Of_Seats_Per_Raw: '',
      Total_Number_Of_Buses: '',
      Notes: '',
    }]
    });
    console.log(state);

    useEffect(() => {
            axios.get(baseUrl+'/TransportationCompany/GetById?id='+props.match.params.id).then(res => {
                // console.log(res.data.data.category_name);
                setState({ 
                    ID: res.data.Data.ID,
                    Name: res.data.Data.Name,
                    Address: res.data.Data.Address,
                    Country: res.data.Data.Country,
                    City: res.data.Data.City,
                    TelephoneNumber: res.data.Data.TelephoneNumber,
                    ContactPerson_Name: res.data.Data.ContactPerson_Name,
                    ContactPerson_TelephoneNumber: res.data.Data.ContactPerson_TelephoneNumber,
                    ContactPerson_Email: res.data.Data.ContactPerson_Email,
                TransportationCompanyBuses: [{
                    BusTypeID: res.data.Data.TransportationCompanyBuses[0].BusTypeID,
                    Brand: res.data.Data.TransportationCompanyBuses[0].Brand,
                    YearModel: res.data.Data.TransportationCompanyBuses[0].YearModel,
                    Description: res.data.Data.TransportationCompanyBuses[0].Description,
                    Number_Of_Seats: res.data.Data.TransportationCompanyBuses[0].Number_Of_Seats,
                    Number_Of_Seats_Per_Raw: res.data.Data.TransportationCompanyBuses[0].Number_Of_Seats_Per_Raw,
                    Total_Number_Of_Buses: res.data.Data.TransportationCompanyBuses[0].Total_Number_Of_Buses,
                    Notes: res.data.Data.TransportationCompanyBuses[0].Notes,
                }]
            })
            console.log(res.data.Data);
            }).catch(error => {
                // console.log(error)
            }); 
    },[props.match.params.id]);

    const handleChange = ({target}) =>{
        setState({ ...state, [target.name]: target.value }); 
    };
console.log(state);
   
    let onSubmit = e => {
        e.preventDefault();
        axios.put(baseUrl+'/TransportationCompany/Update',{
            "ID": state.ID,
            "Name": state.Name,
            "Address": state.Address,
            "Country": state.Country,
            "City": state.City,
            "TelephoneNumber": state.TelephoneNumber,
            "ContactPerson_Name": state.ContactPerson_Name,
            "ContactPerson_TelephoneNumber": state.ContactPerson_TelephoneNumber,
            "ContactPerson_Email": state.ContactPerson_Email,
                "TransportationCompanyBuses": [
                // {
                //     "BusTypeID": state.TransportationCompanyBuses[0].BusTypeID,
                //     "Brand": state.TransportationCompanyBuses[0].Brand,
                //     "YearModel": state.TransportationCompanyBuses[0].YearModel,
                //     "Description": state.TransportationCompanyBuses[0].Description,
                //     "Number_Of_Seats": state.TransportationCompanyBuses[0].Number_Of_Seats,
                //     "Number_Of_Seats_Per_Raw": state.TransportationCompanyBuses[0].Number_Of_Seats_Per_Raw,
                //     "Total_Number_Of_Buses": state.TransportationCompanyBuses[0].Total_Number_Of_Buses,
                //     "Notes": state.TransportationCompanyBuses[0].Notes,
                // }
            ]
        })
        .then(res => {
            // console.log(res.data);
           alert("Successfully Updated");
        //    props.resetForm();
        
        }).catch(error => {
        
        }); 
        // location.reload();
    };

    onSubmit = onSubmit.bind(this);

    return(
        <div className="container px-4 py-4">
            <div className="row row-content">
                <div className="col-12 col-md-12">
                    <form model="newTransportationCompany"  
                    onSubmit={onSubmit}>
                    <Card body>
                        <CardTitle tag="h5" className="text-info font-weight-bold">
                            Company Data
                        </CardTitle>
                        <Row className="form-group">
                            <Col md={2}>
                                <Label htmlFor="ID" md={20}>Company ID #</Label>
                                <input model=".ID" id="ID" name="ID" defaultValue={state.ID} disabled={true}
                                    className="form-control" placeholder="Company ID #" onChange={handleChange} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Name" md={20}>Company Name</Label>
                                <input type="text" id="Name" name="Name" defaultValue={state.Name}
                                    className="form-control" placeholder="Company Name" onChange={handleChange} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Address" md={20}>Company Address</Label>
                                <input type="text" id="Address" name="Address" 
                                    className="form-control" placeholder="Address" defaultValue={state.Address} 
                                    onChange={handleChange} />
                            </Col>
                            <Col md={2}>
                                <Label htmlFor="Country" md={20}>Country</Label>
                                <select model=".Country" name="Country" className="form-control" onChange={handleChange}>
                                    {props.countries.map((country)=> { return (
                                    <option style={{textAlign: "center"}} key={country.ID}
                                            value={country.ID}>{country.Value}</option>
                                            );
                                        })
                                    }
                                </select>
                            </Col>  
                            <Col md={2}>
                                <Label htmlFor="City" md={20}>City</Label>
                                <select model=".City" name="City" className="form-control" onChange={handleChange}>
                                    {props.cities.map((city)=> { return (
                                        <option style={{textAlign: "center"}} key={city.ID}
                                                value={city.ID}>{city.Value}</option>
                                                );
                                            })
                                        }
                                </select>
                            </Col>  
                        </Row>
                        
                        <Row className="form-group">
                            <Col md={2}>
                                <Label htmlFor="TelephoneNumber" md={20}>Company Telephone</Label>
                                <input type="text" id="TelephoneNumber" name="Company Telephone Num." 
                                    className="form-control" placeholder="Tel. number" defaultValue={state.TelephoneNumber}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="ContactPerson_Name" md={10}>Contact Person Name</Label>
                                <input model=".ContactPerson_Name" id="ContactPerson_Name" name="Contact Person Name" 
                                    className="form-control" placeholder="Contact Person Name" 
                                    defaultValue={state.ContactPerson_Name} onChange={handleChange} />
                            </Col>  
                            <Col md={3}>
                                <Label htmlFor="ContactPerson_TelephoneNumber" md={12}>Contact Person Telephone</Label>
                                <input model=".ContactPerson_TelephoneNumber" id="ContactPerson_TelephoneNumber" 
                                    name="ContactPerson_TelephoneNumber" defaultValue={state.ContactPerson_TelephoneNumber}
                                    className="form-control" placeholder="Contact Person Telephone Num."
                                    onChange={handleChange} />
                            </Col>                      
                            <Col md={4}>
                                <Label htmlFor="ContactPerson_Email" md={10}>Contact Person Email</Label>
                                <input model=".ContactPerson_Email" id="ContactPerson_Email" name="ContactPerson_Email" 
                                    className="form-control" placeholder="Contact Person Email" 
                                    defaultValue={state.ContactPerson_Email} onChange={handleChange} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={2}>
                                <Button type="submit"
                                 style={{ backgroundColor: "#2774AE", color: "white", textAlign: "center",
                                          textDecoration: "none", display: "inline-block",
                                          fontSize: "16px", padding: "10px 55px 10px 55px"}}>
                                    Edit
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
                                <select onChange={handleChange} name="BusTypeID" className="form-control">
                                    {props.vehicleTypes.map((vehicleType)=> { return (
                                    <option style={{textAlign: "center"}} key={vehicleType.ID}
                                            value={vehicleType.ID}>{vehicleType.Value}</option>
                                            );
                                        })
                                    }
                                </select>
                            </Col> 
                            <Col md={2}>
                                <Label htmlFor="Brand" md={20}>Brand</Label>
                                <input model=".TransportationCompanyBuses.0.Brand" 
                                    id="Brand" name="Brand" defaultValue={state.TransportationCompanyBuses[0].Brand}
                                    className="form-control" placeholder="Brand" onChange={handleChange} />
                            </Col>
                            <Col md={2}>
                                <Label htmlFor="YearModel" md={20}>Year Model</Label>
                                <input model=".TransportationCompanyBuses.0.YearModel" 
                                    id="YearModel" name="YearModel" defaultValue={state.TransportationCompanyBuses[0].YearModel}
                                    className="form-control" placeholder="YearModel" onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label htmlFor="Description" md={20}>Description</Label>
                                <input model=".TransportationCompanyBuses.0.Description" 
                                    id="Description" name="Description" 
                                    className="form-control" placeholder="Description" onChange={handleChange}
                                    defaultValue={state.TransportationCompanyBuses[0].Description} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={3}>
                                <Label htmlFor="Number_Of_Seats" md={20}>Number Of Seats</Label>
                                <input model=".TransportationCompanyBuses.0.Number_Of_Seats" 
                                    id="Number_Of_Seats" name="Number_Of_Seats" 
                                    className="form-control" placeholder="Number_Of_Seats"
                                    defaultValue={state.TransportationCompanyBuses[0].Number_Of_Seats} 
                                    onChange={handleChange} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Number_Of_Seats_Per_Raw" md={20}>Number Of Seats Per Raw</Label>
                                <input model=".TransportationCompanyBuses.0.Number_Of_Seats_Per_Raw" 
                                    id="Number_Of_Seats_Per_Raw" name="Number_Of_Seats_Per_Raw" 
                                    className="form-control" placeholder="Number Of Seats Per Raw"
                                    defaultValue={state.TransportationCompanyBuses[0].Number_Of_Seats_Per_Raw} 
                                    onChange={handleChange} />
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="Total_Number_Of_Buses" md={20}>Total Number Of Buses</Label>
                                <input model=".TransportationCompanyBuses.0.Total_Number_Of_Buses" 
                                    id="Total_Number_Of_Buses" name="Total_Number_Of_Buses" 
                                    className="form-control" placeholder="Total Number Of Buses"
                                    defaultValue={state.TransportationCompanyBuses[0].Total_Number_Of_Buses}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label htmlFor="Notes" md={20}>Notes</Label>
                                <input model=".TransportationCompanyBuses.0.Notes" id="Notes" 
                                    name="Notes" placeholder="Notes" className="form-control"
                                    defaultValue={state.TransportationCompanyBuses[0].Notes} 
                                    onChange={handleChange} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={2}>
                                <Button type="submit" style={{ backgroundColor: "#2774AE", color: "white",
                                    textAlign: "center", textDecoration: "none", display: "inline-block",
                                    fontSize: "16px", padding: "10px 55px 10px 55px"}}>
                                    Edit
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                    </form>
                </div>
            </div>
        </div>
    );
//     }
}  

export default EditTransportationCompanyComponent;
