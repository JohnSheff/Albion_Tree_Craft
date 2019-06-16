import React, { Component } from "react";

import { Dropdown } from 'bootstrap-4-react';


export default class Tier extends Component {
  render() {
    return (
      <div style={{margin: "10px"}}>

        <Dropdown className="col col-sm-3">
          <Dropdown.Button secondary id="dropdownMenuButton">Выбор Тира Ресурсов</Dropdown.Button>
          <Dropdown.Menu aria-labelledby="dropdownMenuButton">
            <Dropdown.Item id="1">1 тир</Dropdown.Item>
            <Dropdown.Item id="2">2 тир</Dropdown.Item>
            <Dropdown.Item id="3">3 тир</Dropdown.Item>
            <Dropdown.Item id="4">4 тир</Dropdown.Item>
            <Dropdown.Item id="5">5 тир</Dropdown.Item>
            <Dropdown.Item id="6">6 тир</Dropdown.Item>
            <Dropdown.Item id="7">7 тир</Dropdown.Item>
            <Dropdown.Item id="8">8 тир</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )


  }
}