import React, { Component } from "react";
import Fa from 'react-fontawesome';
export default class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <a
                    href="#"
                    onClick={this.props.changeView.bind(null, "menu")}
                    className={this.props.currentView === "menu" ? "active" : ""}
                >
                    <Fa name="cutlery"/>    
                    Menu
                </a>
                <a
                    href="#"
                    onClick={this.props.changeView.bind(null, "favourite")}
                    className={this.props.currentView === "favourite" ? "active" : ""}
                >
                <Fa name="heart"/>      
                    Favourites
                </a>
            </footer>
        );
    }
}
