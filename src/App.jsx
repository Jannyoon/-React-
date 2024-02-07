import './App.module.css';
import { useState, useEffect, useRef } from 'react';
export default function App() { 
  //pause, start, 
  const [running, setRunning] = useState("start");
  const [nowTime, setNowTime] = useState(0);
  const intervalT = useRef(0);

  useEffect(()=>{
    intervalT.current = setInterval(()=>{
      if (running==='init'){  
        init(intervalT, setNowTime, nowTime);
      }
      else if (running==='pause'){
        pause(intervalT);
      }
      else setNowTime(prev =>prev +1); //start 상태일 때
      },1000);
      return ()=>clearInterval(intervalT.current);
  }, [running]); 
  
  return (
    <div>
      <span ref={intervalT}>{`${String(Math.floor(nowTime/60)).padStart(2,'0')}:${String(nowTime%60).padStart(2,'0')}`}</span>
      <div className='btn_Container'>
        <button onClick={()=>setRunning("start")}>start</button>
        <button onClick={()=>setRunning("pause")}>pause</button>
        <button onClick={()=>setRunning("init")}>stop</button>
      </div>

    </div>
  );
}


function pause(intervalT){
  clearInterval(intervalT.current);
  return;
}

function init(intervalT, setNowTime, nowTime){
  clearInterval(intervalT.current);
  setNowTime(0);       
  intervalT.current=undefined;  
  console.log(nowTime);
  return;
}