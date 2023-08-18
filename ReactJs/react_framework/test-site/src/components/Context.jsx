import React, {useState, useEffect, useContext, createContext} from 'react';
const NameContext = createContext();

const CompA = () => {
    const [name, setName] = useState({name: "John"});

    return (
        <NameContext.Provider value={name}>
            <CompB/>
        </NameContext.Provider>
    );
}

const CompB = () => {
    return (<CompC/>);
}

const CompC = () => {

    return (<CompD/>);
}

const CompD = () => {
    const name = useContext(NameContext);
    return (<div>{name["name"]}</div>);
}

export default CompA;
