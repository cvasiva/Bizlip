import React from "react";
const Display_time = (props) => {
    return (
        <>
        <div    className="my-3">
            <button className="btn btn-warning mt-4 mx-2 px-2">{props.time.h >= 10 ? props.time.h : +"0" + props.time.h}</button>
            <button className="btn btn-warning mt-4 mx-2 px-2">{props.time.m >= 10 ? props.time.m : +"0" + props.time.m}</button>
            <button className="btn btn-warning mt-4 mx-2 px-2">{props.time.s >= 10 ? props.time.s : +"0" + props.time.s}</button>
            <button className="btn btn-warning mt-4 mx-2 px-2">{props.time.ms >= 10 ? props.time.ms : +"0" + props.time.ms}</button>
            </div>

        </>
    )
}
export default Display_time