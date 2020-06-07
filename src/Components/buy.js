import React from 'react'
import hero from '../hero.png'
function buy()
{
    return(
        <div className="div9">
            <table style={{width:80+'%'}}><tr>
                <td style={{width:500+'px'}}>
                    <h1 class="head1">Start Growing With HubSpot Today</h1>
                    <p className="text5" >With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                    <button class="but">Get Hubspot Free</button>
                    <p>Get started with FREE tools, or get more with our premium software.</p>
                </td>
                <td><img src={hero} className="Hero" /></td>
            </tr></table>
        </div>
    )
}
export default buy