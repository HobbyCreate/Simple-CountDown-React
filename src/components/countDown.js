import React, {useEffect} from 'react';
import './countDown.css';

function CountDown(props) {

    const targetTime = () => {
        const interval = setInterval(() => {
            const newYears = '1 Jan 2023';
            const newYearDate = new Date(newYears);
            const currentDate = new Date();
    
            const totalSecond = (newYearDate - currentDate)/1000 ;
            const day = Math.floor((totalSecond / 3600) / 24);
            const hour = Math.floor((totalSecond / 3600) % 24);
            const minute = Math.floor((totalSecond / 60) % 60);
            const second = Math.floor((totalSecond) % 60);
            
            if(totalSecond <= 0) {
                clearInterval(interval.current);
            } else {
                props.setDays(day);
                props.setHours(hour);
                props.setMinutes(minute);
                props.setSeconds(second);
            }
        })
    }
    
    useEffect(() => {
        targetTime();
    });

    return (
        <div className="count">
            <div className="day">
                <h1>{props.days}</h1>
                <h3>Days</h3>
            </div>
            <div className="hour">
                <h1>{props.hours}</h1>
                <h3>Hours</h3>
            </div>
            <div className="mins">
                <h1>{props.minutes}</h1>
                <h3>Min</h3>
            </div>
            <div className="sec">
                <h1>{props.second}</h1>
                <h3>Sec</h3>
            </div>
        </div>
    );
}


export default CountDown;