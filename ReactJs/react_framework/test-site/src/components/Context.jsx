import React, {useState, useEffect, useContext, createContext} from 'react';
const NameContext = createContext();

const CompA = () => {
    const [nameState, setName] = useState({name: "John"});

    return (
        <NameContext.Provider value={nameState}>
            <CompB/>
        </NameContext.Provider>
    );
}

const CompB = () => {
    return (<CompC/>);
}

const CompC = () => {
    const nameObj = useContext(NameContext);
    console.log("In CompC")
    console.log(nameObj);
    return (<CompD/>);
}

const CompD = () => {
    const nameObj = useContext(NameContext);
    return (<div>{nameObj["name"]}</div>);
}

export default CompA;
