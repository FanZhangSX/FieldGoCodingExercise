import React, { Component } from "react";
import { Col, Row, Badge, Alert} from 'reactstrap';
import ItemDensity from './ItemDensity';
import ItemShape from './ItemShape';

export default class Detail extends Component {

    render() {
        const Item = this.props.selectedItem;
        if (Item === null || Item === undefined) {
            return (<div></div>);
        }
        return (
            <div>
                <Row><h1>Detail of <Badge color="secondary">{Item.name}</Badge></h1></Row>
                <Alert color="light">
                    <Row>
                        <Col><h3><span></span></h3></Col>
                    </Row>
                </Alert>
                <Row>
                    <Col sm={{ size: 4 }}><h3><Badge color="primary">Height</Badge></h3></Col>
                    <Col sm={{size:8}}><h3>{Item.height}</h3></Col>
                </Row>
                <Row>
                    <Col sm={{ size: 4 }}><h3><Badge color="primary">Length</Badge></h3></Col>
                    <Col sm={{ size: 8 }}><h3>{Item.length}</h3></Col>
                </Row>
                <Row>
                    <Col sm={{ size: 4 }}><h3><Badge color="primary">Width</Badge></h3></Col>
                    <Col sm={{ size: 8 }}><h3>{Item.width}</h3></Col>
                </Row>
                <Row>
                    <Col sm={{ size: 4 }}><h3><Badge color="primary">Mass</Badge></h3></Col>
                    <Col sm={{ size: 8 }}><h3>{Item.mass}</h3></Col>
                </Row>
                <Row>
                    <Col sm={{ size: 4 }}><h3><Badge color="primary">Density</Badge></h3></Col>
                    <Col sm={{ size: 8 }}><h3><ItemDensity item={Item} /></h3></Col>
                </Row>
                <Row>
                    <Col sm={{ size: 4 }}><h3><Badge color="primary">Shape</Badge></h3></Col>
                    <Col sm={{ size: 8 }}><h3><ItemShape item={Item} /></h3></Col>
                </Row>
            </div>
        );
    }
}