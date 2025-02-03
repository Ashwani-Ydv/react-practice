import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning,setIsRunning]=useState(false);

    useEffect(() => {
        if(isRunning){
            const intervalID = setInterval(() => {
                setSeconds(seconds + 1);
                if (seconds >= 59) {
                    setMinutes(minutes + 1)
                    setSeconds(0)
                }
                if (minutes >= 59) {
                    setHour(hour + 1);
                    setMinutes(0);
                }
            }, 1000)
            return () => {
                clearInterval(intervalID);
            }
        }
    })

    const handleReset=()=>{
        setHour(0);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
    }

    const handleStart=()=>{
     setIsRunning(true);
    }

    const handleStop=()=>{
        setIsRunning(false)

    }


    return (
        <div>
            <h1>Digital Clock</h1>
            <div>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
            {hour < 10 ? `0${hour}` : hour}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    )

}


export default DigitalClock;
