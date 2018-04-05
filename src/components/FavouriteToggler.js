import React, { Component } from "react";
import Fa from 'react-fontawesome';
import { saveFavourite, removeFavourite } from "../utils/data";

export default class FavouriteToggler extends Component {
    state = {
        favourite: false
    };

    handleClick = e => {
        const { id } = this.props.item;

        if (this.state.favourite) {
            removeFavourite(id);
        } else {
            saveFavourite(id);
        }
        this.setState(state => {
            return {
                favourite: !state.favourite
            };
        });
    };

    componentDidMount() {
        this.setState(state => ({ favourite: this.props.item.favourite }));
    }

    render() {
        return (
            <a href="#" onClick={this.handleClick}>
                <Fa name={this.state.favourite ? "heart" : "heart-o"} className="fav-icon" />
            </a>
        );
    }
}
