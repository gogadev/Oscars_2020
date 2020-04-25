import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import Nominees from "./pages/nominees/Nominees";

import ActorList from "./data/actors";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actors: ActorList,
    };
  }

  render() {
    const { actors} = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <Nominees actors={actors} />
      </React.Fragment>
    );
  }
}

export default App;
