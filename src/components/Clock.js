import React from 'react';
import './Clock.scss';


class Clock extends React.Component {
  state = {
    timeFormatted: "00:00:00"
  }
  updateTime(){
    console.log("Update")
    var time=new Date();
    this.setState({
      timeFormatted: time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
    })
  }
  componentDidMount() {
    setInterval(
      this.updateTime.bind(this)
    ,200) 
  }
  render() {
    return (
      <div className="Clock">{this.state.timeFormatted}</div>
    );  
  }
}

export default Clock;
