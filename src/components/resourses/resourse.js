import React, { Component } from "react";

import { Select } from "antd";
import { Fort } from "../towns/town";


export default class Resourse extends Component {
  render() {
    const { valueRes, selectRes } = this.props
    return (
      <Select   value={valueRes || "Выбор ресурса"} style={{ width: "100%",}} onChange={e => { selectRes(e) }}>
        <Select.Option style={{ backgroundColor: "#9254de", color: "#f6ffed" }} value={Fort[0].res}><img src={Fort[0].image} alt="" width="24px"></img> {Fort[0].res}</Select.Option>
        <Select.Option style={{ backgroundColor: "#40a9ff", color: "#f6ffed" }} value={Fort[1].res}><img src={Fort[1].image} alt="" width="24px"></img> {Fort[1].res}</Select.Option>
        <Select.Option style={{ backgroundColor: "FFFFFF", color: "#262626" }} value={Fort[2].res}><img src={Fort[2].image} alt="" width="24px"></img> {Fort[2].res}</Select.Option>
        <Select.Option style={{ backgroundColor: "#ffc53d", color: "#262626" }} value={Fort[3].res}><img src={Fort[3].image} alt="" width="24px"></img> {Fort[3].res}</Select.Option>
        <Select.Option style={{ backgroundColor: "#bae637", color: "#262626" }} value={Fort[4].res}><img src={Fort[4].image} alt="" width="24px"></img> {Fort[4].res}</Select.Option>

      </Select>

    );
  }
}
