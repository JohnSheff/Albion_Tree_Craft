import React, { Component } from "react";

import { Dropdown } from 'bootstrap-4-react';


export default class Town extends Component {
  render() {
    return (
      <div>

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
      </div>
    )


  }
}