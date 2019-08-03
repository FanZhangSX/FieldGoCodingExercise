import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export default class ItemFilter extends Component {
    onChange(filterStr) {
        this.props.transFilterStr(filterStr);
    }
    render() {
        return (
            <div>
                <InputGroup>
                    <Input onChange={(e) => this.onChange(`${e.target.value}`)}/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText>Filter</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}