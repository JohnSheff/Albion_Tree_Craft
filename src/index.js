import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form } from "antd";
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

valueSelect =(props) =>{
this.setState({

})
  
}
  // funcValueTowm =(props) =>{
  //   if(Fort.some(Element=> Element === JSON.stringify(Fort[0])) {

  //   }
  // }
  render() {
    return (
      <div className="main-page">
        <div className="row" style={{ margin: "15px", border: "2px solid" }}>
          <Towm />
          <Resourse />
          <Tier />
        </div>
        <div className="row">
          <input
            className="form-control"
            style={{ margin: 30, width: "auto" }}
            type="text"
            placeholder="Вводим количество"
          />
          <div className="col col-sm-2  ">
            <input
              className="form-control"
              style={{ margin: 30, width: "" }}
              type="text"
              placeholder="Результат подсчета готового ресурса"
              disabled
            />
          </div>
          <Form.Check>
            <Form.Checkbox id="defaultCheck1" />
            <Form.CheckLabel htmlFor="defaultCheck1">
              разв дерево
            </Form.CheckLabel>
          </Form.Check>
          <div className="col col-sm-2">
            <input
              className="form-control"
              style={{ margin: 30, width: "" }}
              type="text"
              placeholder="результат подсчета обычного ресурса"
              disabled
            />
          </div>
          <div className="col col-sm-2">
            <input
              className="form-control"
              style={{ margin: 30, width: "" }}
              type="text"
              placeholder="результат после переработки % от городов"
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
