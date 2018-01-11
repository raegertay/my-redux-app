import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
  }

  render() {
    return (
      <div>
        <h4>Results:</h4>
        <p>Angular: {this.store.getState().angular}</p>
        <p>React: {this.store.getState().react}</p>
        <p>Vuejs: {this.store.getState().vuejs}</p>
      </div>
    )
  }

}

export default Results;
