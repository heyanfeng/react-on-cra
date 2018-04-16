import React from 'react';
import { Link } from 'react-router-dom';
import { testRedux } from './homeStore/actions';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.testRedux('Home');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.text}</h1>
        </header>
        <p className="App-intro">
          <Link to="/example01">example01</Link>
        </p>
        <p className="App-intro">
          <Link to="/example02">example02</Link>
        </p>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      text: state.homeModel.text
    };
  },
  {
    testRedux
  }
)(App);
