// Homepage code in reactJs
import React, {useEffect} from 'react';
import { Link, redirect, useNavigate, Navigate  } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    // const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    let userJson = {loginUser: isLoggedIn}
    useEffect(() => {
        // redirect to login page
        // console.log("Calling redirect")
        // navigate('/login');
    });

    return (
        <div className="Homepage">
            {/* {isLoggedIn === false ? <Navigate to="/login" /> : null} */}
        <header className="Homepage-header">
            <h1>My Cool Site</h1>
            <p>
            Welcome to my cool site!
            </p>
            <Link to="/about" state={userJson}>About</Link>
        </header>
        </div>
    );
}

export default Homepage;
