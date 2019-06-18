import React, { Component } from "react";
import { Select } from "antd";
// import { InputGroup, Form } from "bootstrap-4-react";



export default class Tier extends Component {
  render() {
    const { valueTier } = this.props
    return (

      <Select style={{ width: "100%" }} value={valueTier || "Выбор тира ингридиента"} onChange={(e) => { this.props.selectTier(e) }} >
        <Select.Option value={1}>1 Тир</Select.Option>
        <Select.Option value={2}>2 Тир</Select.Option>
        <Select.Option value={3}>3 Тир</Select.Option>
        <Select.Option value={4}>4 Тир</Select.Option>
        <Select.Option value={5}>5 Тир</Select.Option>
        <Select.Option value={6}>6 Тир</Select.Option>
        <Select.Option value={7}>7 Тир</Select.Option>
        <Select.Option value={8}>8 Тир</Select.Option>
      </Select>

    );
  }
}
