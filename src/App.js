import React from 'react';
import SubmitBox from './component/SubmitBox';
import Timer from './component/Timer';
import './App.css';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      input: '',
      days: 0,
      hr: 0,
      min: 0,
      sec: 0,
      time: 0,
      expire:''
    }
  }
  // componentDidUpdate() {
  //   localStorage.setItem("days", JSON.stringify(this.state.days));
  //   localStorage.setItem("hr", JSON.stringify(this.state.hr));
  //   localStorage.setItem("min", JSON.stringify(this.state.min));
  //   localStorage.setItem("sec", JSON.stringify(this.state.sec));
  //   localStorage.setItem("time", JSON.stringify(this.state.time));
  // }
  // componentDidMount() {
  //   // console.log(localStorage.getItem)
  //   if (localStorage.getItem("items") !== null) {
  //     let all = JSON.parse(localStorage.getItem("items"));
  //     let progress = JSON.parse(localStorage.getItem("progress"));
  //     this.setState({ items: all });
  //     this.setState({ progress: progress });
  //   } else {
  //     let all =[];
  //     let progress = 0;
  //     this.setState({ items: all });
  //     this.setState({ progress: progress });
  //   }  
  // }
  getInput=(e)=> {
    let data = e.target.value; 
    this.setState({ input: data, expire:""});
  }
  timer=()=> {
    let selectedDate = new Date(this.state.input).getTime();
     let time = setInterval(() => {
      let now = new Date().getTime();
      let dist = selectedDate - now;
      let msPerDay = 1000 * 60 * 60 * 24;
      let msPerHr = 1000 * 60 * 60;
      let msPerSec = 1000 * 60;
      let remainingDays = Math.floor(dist / msPerDay);
      let remainingHr = Math.floor((dist % msPerDay) / msPerHr);
      let remainingMin = Math.floor((dist % msPerHr) / msPerSec);
      let remainingSec = Math.floor((dist % msPerSec) / 1000);
       this.setState({ days: remainingDays, hr: remainingHr, min: remainingMin, sec: remainingSec, time: time, expire: '' });
       if (dist < 0) {
        clearInterval(this.state.time);
        this.setState({ days: 0, hr: 0, min: 0, sec: 0,time:0,input:'',expire: "Date Expired :(" });
        return;
      }
    },1000)
    console.log(selectedDate);
  }
  onSubmit = () => {
    clearInterval(this.state.time);
    if (this.state.input !== "") {
      this.timer()
    } else {
      alert("Please choose End Date");
    }
    }
    
  stop=()=> {
    clearInterval(this.state.time);
    this.setState({ days: 0, hr: 0, min: 0, sec: 0,time:0,input:'',expire:'' });
  }
  render() {
    return (
      <div className="App-header">
        <Timer days={this.state.days} hr={this.state.hr} min={this.state.min} sec={this.state.sec} expire={this.state.expire}/>
        <SubmitBox input={this.getInput} value={this.state.input} />
        {this.state.time ? <button className="cbtn btn" onClick={this.stop}>Clear</button>
          : <div className="btn">
        <button type="button" className="sbtn" onClick={this.onSubmit}>Submit</button>
      </div>}
      </div>
    )
  }
}

export default App;
