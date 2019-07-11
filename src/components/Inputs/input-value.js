import React, { Component } from "react";
import { Col, Row, Input, Switch, Layout } from "antd";

const { Content } = Layout;
export default class InputValue extends Component {
  funcSwitchTier = (tier) => {
    switch (tier) {
      case 8:
        return this.props.inputVal ? this.props.inputVal * 5 : "";
      case 7:
        return this.props.inputVal ? this.props.inputVal * 5 : "";
      case 6:
        return this.props.inputVal ? this.props.inputVal * 4 : "";
      case 5:
        return this.props.inputVal ? this.props.inputVal * 3 : "";
      case 4:
        return this.props.inputVal ? this.props.inputVal * 2 : "";
      case 3:
        return this.props.inputVal ? this.props.inputVal * 2 : "";
      case 2:
        return this.props.inputVal ? this.props.inputVal * 1 : "";
      default:
        break;
    }
  };

  render() {
    return (
      <Content>
        <Row style={{ padding: 5, margin: 5 }} gutter={5}>
          <Col xs={24} sm={24} md={24} lg={12}>
            {this.props.tierValue === 2 ? (null) : <>
              <Input
              
                style={{ textAlign: "right", }}
                prefix={this.props.tier === undefined ? ("Выбирите Тир продукта"
                ) : "Продукт T" + (this.props.tierValue - 1)}
                type="text"
                placeholder=""
                value={this.funcSwitchTier(this.props.tierValue)}
                disabled
              />
            </>}
          </Col>
          {this.props.tierValue === 2 ? (null) : <>
            <Col
              xs={24}
              md={24}
              lg={12}
              style={{ padding: "4px", textAlign: "center" }}>
              <Switch
                checkedChildren="Раскрытое дерево"
                unCheckedChildren="Свернутое дерево"
                onChange={(e) => {
                  this.props.oneMoreArr(e);
                }}
              />
            </Col>
          </>}
        </Row>
        <Row style={{ padding: 5, margin: 5 }} gutter={5}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Input
              
              style={{ textAlign: "right" }}
              type="text"
              prefix={this.props.tier === undefined ? (
                "Ресурс выбраного тира"
              ) : "Ресурс Т" + this.props.tierValue}
              placeholder=""
              value={this.props.inputVal}
              disabled
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Input
             
              style={{
                color: "#a8071a", textAlign: "right", fontSize: "20px"
              }}
              type="text"
              prefix="Бонус от города"
              placeholder=""
              value={this.props.persentValue && this.props.inputVal
                ? (this.props.persentValue / 100) * this.props.inputVal
                : ""}
              disabled
            />
          </Col>
        </Row>
      </Content>
    );
  }
}


