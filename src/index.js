import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form } from 'bootstrap-4-react';
import Towm from "./components/towns/town"
import Tier from "./components/tiers/tier-resourse"
import Resourse from "./components/resourse/resourse"

import "./index.css"

class App extends Component {

  render() {
    return (
      <div className="main-page">
        <div className="row" style={{ margin: "15px", border: "2px solid"  }}  >
        <Towm />
     
          <Resourse />
          <Tier />
         
        </div>
        <div className="row">
          <input
            class="form-control" style={{ margin: 30, width: "auto" }} type="text" placeholder="Вводим количество">
          </input>
          <div className="col col-sm-3">
          <input
            class="form-control" style={{ margin: 30, width: "" }} type="text" placeholder="Результат подсчета готового ресурса" disabled>
          </input>
            
          </div>
          <Form.Check>
            <Form.Checkbox id="defaultCheck1" />
            <Form.CheckLabel htmlFor="defaultCheck1">разв дерево</Form.CheckLabel>
          </Form.Check>
          <div className="col col-sm-3" >
            
          <input
            class="form-control" style={{ margin: 30, width: "" }} type="text" placeholder="результат подсчета обычного ресурса" disabled>
          </input>
          </div>
          <div className="col col-sm-3" >
                    <input
            class="form-control" style={{ margin: 30, width: "" }} type="text" placeholder="результат после переработки % от городов" disabled>
          </input>
          </div>
        </div>
      </div>
    );

  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(< App />, rootElement);
