import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Checkbox, Row, Col, Input } from 'antd';
import Town from "./components/towns/town";
import Tier from "./components/tiers/tier-resourse";
import Resourse from "./components/resourses/resourse";
import { Fort } from "./components/towns/town"
import "./index.css";
import 'antd/dist/antd.css';



class App extends Component {


  valueSelectTown = (valTown) => {
    this.setState({ town: valTown })
    this.valuePersent(valTown, undefined)
  }

  valueSelectRes = (valRes) => {
    this.setState({ res: valRes })
    this.valuePersent(undefined, valRes)
  }

  valueSelectTier = (valTier) => {
    this.setState({ tier: valTier })

  }

  valuePersent = (town, res) => {
    if (Fort.some(element => JSON.stringify(element) === JSON.stringify({ town: town || this.state.town, res: res || this.state.res }))) {
      this.setState({ persent: 35 })
    }
    else {
      this.setState({ persent: 15 })
    }
  }

  state = {
    town: undefined,
    res: undefined,
    persent: 15,
    tier: undefined

  };
  render() {
    const { town, persent, res, tier } = this.state

    return (
      <div className="main-page">
        <Row style={{ border: "2px solid", padding: "10px", margin: 3 }} gutter={5}>
          <Col xs={12} sm={12} md={6}>
            <Town selectTown={this.valueSelectTown} valueTown={town} />
          </Col>
          <Col xs={8} sm={4} md={2}>
            <Input placeholder="" disabled style={{ backgroundColor: "#ffffff", color: "red", textAlign: "center"}} value={persent + " %"} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Resourse selectRes={this.valueSelectRes} valueRes={res} />
          </Col>

          <Col xs={12} sm={12} md={6}>
            <Tier selectTier={this.valueSelectTier} valueTier={tier} />
          </Col>
        </Row>
        <Row style={{ border: "2px solid", padding: "10px", margin: 3 }} gutter={5}>
          <Col xs={10} sm={10} md={6}>
            <Input
              className="form-control"
              // style={{ margin: "auto", width: "auto" }}
              type="text"
              placeholder="Вводим кол-во"
            />
          </Col>
          <Col xs={10} sm={4} md={3}>
            <Input
              className="form-control"
              // style={{ margin: "auto", width: "auto" }}
              type="text"
              placeholder="Цифра"
              disabled
            />
          </Col>
          <Col xs={10} sm={3} md={2}>
            <Checkbox.Group >
              <Checkbox value="Х"><br/>Раскрыть дерево</Checkbox>
            </Checkbox.Group>
          </Col>
          <Col xs={10} sm={4} md={3}>
            <Input
              className="form-control"
              // style={{ margin: "auto", width: "auto" }}
              type="text"
              placeholder="Цифра"
              disabled
            />
          </Col>
          <Col xs={10} sm={4} md={3}>
            <Input
              className="form-control"
              // style={{ margin: "auto", width: "auto" }}
              type="text"
              placeholder="Цифра"
              disabled
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
