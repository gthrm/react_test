import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
      return (
      <div>
          {this.props.visible?<p>Props: {this.props.name}</p>:null}
      </div>
      )
    }
  }

export default ChildComponent;
