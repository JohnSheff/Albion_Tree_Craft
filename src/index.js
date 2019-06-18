import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Checkbox, Row, Col, Input } from 'antd';
import Towm from "./components/towns/town";
import Tier from "./components/tiers/tier-resourse";
import Resourse from "./components/resourse/resourse";
// import {Fort} from "./components/towns"
import "./index.css";
import 'antd/dist/antd.css';


class App extends Component {
  state = {
    town: undefined,
    res: undefined,
    persent: 15
  };
  // valueSelect =(props) =>{
  // this.setState({
  // })

  // funcValueTowm =(props) =>{
  //   if(Fort.some(Element=> Element === JSON.stringify(Fort[0])) {
  //   }
  // }
  render() {
    return (
      <div className="main-page">
        <Row style={{ margin: "15px", border: "2px solid" }}>
          <Col span={8}>
            <Towm />
          </Col>
          <Col span={8}>
            <Resourse />
          </Col>
          <Col span={8}>
            <Tier />
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "280px" }}
              type="text"
              placeholder="Вводим количество"
            />
          </Col>
          <Col span={5}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "280px" }}
              type="text"
              placeholder="Результат подсчета готового ресурса"
              disabled
            />
          </Col>
          <Col span={2}>
            <Checkbox.Group style={{ width: 'auto' }}>
              <Checkbox value="Х">Раскрыть дерево</Checkbox>
            </Checkbox.Group>
          </Col>
          <Col span={5}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "280px" }}
              type="text"
              placeholder="результат подсчета обычного ресурса"
              disabled
            />
          </Col>
          <Col span={5}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "300px" }}
              type="text"
              placeholder="результат после переработки % от городов"
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
