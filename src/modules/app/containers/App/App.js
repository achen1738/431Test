import React, { Component } from "react";
import logo from "../../../../logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { getSomeState } from "../../selectors";

class App extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    someState: getSomeState(state)
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);

// export default App;
