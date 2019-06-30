import React, { Component } from "react";
import { Col, Row, Input, Switch } from "antd";

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
      <Row
        style={{ border: "2px solid", padding: "10px", margin: 3 }}
        gutter={5}>
        <Col sm={24} md={12} lg={6}>
          <Input
            style={{

              textAlign: "center",
              width: "100%",
            }}
            className="form-control"
            type="text"
            placeholder="Вводим количество"
            value={this.props.inputVal}
            onInput={(e) => {
              this.props.fv(e.target.value);
            }}
          />
        </Col>
        <Col sm={24} md={12} lg={4}>
          <Input
            style={{

              textAlign: "center",
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Выбирите Тир продукта"
            value={this.funcSwitchTier(this.props.tierValue)}
            disabled
          />
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={4}
          style={{ padding: "4px", textAlign: "center" }}>
          <Switch

            checkedChildren="Раскрытое дерево"
            unCheckedChildren="Свернутое дерево"
            onChange={(e) => {
              this.props.oneMoreArr(e);
            }}
          />
        </Col>
        <Col sm={24} md={12} lg={5}>
          <Input
            style={{
              textAlign: "center",
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Рес нужного тира"
            value={this.props.inputVal}
            disabled
          />
        </Col>
        <Col sm={24} md={24} lg={5}>
          <Input
            style={{
              color: "#a8071a",
              textAlign: "center",
              fontSize:"20px"
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Бонус от города"
            // addonBefore="Бонус от города"
            value={
              this.props.persentValue && this.props.inputVal
                ? (this.props.persentValue / 100) * this.props.inputVal
                : ""
            }
            disabled
          />
        </Col>
      </Row>
    );
  }
}
