import React, { Component } from 'react'
import '../css/placeholder.css';

export default class Placeholder extends Component {
  render() {
    return (
      <div className="placeholder">
            <h1>{this.props.message}</h1>
      </div>
    )
  }
}
