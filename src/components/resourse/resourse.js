import React, { Component } from "react";

import { Select } from "antd";
import { Fort } from "../towns/town";


export default class Resourse extends Component {
  render() {
    const { valueRes } = this.props
    return (

        <Select value={valueRes || "Выбор ресурса"} style={{ width: "100%" }} onChange={e => { this.props.selectRes(e)}}>
          <Select.Option value={Fort[0].res}>{Fort[0].res}</Select.Option>
          <Select.Option value={Fort[1].res}>{Fort[1].res}</Select.Option>
          <Select.Option value={Fort[2].res}>{Fort[2].res}</Select.Option>
          <Select.Option value={Fort[3].res}>{Fort[3].res}</Select.Option>
          <Select.Option value={Fort[4].res}>{Fort[4].res}</Select.Option>
        </Select>
     
    );
  }
}
