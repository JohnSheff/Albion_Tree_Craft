import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from 'bootstrap-4-react';
import Towm from "./components/towns/town"
class App extends Component {

  render() {
    return (
      <div className="row" style={{ margin: 30 }} >
        < Towm/>
        <Dropdown className="col col-sm-2">
          <Dropdown.Button secondary id="dropdownMenuButton">Dropdown button</Dropdown.Button>
          <Dropdown.Menu aria-labelledby="dropdownMenuButton">
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="col col-sm-2   ">
          <Dropdown.Button secondary id="dropdownMenuButton">Dropdown button</Dropdown.Button>
          <Dropdown.Menu aria-labelledby="dropdownMenuButton">
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );

  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(< App />, rootElement);
