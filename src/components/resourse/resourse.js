import React, { Component } from "react";

import { Dropdown } from 'bootstrap-4-react';


export default class Resourse extends Component {
  render() {
    return (
      <div>

        <Dropdown className="col col-sm-3">
          <Dropdown.Button secondary id="dropdownMenuButton">Выбор Ресурсов</Dropdown.Button>
          <Dropdown.Menu aria-labelledby="dropdownMenuButton">
            <Dropdown.Item id="1">Ткань</Dropdown.Item>
            <Dropdown.Item id="2">Кожа</Dropdown.Item>
            <Dropdown.Item id="3">Руда</Dropdown.Item>
            <Dropdown.Item id="4">Дерево</Dropdown.Item>
            <Dropdown.Item id="5">Камень</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )


  }
}