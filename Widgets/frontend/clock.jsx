import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { date: new Date() };
    
    this.day = this.day.bind(this);
    this.month = this.month.bind(this);
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({
      date: new Date()
    });
  }

  day () {
    switch (this.state.date.getDay()) {
      case 0:
        return "Sun";

      case 1:
        return "Mon";

      case 2:
        return "Tue";

      case 3:
        return "Wed";

      case 4:
        return "Thu";

      case 5:
        return "Fri";

      case 6:
        return "Sat";
    }
  }

  month() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[this.state.date.getMonth()];
  }

  render () {
    return (
      <div className='clock'>
        <h1 className='clock-title'>Time:</h1>
        <h2 className='actual-time'>{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()} PDT </h2>
        <h2 className='date-title'>Date:</h2>
        <h2 className='actual-date'>{this.day()}, {this.month()}, {this.state.date.getFullYear()}</h2>
      </div>
      
    );
  }
}



export default Clock;