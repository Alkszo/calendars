import React, { Component } from 'react';
import './App.css';
import data from './data'
import CalendarList from './CalendarList'
import devdata from './devdata'
import Developement from './Developement';

class App extends Component {
  constructor(props){
    super(); 
    this.state = {
      currentTime: 58849,
      selectedTime: 58849,
    }   
    
  }

    handleOmniCalc = (date) => {
    this.setState({ currentTime: date, selectedTime: date })
  }

  testFunction = (year) => {
    return (year > 0) ? (year % 4) === 0 : (year % 4) === -1
  }
  
  handleTimeChange = (e) => {
    this.setState({ selectedTime: e.target.value})
  }

  handleTimeSubmit = (event) => {
    this.handleOmniCalc(this.state.selectedTime)
    event.preventDefault()
  }
  
  render () {
    
    const currentTime = this.state.currentTime
    
    return (
      <div className="App">
        Apki czas to {this.state.currentTime}
        <form onSubmit={this.handleTimeSubmit}>
          <input type="number" onChange={this.handleTimeChange} value={this.state.selectedTime}/>
        </form>
        <CalendarList data={ data } currentTime={currentTime} handleOmniCalc={this.handleOmniCalc}/>
        <Developement data={devdata} currentTime={currentTime} handleOmniCalc={this.handleOmniCalc}/>
      </div>
    );
  }
  
}

export default App;
