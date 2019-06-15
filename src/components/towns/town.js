import React, { Component } from "react";

import { Dropdown } from 'bootstrap-4-react';


export default class Town extends Component {
  render() {
    return (
      <div>
        <Dropdown className="col col-sm-2">
          <Dropdown.Button secondary id="dropdownMenuButton">Выбор Городов</Dropdown.Button>
          <Dropdown.Menu aria-labelledby="dropdownMenuButton">
            <Dropdown.Item id="1">Тетфорт</Dropdown.Item>
            <Dropdown.Item id="2">Мартлок</Dropdown.Item>
            <Dropdown.Item id="3">Форт Стерлинг</Dropdown.Item>
            <Dropdown.Item id="4">Бриджвотч</Dropdown.Item>
            <Dropdown.Item id="5">Люмхурст</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )


  }
}