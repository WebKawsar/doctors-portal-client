import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { UserContext } from '../../App';



const useStyles = makeStyles(() => ({
    root: {
        
        
    },


  }));

const Appointments = () => {

    const classes = useStyles();
    const [date, setDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [patientAppoint, setPatientAppoint] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:8080/appointments?email=${loggedInUser.email}`)
        .then(response => response.json())
        .then(data => setPatientAppoint(data))

    }, [])

    return (

            <Container>
                <Grid container className={classes.intro}>
                    <Grid item  md={6}>
                        <Calendar
                            className="calender"
                            onChange={setDate}
                            value={date}
                            prev2Label={ null }
                            next2Label={ null }
                        />
                    </Grid>
                    <Grid item  md={6}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Schedule</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patientAppoint.map(appoint => <tr key={appoint._id}>
                                                                        <td>#</td>
                                                                        <td>{appoint.name}</td>
                                                                        <td>{appoint.email}</td>
                                                                        <td>{appoint.time}</td>
                                                                        <td><button className="btn-primary">{appoint.type}</button></td>
                                                                    </tr>)
                                }
                                
                            </tbody>
                        </Table>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Appointments;