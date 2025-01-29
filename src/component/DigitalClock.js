import React,{useState} from 'react';

const DigitalClock = () => {
    const [hour,setHour] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    
    return(
        <div>
            <h1>Digital Clock</h1>
            {hour}:{minutes}:{seconds}
        </div>
    )
    
    }


export default DigitalClock;
