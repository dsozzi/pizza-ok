import React, { Component } from "react";
import '../css/filterField.css';
import logo from "../ok.gif";

export default class FilterField extends Component {

    state = {
        pizzaName: ''
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState(() => ({
            pizzaName: value
        }));
        this.props.onChange(value);
    }
    
    render() {
        const { handleChange, criteria, counter } = this.props;
        const label = criteria ? 'With:' : 'Without:'
        return (
            <div className="App-header filter-container">
                <img src={logo} className="App-logo" alt="logo" />
                <a href="#" onClick={handleChange}>{label}</a>
                <input
                    type="text"
                    id="pizza"
                    placeholder="Insert ingredient"
                    autoComplete="off"
                    value={this.state.pizzaName}
                    onChange={this.handleChange}
                    autoCorrect="off"
                    autoCapitalize="none"
                />
                <span className="App-counter">{counter}</span>
            </div>
        );
    }
}
