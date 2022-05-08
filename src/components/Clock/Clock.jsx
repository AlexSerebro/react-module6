import s from './Clock.module.css';
import { Component } from 'react';

export class Clock extends Component{
  state = {
    time: new Date().toLocaleTimeString(),
  }
  intervalId = null;

  componentDidMount() {
    console.log('setInterval');
    
    this.intervalId = setInterval(
      ()=> this.setState({time: new Date().toLocaleTimeString()})
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={s.Clock__face}>{this.state.time}</div>
  }
}