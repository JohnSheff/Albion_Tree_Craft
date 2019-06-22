import React, { Component } from "react";
import { Col, Row, Input, Checkbox } from "antd";

export default class InputValue extends Component {
  funcSwitchTier = tier => {
    switch (tier) {
      case 8:
        return this.props.inputVal ? this.props.inputVal * 5 : "исходный Тир";
      case 7:
        return this.props.inputVal ? this.props.inputVal * 5 : "исходный Тир";
      case 6:
        return this.props.inputVal ? this.props.inputVal * 4 : "исходный Тир";
      case 5:
        return this.props.inputVal ? this.props.inputVal * 3 : "исходный Тир";
      case 4:
        return this.props.inputVal ? this.props.inputVal * 2 : "исходный Тир";
      case 3:
        return this.props.inputVal ? this.props.inputVal * 2 : "исходный Тир";
      case 2:
        return this.props.inputVal ? this.props.inputVal * 1 : "исходный Тир";
      default:
        break;
    }
  };

  render() {
    return (
      <Row
        style={{ border: "2px solid", padding: "10px", margin: 3 }}
        gutter={5}
      >
        <Col xs={10} sm={10} md={6}>
          <Input
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Вводим кол-во"
            value={this.props.inputVal}
            onInput={e => {
              this.props.fv(e.target.value);
            }}
          />
        </Col>
        {this.props.tierValue !== 1 ? (
          <>
            <Col xs={10} sm={4} md={3}>
              <Input
                className="form-control"
                // style={{ margin: "auto", width: "auto" }}
                type="text"
                placeholder="исходный Тир"
                value={this.funcSwitchTier(this.props.tierValue)}
                disabled
              />
            </Col>
            <Col xs={10} sm={3} md={2}>
              <Checkbox
                onChange={e => {
                  this.props.oneMoreArr(e.target.checked);
                }}
              >
                <br />
                Раскрыть дерево
              </Checkbox>
            </Col>
          </>
        ) : null}

        <Col xs={10} sm={4} md={3}>
          <Input
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Рес нужного тира"
            value={this.props.inputVal}
            disabled
          />
        </Col>
        <Col xs={10} sm={4} md={3}>
          <Input
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="после % возвр"
            value={
              this.props.persentValue && this.props.inputVal
                ? (this.props.persentValue / 100) * this.props.inputVal
                : "после % возвр"
            }
            disabled
          />
        </Col>
      </Row>
    );
  }
}
