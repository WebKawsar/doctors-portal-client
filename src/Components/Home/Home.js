import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>This is Home Componenet</h2>

            
            <Link to="/addAppointment">Get Appointment</Link>
            <br/>
            
            <a href="/login">Go to Login page</a>
        </div>
    );
};

export default Home;