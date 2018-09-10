import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  state = {
    name: 'Yulia',
    visivle: true
  };

  render() {
    return (
      <div>
        <p>State: {this.state.name}</p>
        <ChildComponent name={this.state.name} visible={this.state.visivle}/>
      </div>
    )
  }
}

export default ParentComponent;
