import React from 'react'
import back from '../back.svg'
function about()
{
    return(
        <div className="about">
            <div className="text">
                <h1>There's a better way to grow.</h1>
                <h4>Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</h4>
                <button className="but">Get HubSpot Free</button><br/><br/>
                <p>Get started with FREE tools, and <br/>upgrade as you grow.</p>
            </div>  
            <img src={back} className="bimg"/>
        </div>
    )
}
export default about