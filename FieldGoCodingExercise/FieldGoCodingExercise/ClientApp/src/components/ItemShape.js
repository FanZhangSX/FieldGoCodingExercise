import React, { Component } from 'react';
import GetShape from '../Functions/GetShape';

export default class ItemSharp extends Component {
    render() {
        let shape = GetShape(this.props.item);
        return (
            <div>{shape}</div>
        );
    }
}