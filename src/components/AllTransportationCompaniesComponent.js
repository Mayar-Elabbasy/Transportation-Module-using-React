import React from 'react';
import { Table, Button } from 'reactstrap';
import { BsFillGearFill } from "react-icons/bs";

const AllTransportationCompaniesComponent = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <h1>Loading------</h1>
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
                        <tbody>
                            <tr key={transportationCompany.ID} style={{textAlign: "center"}}>
                                <th scope="row" style={{textAlign: "center"}}>
                                    {transportationCompany.ID}
                                </th>
                                <td>{transportationCompany.Name}</td>
                                <td>{transportationCompany.TotalFleet}</td>
                                <td style={{textAlign: "center"}}>
                                    <Button style={{ backgroundColor: "#2774AE", color: "white", 
                                                     textAlign: "center",textDecoration: "none",
                                                     display: "inline-block",fontSize: "16px",
                                                     padding: "10px 60px 10px 60px" }}> Edit 
                                    </Button>
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