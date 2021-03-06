import React, { Component } from "react";
import { Col, Row, Input,  Layout } from "antd";

const { Content } = Layout;
export default class InputValue extends Component {
  funcSwitchTier = tier => {
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
    const {
      tierValue,
      tier,
      inputVal,
      persentValue,
       } = this.props;

    return (
      <Content>
        <Row style={{ padding: 4, margin: 4 }} gutter={4}>
          <Col xs={12} sm={12} md={12} lg={12}>
            {this.props.tierValue === 2 ? null : (
              <>
                <Input
                  style={{ textAlign: "right" }}
                  prefix={
                    tier === undefined
                      ? "Ресурс выбраного тира" 
                      : "Ресурс Т" + (tierValue - 1) 
                  }
                  type="text"
                  placeholder=""
                  value={this.funcSwitchTier(tierValue)}
                  disabled
                />
              </>
            )}
          </Col>
                  </Row>
        <Row style={{ padding: 4, margin: 4 }} gutter={4}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Input
              style={{ textAlign: "right" }}
              type="text"
              prefix={
                tier === undefined
                  ? "Выбирите Тир продукта"
                  : "Продукт T" + tierValue
              }
              placeholder=""
              value={inputVal}
              disabled
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Input
              style={{
                color: "#a8071a",
                textAlign: "right",
               
              }}
              type="text"
              prefix="Бонус от города"
              placeholder=""
              value={
                persentValue && inputVal ? ((persentValue / 100) * inputVal).toFixed(2) : ""
              }
              disabled
            />
          </Col>
        </Row>
      </Content>
    );
  }
}
