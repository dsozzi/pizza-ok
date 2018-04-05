import React, { Component } from "react";
import Placeholder from "../components/Placeholder";
import List from "../components/List";
import Fa from "react-fontawesome";
import { getFavourites } from "../utils/data";

export default class FavouritesContainer extends Component {
    state = {
        menu: []
    };

    componentDidMount() {
        const m = getFavourites();
        this.setState(state => {
            return { menu: m };
        });
    }
    render() {
        return (
            <main>
                <header className="App-header">
                    <Fa name="heart" className="fav-icon" />
                    <h3>Favourites</h3>
                </header>
                {this.state.menu.length ? (
                    <List data={this.state.menu} />
                ) : (
                    <Placeholder message={"No favourites"} />
                )}
            </main>
        );
    }
}
