import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from 'bootstrap-4-react';
import Towm from "./components/towns/town"
import Tier from "./components/tiers/tier-resourse"
import Resourse from "./components/resourse/resourse"


class App extends Component {

  render() {
    return (
      <div className="row" style={{ margin: 30 }} >
        < Towm />
        <Resourse />
        <Tier />
      </div>
    );

  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(< App />, rootElement);
