import React, { Component } from "react";

import { Select } from "antd";

export const Fort = [
  { town: "Тетфорт", res: "Руда", image: "./Images/ORE.png" },
  { town: "Мартлок", res: "Кожа", image: "./Images/HIDE.png" },
  { town: "Форт Стерлинг", res: "Дерево", image: "./Images/WOOD.png" },
  { town: "Бриджвотч", res: "Камень", image: "./Images/ROCK.png" },
  { town: "Люмхурст", res: "Хлопок", image: "./Images/FIBER.png" }
];


export default class Town extends Component {

  render() {
    const { valueTown, selectTown } = this.props
    return (
      <Select style={{ width: "100%", color: "red"}} value={valueTown || "Выбор города"} onChange={(e) => { selectTown(e) }} >
        <Select.Option style={{ backgroundColor: "#9254de", color: "#f6ffed" }} value={Fort[0].town}>{Fort[0].town}</Select.Option>
        <Select.Option style={{ backgroundColor: "#40a9ff", color: "#f6ffed" }} value={Fort[1].town}>{Fort[1].town}</Select.Option>
        <Select.Option style={{ backgroundColor: "FFFFFF", color: "#262626" }} value={Fort[2].town}>{Fort[2].town}</Select.Option>
        <Select.Option style={{ backgroundColor: "#ffc53d", color: "#262626" }} value={Fort[3].town}>{Fort[3].town}</Select.Option>
        <Select.Option style={{ backgroundColor: "#bae637", color: "#262626" }} value={Fort[4].town}>{Fort[4].town}</Select.Option>
      </Select>
    );
  }
}

