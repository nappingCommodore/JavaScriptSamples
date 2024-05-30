import React, { useRef } from "react";

const UncontrolledInput = ({ placeholder }) => {
  return <input defaultValue="" placeholder={placeholder} />;
};

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UncontrolledInput ref={emailRef} placeholder="Email" />
      <UncontrolledInput ref={passwordRef} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};
