/* eslint-disable no-useless-constructor */
import React from 'react';

// Craeting input component using React Class Component 
class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} style={{color: "red", backgroundColor: 'green', width: this.props.width, height: this.props.height}}/>
        );
    }
}

export default Input;