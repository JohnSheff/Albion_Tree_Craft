import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form } from 'bootstrap-4-react';
import Towm from "./components/towns/town"
import Tier from "./components/tiers/tier-resourse"
import Resourse from "./components/resourse/resourse"
import Townv2 from "./components/townv2/townv2"

class App extends Component {

  render() {
    return (
      <div>
        <div className="row" style={{ margin: 30 }} >
          < Towm />
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
            class="form-control" style={{ margin: 30, width: "25%" }} type="text" placeholder="Вводим количество ресурста который хотим получить">

          </input>
          <div className="col col-sm-4">
    
            <div class="card">
              <div class="card-body">
           


                Результат подсчета готового ресурса(ткань, брусья, слитки и тд)
           </div>
      

            </div >
            
          </div>
          <Form.Check>
          <Form.Checkbox id="defaultCheck1" />
          <Form.CheckLabel htmlFor="defaultCheck1">развернуть дерево</Form.CheckLabel>
          </Form.Check>
          <div className="col col-sm-4" >
          <div class="card" >
         
            <div class="card-body">
              результат подсчета обычного ресурса (волокна, руда, дерево и тд )
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
