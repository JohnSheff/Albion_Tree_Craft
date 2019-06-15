import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from 'bootstrap-4-react';

class App extends Component {

  render() {
    return ( 
        <div className="row" style={{margin: 30}} >
        <Dropdown className="col col-sm-2">
        <Dropdown.Button secondary id="dropdownMenuButton">Выбор Городов</Dropdown.Button>
        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
          <Dropdown.Item id="1">Город 1</Dropdown.Item>
          <Dropdown.Item id="2">Город 2</Dropdown.Item>
          <Dropdown.Item id="3">Город 3</Dropdown.Item>
          <Dropdown.Item id="4">Город 4</Dropdown.Item>
          <Dropdown.Item id="5">Город 5</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
ReactDOM.render( < App / > , rootElement);
