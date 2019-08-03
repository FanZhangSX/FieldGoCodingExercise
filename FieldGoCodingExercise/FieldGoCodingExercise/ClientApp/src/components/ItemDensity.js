import React, { Component } from 'react';
import GetDensity from '../Functions/GetDensity';

export default class ItemDensity extends Component {
    render() {
        const density = GetDensity(this.props.item);
        return (<div>{Math.round(density * 100000000) / 100000000}</div>)
    }
}