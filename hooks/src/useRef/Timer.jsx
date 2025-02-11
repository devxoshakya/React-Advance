import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default Timer;