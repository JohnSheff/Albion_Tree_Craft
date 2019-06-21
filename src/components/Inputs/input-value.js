import React, { Component } from "react";
import { Col, Row, Input, Checkbox } from "antd";



export default class InputValue extends Component {
    state = {
        val1: undefined,
        val2: undefined,
        val3: undefined,
        val4: undefined,
        val5: undefined,
        val6: undefined,
        val7: undefined,
        val8: undefined,

    }
    inputVal = (inVal) => {
        this.setState({ val1: inVal })
    }



    funcSwitchTier = (tier) => {

        switch (tier) {
            case 8:
                return this.state.val1 ? this.state.val1 * 5 : "исходный Тир"
            case 7:
                return this.state.val1 ? this.state.val1 * 5 : "исходный Тир"
            case 6:
                return this.state.val1 ? this.state.val1 * 4 : "исходный Тир"
            case 5:
                return this.state.val1 ? this.state.val1 * 3 : "исходный Тир"
            case 4:
                return this.state.val1 ? this.state.val1 * 2 : "исходный Тир"
            case 3:
                return this.state.val1 ? this.state.val1 * 2 : "исходный Тир"
            case 2:
                return this.state.val1 ? this.state.val1 * 1 : "исходный Тир"
            default:
                break;
        }
    }

    render() {

        return (
            <Row style={{ border: "2px solid", padding: "10px", margin: 3 }} gutter={5}>
                <Col xs={10} sm={10} md={6}>
                    <Input
                        className="form-control"
                        // style={{ margin: "auto", width: "auto" }}
                        type="text"
                        placeholder="Вводим кол-во"
                        onInput={(e) => { this.inputVal(e.target.value) }}
                    />
                </Col>
                {this.props.tierValue !== 1 ?
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
                            <Checkbox.Group >
                                <Checkbox
                                    value={1}><br />Раскрыть дерево</Checkbox>
                            </Checkbox.Group>
                        </Col>
                    </>
                    : null}


                <Col xs={10} sm={4} md={3}>
                    <Input
                        className="form-control"
                        // style={{ margin: "auto", width: "auto" }}
                        type="text"
                        placeholder="Рес нужного тира"
                        value={this.state.val1}
                        disabled
                    />
                </Col>
                <Col xs={10} sm={4} md={3}>
                    <Input
                        className="form-control"
                        // style={{ margin: "auto", width: "auto" }}
                        type="text"
                        placeholder="после % возвр"
                        value={this.props.persentValue && this.state.val1 ? this.props.persentValue / 100 * this.state.val1 : "после % возвр"}
                        disabled
                    />
                </Col>
            </Row>
        )

    }
}
