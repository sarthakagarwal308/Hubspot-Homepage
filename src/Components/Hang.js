import React from 'react'
import tick from '../tick.jpg'
import check from '../check.jpg'
function Hang(props)
{
    return(
        <div className="hang">
            <h1 className="head1"><img src={check} className="tick"/>{props.head}</h1>
            <p className="text1">{props.text}<br/><br/></p>
            <h3 className="head1">POPULAR FEATURES</h3>
            
                <p className="text2"><img src={tick} className="check" />{props.f1}</p>
                <p className="text2"><img src={tick} className="check" />{props.f2}</p>
                <p className="text2"><img src={tick} className="check" />{props.f3}</p>
            <button className="but" id="jus">{props.but}</button>
        </div>
    )
}
export default Hang