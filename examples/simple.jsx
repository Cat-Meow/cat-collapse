import React, { Component } from 'react';
import { Collapse } from '../src/index';

export default class Example extends Component {
  state = {
    open: false
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }
    
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-small" onClick={this::this.handleClick}>Click</button>
        <Collapse show={this.state.open}>
            Collapse
        </Collapse>
      </div>
    );
  }
}
