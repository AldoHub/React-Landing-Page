import React, { Component } from 'react';
import Main from "./components/main";
import Header from "./components/header";
import Nav from "./components/nav";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
