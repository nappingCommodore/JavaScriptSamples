import React, {useState, useEffect, useRef} from 'react';
import CustomHook from './CustomHook';

//{ children, onClick, width, height }
// THis is a functional component that takes in a prop called children

const Button = (props) => {
    return (<button onClick={props.onClick} style={{color: "red", backgroundColor: 'green', width: props.width, height: props.height}}>{`Here it is ${props.children}`}</button>);
};

const Button2 = (props) => (   
    <button onClick={props.onClick} style={{color: "red", backgroundColor: 'green', width: props.width, height: props.height}}>{`Here it is ${props.children}`}</button>
);

const Text = (props) => {
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(["John", "Doe", "Jane", "Alice"]);
    const [data] = CustomHook(count);

    const inputRef = useRef("");

    useEffect(() => {
        // console.log("useEffect called");
        // return () => {
        //     console.log("useEffect cleanup");
        // }
        // inputRef.current = count;
        inputRef.current.style.backgroundColor = "red";
        // setTimeout(() => {
        //     setCount(count + 1);
        // }, 1000);
    },[count]);

    let countVar = null;
    if (count > 5) {
        countVar = <div>{count}</div>;
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(event);
        setCount(count + 1);
    }

    function handleClickNew(event) {
        event.preventDefault();
        console.log(event);
        setCount(count - 1);
    }

    var nameVar = names.map((name, index) => <div key={index}>{name}</div>);

    return (
        <>
        {(count>5) ? <div>{data}</div>: null}
        {/* {countVar} */}
        <button onClick={handleClick}>{`Click me to incraese count`}</button>
        <button onClick={handleClickNew}>{`Click me to decrease count`}</button>
        {/* {names.map((name, index) => <div id={index}>{name}</div>)} */}
        {/* {nameVar} */}
        {/* <div>Last Count was : {inputRef.current}</div> */}
        <input type="text" ref={inputRef} placeholder="Enter your name"/>
        </>
    );
}

export {Button, Button2, Text}
