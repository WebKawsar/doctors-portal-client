import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Table } from 'react-bootstrap';
import "./Dashboard.css";



const Dashboard = () => {


    return (
        <Container>
            <Grid container>
                <Grid item md={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Prescription</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>01</td>
                            <td>02-10-2020</td>
                            <td>8:00 PM</td>
                            <td>Kawsar Ahmed</td>
                            <td>01733920943</td>
                            <td><button className="btn info">View</button></td>
                            <td>
                                <button className="btn secondary">Update</button>
                                <button className="btn warning">Edit</button>
                            </td>
                        </tbody>
                    </Table>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;