import React from 'react';

//{ children, onClick, width, height }
// THis is a functional component that takes in a prop called children
const Button = (props) => (
    <button onClick={props.onClick} style={{color: "red", backgroundColor: 'green', width: props.width, height: props.height}}>{`Here it is ${props.children}`}</button>
);

const Button2 = (props) => (   
    <button onClick={props.onClick} style={{color: "red", backgroundColor: 'green', width: props.width, height: props.height}}>{`Here it is ${props.children}`}</button>
);


export {Button, Button2}
