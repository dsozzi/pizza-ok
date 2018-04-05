import React, { Component } from "react";
import FilterField from "../components/FilterField";
import List from "../components/List";
import Placeholder from "../components/Placeholder";
import { getMenu } from "../utils/data";

class MenuContainer extends Component {
    state = {
        filterIncludeCriteria: true,
        menu: [],
        filteringText: ""
    };

    toggleCriteria = () => {
        this.setState(
            ({ filterIncludeCriteria }) => {
                return { filterIncludeCriteria: !filterIncludeCriteria };
            },
            () => this.filterList(this.state.filteringText)
        );
    };

    filterList = text => {
        const words = text.toLowerCase().split(" ");
        const menu = getMenu();
        let men =
            words.map(w => {
                return menu.filter(pizza => {
                    if (this.state.filterIncludeCriteria) {
                        return (
                            pizza.descrizione.toLowerCase().indexOf(w) !== -1 ||
                            pizza.id.indexOf(w) !== -1 ||
                            pizza.prezzo.indexOf(w) !== -1
                        )
                    } else {
                        return (
                            pizza.descrizione.toLowerCase().indexOf(w) === -1 &&
                            pizza.id.indexOf(w) === -1 &&
                            pizza.prezzo.indexOf(w) === -1
                        )
                    }
                });
            })[0] || menu;
        this.setState(state => {
            return { menu: men, filteringText: text };
        });
    };

    componentDidMount() {
        const m = getMenu();
        this.setState(state => {
            return { menu: m};
        });
    }

    render() {
        return (
            <main>
                <FilterField
                    criteria={this.state.filterIncludeCriteria}
                    handleChange={this.toggleCriteria}
                    onChange={this.filterList}
                    counter={this.state.menu.length}
                />
                {this.state.menu.length ? <List data={this.state.menu} /> : <Placeholder message={"No pizza found"} />}
            </main>
        );
    }
}

export default MenuContainer;
