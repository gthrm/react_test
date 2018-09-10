import React, { Component } from 'react';

class ChildComponent extends Component {
    
  state = {
    name: 'Бумеранг вернулся назад'
  }
  
  render() {
      return (
      <div>
         <button onClick={() => { this.props.updateData(this.state.name)}}>Запустить бумеранг</button>
      </div>
      )
    }
  }

export default ChildComponent;
