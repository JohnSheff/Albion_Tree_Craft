import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col, Input } from "antd";
import InputValue from "./components/Inputs/input-value";
import Town from "./components/towns/town";
import Tier from "./components/tiers/tier-resourse";
import Resourse from "./components/resourses/resourse";
import { Fort } from "./components/towns/town";
import "antd/dist/antd.css";
import "./index.css";

class App extends Component {
  state = {
    town: undefined,
    res: undefined,
    persent: 15,
    tier: undefined,
    inputArr: [1],
    startValue: null
  };

  oneMoreArr = val => {
    if (this.state.inputArr.length < this.state.tier - 1) {
      if (val) {
        this.state.inputArr.push(val);
        this.setState({ inputArr: this.state.inputArr });
      } else if (this.state.inputArr.length === 1) {
        val = false;
      } else {
        this.setState({
          inputArr: this.state.inputArr.splice(
            this.state.inputArr.length - 1,
            1
          )
        });
      }
    }
  };

  firstValue = oneVal => {
    this.setState({ startValue: oneVal });
  };
  valueSelectTown = valTown => {
    this.setState({ town: valTown });
    this.valuePersent(valTown, undefined);
  };

  valueSelectRes = valRes => {
    this.setState({ res: valRes });
    this.valuePersent(undefined, valRes);
  };

  valueSelectTier = valTier => {

    this.setState({ tier: valTier });
    this.setState({ inputArr: [1] })

    // if (valTier < this.state.inputArr.length) {
    //   this.setState({
    //     inputArr: this.state.inputArr.splice(
    //       0,
    //       this.state.inputArr.length -
    //       (this.state.inputArr.length - valTier + 1)
    //     )
    //   });
    // } else{
    //   this.setState({ inputArr: [1] })
    // }
  };

  valuePersent = (townVal, resVal) => {
    if (
      Fort.some((
        element) => {
        const { town, res } = element
        return (
          JSON.stringify({ town, res }) ===
          JSON.stringify({
            town: townVal || this.state.town,
            res: resVal || this.state.res
          }))
      })
    ) {
      this.setState({ persent: 35 });
    } else {
      this.setState({ persent: 15 });
    }
  };

  render() {
    const { town, persent, res, tier, inputArr, startValue } = this.state;


    return (
      <div className="main-page">
        <Row
          style={{ border: "2px solid", padding: "10px", margin: 3 }}
          gutter={5}
        >
          <Col
            xs={24} sm={12} md={6}>
            <Town
              selectTown={this.valueSelectTown} valueTown={town} />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Input
              size="large"
              placeholder=""
              disabled
              style={{
                color:"red",
                textAlign: "center"
              }}
              value={"Бонус города " + persent + "%"}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Resourse selectRes={this.valueSelectRes} valueRes={res} />
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Tier selectTier={this.valueSelectTier} valueTier={tier} />
          </Col>
        </Row>
        {inputArr.map((val, index) => {
          return (
            <InputValue
              key={index}
              tierValue={tier - index}
              persentValue={persent}
              inputVal={startValue}
              fv={this.firstValue}
              oneMoreArr={this.oneMoreArr}
            />
          );
        })}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
