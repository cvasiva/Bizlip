import React from "react";
const Move_time = (props) => {
    return (
        <>
            {props.status === 0 &&
                <button className="btn btn-warning" onClick={props.start}>Start</button>
            }
            {props.status === 1 && <>
                <button className="btn btn-warning" onClick={props.stop}>stop</button>
                <button className="btn btn-warning" onClick={props.reset}>reset</button>
            </>
            }
            {props.status === 2 && <>
                <button className="btn btn-warning" onClick={props.resume}>resume</button>
                <button className="btn btn-warning" onClick={props.reset}>reset</button>
            </>
            }

        </>
    )
}
export default Move_time