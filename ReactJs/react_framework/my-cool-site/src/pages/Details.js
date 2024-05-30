// Details page in reactJs 
import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

function Details() {
    return (
        <div className="Details">
        <header className="Details-header">
            <h1>Details</h1>
            <p>
            Details page
            </p>
            {/* <Link to="/">Home</Link> */}
        </header>
        </div>
    );
}

export default Details;