import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form } from 'bootstrap-4-react';
import Towm from "./components/towns/town"
import Tier from "./components/tiers/tier-resourse"
import Resourse from "./components/resourse/resourse"
import Townv2 from "./components/townv2/townv2"

import "./index.css"

class App extends Component {

  render() {
    return (
      <div className="main-page">
        <div className="row" style={{ margin: "15px", border: "2px solid"  }}  >
          < Towm  />
          <div class="card">
            <div class="card-body">
              Здесь будет менятся % при смене города
           </div>
          </div>
          <Resourse />
          <Tier />
          <Townv2 />
        </div>
        <div className="row">
          <input
            class="form-control" style={{ margin: 30, width: "auto" }} type="text" placeholder="Вводим количество">
          </input>
          <div className="col col-sm-2">
            <div class="card">
              <div class="card-body">
                Результат подсчета готового ресурса
           </div>
            </div >
          </div>
          <Form.Check>
            <Form.Checkbox id="defaultCheck1" />
            <Form.CheckLabel htmlFor="defaultCheck1">разв дерево</Form.CheckLabel>
          </Form.Check>
          <div className="col col-sm-2" >
            <div class="card" >
              <div class="card-body">
                результат подсчета обычного ресурса
           </div>
            </div>
          </div>
          <div className="col col-sm-2" >
            <div class="card" >
              <div class="card-body">
                результат ресурса после переработки в разным % от городов
           </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(< App />, rootElement);
