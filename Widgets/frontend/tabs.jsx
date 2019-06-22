import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current_idx: 0};
  }

  
  render () {
    return (
      <ul>
        <h1>{this.props.keys[0].title}</h1>
      </ul>  
      )
  }
}




export default Tabs;