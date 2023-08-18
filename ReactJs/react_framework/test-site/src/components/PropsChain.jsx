import React, {useState, useEffect, useContext, createContext} from 'react';

const CompA = () => {
    const [name, setName] = useState("Alice");

    return (
            <CompB name={name}/>
    );
}

const CompB = (props) => {
    return (<CompC name={props.name}/>);
}

const CompC = (props) => {

    return (<CompD name={props.name}/>);
}

const CompD = (props) => {
    return (<div>{props.name}</div>);
}

export default CompA;
