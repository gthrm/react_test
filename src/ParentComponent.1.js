import React, { Component } from 'react';
import ChildComponent from './ChildComponent.1';

class ParentComponent extends Component {
  state = {
    name: 'Yulia',
    visivle: true
  };

  updateData = (value) => {
    this.setState({ name: value })
  };

  render() {
    return (
      <div>
        <p>State: {this.state.name}</p>
        <ChildComponent name={this.state.name} updateData={this.updateData} visible={this.state.visivle}/>
      </div>
    )
  }
}

export default ParentComponent;
