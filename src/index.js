import React, { Component } from "react";
import ReactDOM from "react-dom";
import lodash from "lodash";
import { Row, Col, Input, Layout, Button, Slider } from "antd";
import InputValue from "./components/Inputs/input-value";
import Town from "./components/towns/town";
import Tier from "./components/tiers/tier-resourse";
import Resourse from "./components/resourses/resourse";
import { Fort } from "./components/towns/town";
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    town: undefined,
    res: undefined,
    persent: 15,
    tier: undefined,
    startValue: null,
    slider: 1,
    maxSlider: undefined
  };

  // oneMoreArr = val => {

  // };

  sliderFunc = val => {
    this.setState({ slider: val });
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
    this.setState({ maxSlider: valTier - 1 });
    this.setState({ slider: 1 });
    this.setState({ tier: valTier });
    this.setState({ inputArr: [1] });
  };

  valuePersent = (townVal, resVal) => {
    if (
      Fort.some(element => {
        const { town, res } = element;
        return (
          JSON.stringify({ town, res }) ===
          JSON.stringify({
            town: townVal || this.state.town,
            res: resVal || this.state.res
          })
        );
      })
    ) {
      this.setState({ persent: 35 });
    } else {
      this.setState({ persent: 15 });
    }
  };

  render() {
    const { town, persent, res, tier, startValue } = this.state;
    // console.log(inputArr);
    return (
      <Layout className="main-page">
        <Header />
        <Content>
          <Row style={{ padding: 4, margin: 4 }} gutter={4}>
            <Col xs={12} sm={12} md={12}>
              <Town selectTown={this.valueSelectTown} valueTown={town} />
            </Col>
            <Col xs={12} sm={12} md={12}>
              <Input
                placeholder=""
                disabled
                style={{ color: "rgba(241, 64, 64, 0.897)"  }}
                value={"Бонус города " + persent + "%"}
              />
            </Col>
          </Row>
          <Row style={{ padding: 4, margin: 4 }} gutter={4}>
            <Col xs={12} sm={12} md={12}>
              <Resourse selectRes={this.valueSelectRes} valueRes={res} />
            </Col>
            <Col xs={12} sm={12} md={12}>
              <Tier selectTier={this.valueSelectTier} valueTier={tier} />
            </Col>
          </Row>
          <Row style={{ padding: 4, margin: 4 }} gutter={4}>
            <Col xs={12} md={12} lg={12}>
              <Input
                style={{ width: "100%" }}
                type="text"
                placeholder="Вводим количество"
                value={startValue}
                onInput={e => {
                  this.firstValue(e.target.value);
                }}
              />
            </Col>

            {town !== undefined &&
              res !== undefined &&
              startValue !== null &&
              tier !== undefined ? (
                tier === 2 ? (
                  <>
                    <Col
                      xs={12}
                      md={12}
                      lg={12}
                      style={{ padding: "7px", textAlign: "center" }}
                    >
                      <Slider
                        disabled
                        checkedChildren="Свернуть"
                        unCheckedChildren="Раскрыть"
                      />
                    </Col>
                  </>
                ) : (
                    <>
                      <Col
                        xs={12}
                        md={12}
                        lg={12}
                        style={{ padding: "7px", textAlign: "center" }}
                      >
                        <Slider
                        
                          tooltipVisible
                          range={false}
                          value={this.state.slider}
                          min={1}
                          max={this.state.maxSlider}
                          checkedChildren="Свернуть"
                          unCheckedChildren="Раскрыть"
                          onChange={e => {
                            this.sliderFunc(e);
                            // this.oneMoreArr(e);
                          }}
                        />
                      </Col>
                    </>
                  )
              ) : null}
          </Row>
          {lodash.range(this.state.slider).map((val, index) => {
            return (
              <InputValue
                key={index}
                tierValue={tier - index}
                persentValue={persent}
                inputVal={startValue}
                oneMoreArr={this.oneMoreArr}
                tier={tier}
                town={town}
                res={res}
              />
            );
          })}
        </Content>
        <Footer>
          <Button
            size="large"
            style={{ float: "right" }}
            type="link"
            icon="github"
            href="https://github.com/JohnSheff"
          />
        </Footer>
      </Layout>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
