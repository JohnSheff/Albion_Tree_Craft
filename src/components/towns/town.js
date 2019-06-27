import React, { Component } from "react";

import { Select } from "antd";

export const Fort = [
  { town: "Тетфорт", res: "Руда", image: "./Images/METALBAR.png"},
  { town: "Мартлок", res: "Кожа",image: "./Images/LEATHER.png"},
  { town: "Форт Стерлинг", res: "Дерево",image: "./Images/PLANKS.png"},
  { town: "Бриджвотч", res: "Камень",image: "./Images/STONEBLOCK.png"},
  { town: "Люмхурст", res: "Хлопок",image: "./Images/ClOTH.png"}
];


export default class Town extends Component {

  render() {
    const { valueTown, selectTown } = this.props
    return (
      <Select size="large" style={{ width: "100%" }} value={valueTown || "Выбор города"} onChange={(e) => { selectTown(e) }} >
        <Select.Option value={Fort[0].town}>{Fort[0].town}</Select.Option>
        <Select.Option value={Fort[1].town}>{Fort[1].town}</Select.Option>
        <Select.Option value={Fort[2].town}>{Fort[2].town}</Select.Option>
        <Select.Option value={Fort[3].town}>{Fort[3].town}</Select.Option>
        <Select.Option value={Fort[4].town}>{Fort[4].town}</Select.Option>
      </Select>
    );
  }
}
