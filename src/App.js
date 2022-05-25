import { useEffect, useState } from 'react'
import { ReactComponent as ArrowDown } from './svgs/arrow-down.svg'
import { ReactComponent as ArrowUp } from './svgs/arrow-up.svg'
import { ReactComponent as Play } from './svgs/play.svg'
import { ReactComponent as Pause } from './svgs/pause.svg'
import { ReactComponent as Refresh } from './svgs/refresh.svg'
import * as C from './styles'
import './App.css'

const App = () => {
  const [viewMinutes, setViewMinutes] = useState(25)
  const [secMinutes, setSecMinutes] = useState(25)
  const [secSeconds, setSecSeconds] = useState(0)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const [breakSeconds, setBreakSeconds] = useState(59)
  const [isPaused, setIsPaused] = useState(true)
  const [isBreak, setIsBreak] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)

  useEffect(() => {
    setSecMinutes(viewMinutes)
  }, [viewMinutes])

  useEffect(() => {
      let interval = setInterval(() => {
        clearInterval(interval)
        if (isRefresh) {
          setSecMinutes(viewMinutes)
          setSecSeconds(0)
          setIsPaused(true)
          setIsBreak(false)
        } else {
          if (isPaused === false) {
            
            if (secSeconds === 0) {
              if (secMinutes !== 0) {
                setSecSeconds(59)
                setSecMinutes(secMinutes - 1)
              } else {
                const minutes = isBreak ? viewMinutes - 1 : breakMinutes - 1
                const seconds = breakSeconds
                
                setSecMinutes(minutes)
                setSecSeconds(seconds)
                setIsBreak(!isBreak)
              }
            } else {
              setSecSeconds(secSeconds - 1)
            }
          }
        }
    }, 1000)
    
  }, [!isPaused && secSeconds])

  const refreshPaused = () => {
    if (isPaused === true) {
      setIsRefresh(true)
      setSecMinutes(viewMinutes)
      setSecSeconds(0)
      setIsBreak(false)
    }
  }

  const secTimerMinutes = secMinutes < 10 ? `0${secMinutes}` : secMinutes;
  const secTimerSeconds = secSeconds < 10 ? `0${secSeconds}` : secSeconds;

  return (
    <C.Container secMinutes={secMinutes}>
      <h1 className='header'>Pomodoro Timer</h1>
      
      <div className='breakLength'>
        <div>
          <h3>Break length</h3>
          <div className='increase-decrease'>

            <button onClick={() => setBreakMinutes(breakMinutes + 1)}><ArrowUp /></button> 
            <p>{breakMinutes}</p>
            <button onClick={() => setBreakMinutes(breakMinutes - 1)}><ArrowDown /></button> 
          
          </div>        
        </div>

        <div>
          <h3>Session length</h3>
            <div className='increase-decrease'>

              <button onClick={() => setViewMinutes(viewMinutes + 1)}><ArrowUp /></button> 
              <p>{viewMinutes}</p> 
              <button onClick={() => setViewMinutes(viewMinutes - 1)}><ArrowDown /></button> 

            </div>
        </div>
      </div>

      <div className='timer'>
        <h3>{isBreak ? 'Break' : 'Session'}</h3>
        <h1>{secTimerMinutes}:{secTimerSeconds}</h1>
      </div>

      <div className='pause-play-refresh'>
        <button onClick={() => {return setIsPaused(false), setIsRefresh(false)}}>
          <Play />
        </button>

        <button onClick={() => setIsPaused(true)} className='midbutton'>
          <Pause />
        </button> 
          
        <button onClick={refreshPaused}>
          <Refresh />
        </button>         
      </div>

    </C.Container>
  );
}

export default App;
