import React, { Component } from "react";
import Slide from 'react-reveal/Slide';


class Countdown extends Component {
  state = {
deadline: "Dec, 25, 2023",
days:"0",
hours:"0",
minutes:"0",
seconds:"0"
  };
getTimeUntil(deadline){
const time = Date.parse(deadline) - Date.parse(new Date());
if(time<0){
console.log('date passed')
}else{
  const seconds = Math.floor((time/1000)%60);
  const minutes = Math.floor((time/1000/60)%60);
  const hours = Math.floor((time/(1000*60*60))%24);
  const days= Math.floor((time/(1000*60*60*24)));
this.setState({
  days,hours,minutes,seconds
})
}
}

componentDidMount(){
  setInterval(()=> this.getTimeUntil(this.state.deadline),1000)
}

  render() {
    return (
      <Slide left delay={1000}>

<div className="countdown_wrapper">
        <div className="countdown_top">Event Starts in:</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{this.state.days}</div>
            <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
            <div className="countdown_time">{this.state.hours}</div>
            <div className="tag">Hours</div>
            </div>
            <div className="countdown_item">

            <div className="countdown_time">{this.state.minutes}</div>
            <div className="tag">Minutes</div>
            </div>
            <div className="countdown_item">
            <div className="countdown_time">{this.state.seconds}</div>
            <div className="tag">Seconds</div>
          </div>
        </div>
      </div>

      </Slide>
      
    );
  }
}

export default Countdown;
