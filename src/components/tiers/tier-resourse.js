import React, { Component } from "react";
import { Select } from "antd";
// import { InputGroup, Form } from "bootstrap-4-react";



export default class Tier extends Component {
  render() {
    const { valueTier, selectTier } = this.props
    return (
      <Select size="large" style={{ width: "100%" }} value={valueTier || "Выбор тир продукта"} onChange={(e) => { selectTier(e) }}   >
        <Select.Option style={{backgroundColor:"#846c5d"}}value={2}>2 Тир</Select.Option>
        <Select.Option style={{backgroundColor:"#526a40"}}value={3}>3 Тир</Select.Option>
        <Select.Option style={{backgroundColor:"#517891"}}value={4}>4 Тир</Select.Option>
        <Select.Option style={{backgroundColor:"#903e36"}}value={5}>5 Тир</Select.Option>
        <Select.Option style={{backgroundColor:"#d8874a"}}value={6}>6 Тир</Select.Option>
        <Select.Option style={{backgroundColor:"#e4c55e"}}value={7}>7 Тир</Select.Option>
        <Select.Option style={{backgroundColor:"#cfcfcf"}}value={8}>8 Тир</Select.Option>
      </Select>
    );
  }
}
