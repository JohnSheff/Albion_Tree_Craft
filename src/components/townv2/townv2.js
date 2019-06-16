import React, { Component } from "react";
import { InputGroup, Form } from 'bootstrap-4-react';


export default class Townv2 extends Component {
    render() {
        return (
            <div style={{margin: "10px"}}>
                <InputGroup mb="3">
                    <InputGroup.PrependText>процент возврата</InputGroup.PrependText>
                    <Form.CustomSelect>
                        <option selected>Выбор города</option>
                        <option value="1">Тетфорт</option>
                        <option value="2">Мартлок</option>
                        <option value="3">Форт Стерлинг</option>
                        <option value="4">Бриджвотч</option>
                        <option value="5">Люмхурст</option>
                    </Form.CustomSelect>
                </InputGroup>
            </div>
        )
    }
}