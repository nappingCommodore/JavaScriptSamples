/* eslint-disable no-useless-constructor */
import React from 'react';

// Craeting input component using React Class Component 
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    handleClick = () => {
        this.setState({count: this.state.count+1});
    }

    render() {
        console.log("Render Called")
        return (
            <>
            <input type={this.props.type} placeholder={this.props.placeholder} style={{color: "red", backgroundColor: 'green', width: this.props.width, height: this.props.height}}/>
            <div>{this.state.count}</div>
            <button onClick={this.handleClick}>Class Comp button</button>
            </>
        );
    }
}

export default Input;
