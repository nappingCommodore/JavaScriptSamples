// LOgin page for reactJs
import React from 'react';
import { Link, Form, useSubmit } from 'react-router-dom';
// import './Login.css';

function Login() {
    let submit = useSubmit();
    return (
        <div>
        <header>
            <h1>Login</h1>
            <p>
            Login page
            </p>
            <Form method='post' action='/' onChange={(e) => submit(e.currentTarget)}>
                <input type="text" placeholder="Enter your username" />
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
            </Form>
            {/* <Link to="/">Home</Link> */}
        </header>
        </div>
    );
}

export default Login;
