import React, { useState } from "react";
import Display_time from "./Display_time";
import Move_time from "./Move_time";
const Time = () => {
    const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 })
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)
    const start = () => {
        run();
        setStatus(1)
        setInterv(setInterval(run, 10))
    }
    const stop=()=>{
        clearInterval(interv)
        setStatus(2)
    }
    const reset=()=>{
        clearInterval(interv)
        setStatus(0)
        setTime( {h: 0, m: 0, s: 0, ms: 0 })
    }
    const resume=()=> start()
    var updatedH = time.h, updatedM = time.m, updatedS = time.s, updatedMS = time.ms
    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMS === 100) {
            updatedS++;
            updatedMS = 0
        }
        updatedMS++
        return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMS })
    }
    return (
        <>
            <Display_time time={time} />
            <Move_time start={start} status={status} stop={stop} reset={reset} resume={resume}/>
        </>
    )
}
export default Time