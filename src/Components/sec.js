import React from 'react'
function sec(props)
{
    return(
        <div className="sec">
            <img src={props.im}/>
            <h1>{props.num}</h1>
            <p>{props.tex}</p>
        </div>
    )
}
export default sec