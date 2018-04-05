import React, { Component } from "react";
import "./App.css";
import "./css/variables.css";
import "./css/font-awesome.min.css";
import "./css/pizzaItem.css";
import MenuContainer from "./containers/MenuContainer";
import FavouritesContainer from "./containers/FavouritesContainer";
import Footer from "./components/Footer";

class App extends Component {
    state = {
        currentView: "menu"
    };

    changeView = view => {
        this.setState(state => ({ currentView: view }));
    };

    render() {
        const { currentView } = this.state;
        return (
            <div className="App">
                {this.state.currentView === "menu" ? <MenuContainer /> : <FavouritesContainer/>}
                <Footer currentView={currentView} changeView={this.changeView} />
            </div>
        );
    }
}

export default App;
