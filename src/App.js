import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions'
import './App.css';
import Results from './components/results'

class App extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular())
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact())
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs())
  }

  render() {
    return (
      <div>
        <h4>Vote for your favourite front-end framework!</h4>
        <a href='#' onClick={this.handleVoteAngular}>Angular</a>&nbsp;
        <a href='#' onClick={this.handleVoteReact}>React</a>&nbsp;
        <a href='#' onClick={this.handleVoteVuejs}>Vuejs</a>
        <hr></hr>
        <Results store={this.store}/>
      </div>
    );
  }
}

export default App;
