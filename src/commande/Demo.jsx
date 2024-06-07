import React, { Component } from 'react';

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            name: "mufij",
            age: 21,
            city: "amrapar"
        };
    }

    handleChangeName = () => {
        this.setState({
            name: "mohmadmufij"
        });
    }

    handleAgeIncrement = () => {
        this.setState(add => ({
            age: add.age + 1
            
        }));
    }
    handleAgeDecriment= () => {
        this.setState(baad => ({
            age: baad.age -1
            
        }));
    }
   
    render() {
        return (
            <div>
                <h2>State</h2>
                <p>My name: {this.state.name}</p>
                <button onClick={this.handleChangeName}>Change Name</button>
                <p>My age: {this.state.age}</p>
                <button onClick={this.handleAgeIncrement}>Increment Age</button>
                <button onClick={this.handleAgeDecriment}>decriment age</button>
                <p>Address: {this.state.city}</p>
            </div>
        );
    }
}
