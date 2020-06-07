import React from 'react'
import p1 from '../p1.svg'
import p2 from '../p2.svg'
import p3 from '../p3.svg'
import p4 from '../p4.svg'
import p5 from '../p5.svg'
import p6 from '../p6.svg'
import p7 from '../p7.svg'
import p8 from '../p8.svg'
import Sec from './sec.js'
function achieve()
{
    return(
        <div class="div10">
            <h1 style={{fontSize:2+'em'}}>Learn and grow with award-winning support and a thriving community behind you.</h1>
            <p>You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</p>
            <br/><br/>
            <table style={{marginLeft:-50+'px'}}><tr id="f">
                <td><Sec im={p1} num="150+" tex="HubSpot user groups" /></td>
                <td><Sec im={p2} num="7M+" tex="Monthly visits" /></td>
                <td><Sec im={p1} num="248K+" tex="certified professionals" /></td>
                <td className="las"><Sec im={p1} num="26K" tex="registered attendees" /></td>
            </tr><tr id="s">
                <td><Sec im={p5} num="400+" tex="Integrations" /></td>
                <td><Sec im={p6} num="6" tex="languages" /></td>
                <td><Sec im={p7} num="2.6M+" tex="social followers" /></td>
                <td className="las"><Sec im={p8} num="5K+" tex="social followers" /></td>
            </tr></table>
        </div>
    )
}
export default achieve