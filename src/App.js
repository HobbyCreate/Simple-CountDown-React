import React, { useState } from 'react';
import CountDown from './components/countDown';
import './App.css';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  

  return (
    <div className="App">
      <h1>Let Count Down to New Years</h1>
      <h2> in ...</h2>
      <CountDown 
        days = {days} setDays = {setDays}
        hours = {hours} setHours = {setHours}
        minutes = {minutes} setMinutes = {setMinutes}
        second = {second} setSeconds = {setSeconds} />
    </div>
  );
}

export default App;
