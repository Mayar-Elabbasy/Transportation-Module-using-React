import React from 'react';
import { Table, Button } from 'reactstrap';
import { BsFillGearFill, BsPlus } from "react-icons/bs";
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';

const AllTransportationCompaniesComponent = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessage) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.transportationCompanies.errMessage}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return ( 
            <div className="container">
                <div className="row mt-1">
                    <Link to={`/AddTransportationCompany`}>
                        <Button className="mt-4" 
                                style={{ backgroundColor: "#2774AE", color: "white",
                                         fontWeight: "bold", textAlign: "center",
                                         textDecoration: "none",fontSize: "18px",
                                         display: "inline-block", 
                                         padding: "10px 60px 10px 60px" }}> 
                        <span style={{marginRight: "20px"}}><BsPlus size={30} /></span>
                                                     Add Transportations 
                        </Button>
                    </Link>
                    <Table striped style={{ padding: "10px", marginTop: "20px" }}>
                        <thead style={{backgroundColor: "#2774AE" , color: "white"}}>
                            <tr style={{textAlign: "center"}}>
                                <th>Company ID #</th>
                                <th>Company Name</th>
                                <th>Total Fleet</th>
                                <th><h6 style={{textAlign: "center"}}>
                                    <BsFillGearFill /></h6>
                                </th>
                            </tr>
                        </thead>
                        {props.transportationCompanies.map((transportationCompany)=> { return (
                        <tbody key={transportationCompany.ID}>
                            <tr style={{textAlign: "center"}}>
                                <th scope="row" style={{textAlign: "center"}}>
                                    {transportationCompany.ID}
                                </th>
                                <td>{transportationCompany.Name}</td>
                                <td>{transportationCompany.TotalFleet}</td>
                                <td style={{textAlign: "center"}}>
                                    <Link to={`/EditTransportationCompany/${transportationCompany.ID}`}>
                                        <Button style={{ backgroundColor: "#2774AE", color: "white", 
                                                         textAlign: "center",textDecoration: "none",
                                                         display: "inline-block",fontSize: "16px",
                                                         padding: "10px 60px 10px 60px" }}> Edit 
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                            );
                        })
                        }
                    </Table>
                </div>
            </div>
        );
    }

export default AllTransportationCompaniesComponent;