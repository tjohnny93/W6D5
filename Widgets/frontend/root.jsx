import React from 'react';
import Clock from './clock';
import Tabs from './tabs.jsx';

const tabs = [
  {title: "One", content: "I am Tyler"},
  {title: "Two", content: "Am Johnny"},
  {title: "ThReE", content: "Kenny"}
];

class Root extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div>
      <Clock />
      <Tabs keys={tabs}/>
    </div>)
  }
}




export default Root;