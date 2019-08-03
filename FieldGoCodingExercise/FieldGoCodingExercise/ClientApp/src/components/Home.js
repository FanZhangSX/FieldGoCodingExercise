import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Panel from './Panel';
import Detail from './Detail';

export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedItem: null
        };

        this.transSelectedItem = this.transSelectedItem.bind(this);
    }

    transSelectedItem(item) {
        this.setState({ selectedItem: item });
    }

    static displayName = Home.name;

    render() {
      return (
          <div>
              <Row>
                  <Col sm={{ size: 5 }}>
                      <Panel transSelectedItem={this.transSelectedItem} />
                  </Col>
                  <Col sm={{ size: 5, offset: 1 }}>
                      <Detail selectedItem={this.state.selectedItem} />
                  </Col>
            </Row>  
        </div>
    );
  }
}

