import React, { Component } from "react";
import FavouriteToggler from "./FavouriteToggler";

export default class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="list-container">
                <ul>
                    {data.map(item => (
                        <li key={item.id} className="pizza-container">
                            <FavouriteToggler item={item} />
                            <h2 className="pizza-id">{item.id}</h2>
                            <p className="pizza-desc">{item.descrizione}</p>
                            <h3 className="pizza-price">{item.prezzo}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
