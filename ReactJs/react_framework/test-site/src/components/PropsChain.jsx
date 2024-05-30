import React, {useState, useEffect, useContext, createContext} from 'react';

const CompA = () => {
    const [name, setName] = useState("Alice");

    return (
            <CompB propsName={name} propsCount={0}/>
    );
}

const CompB = (props) => {
    console.log(props.propsCount);
    return (<CompC name={props.propsName}/>);
}

const CompC = (props) => {

    return (<CompD name={props.name}/>);
}

const CompD = (props) => {
    return (<div>{props.name}</div>);
}

export default CompA;

