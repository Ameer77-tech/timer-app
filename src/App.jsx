"use client"
import React, { useState } from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import Buttons from './components/Buttons'




let interval=false;

const App = () => {

  
  const [time, settime] = useState(0)
  const [intervalid, setintervalid] = useState(null)
  const [timem, settimem] = useState(0)

  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`);
    if(action.toUpperCase()==="START"){
      startTimer();
    }
    else if(action.toUpperCase()==="STOP"){
      stopTimer();
    }
    else{
      resetTimer();
    }

   
  }
  const startTimer=()=>{
   
    if(intervalid) return;
    const newintervalid=setInterval(() => {
        settime((prevTime) => prevTime + 1); // Use functional update for state
      }, 1000);
      setintervalid(newintervalid)
    
    console.log(interval)
    
  }
  const stopTimer=()=>{
    if(intervalid){
      clearInterval(intervalid)
      setintervalid(null)
    }
   
   

  }
  const resetTimer=()=>{
    stopTimer()
    settime(0)
    
  }
  

  return (
    <>
    <Header/>
    <Timer time={time} timem={timem}/>
    <Buttons  onButtonClick={handleButtonClick}/>
    </>
  )
}

export default App