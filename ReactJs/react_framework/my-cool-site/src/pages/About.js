// About page in reactJs
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import './About.css';

function About() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="About">
            {location.state.loginUser === false ? <Navigate to="/login" /> : null}
        <header className="About-header">
            <h1>About</h1>
            <p>
            About page
            </p>
            {/* <Link to="/">Home</Link> */}
        </header>
        </div>
    );
}

export default About;
