import React from 'react'
import comp from '../comp.png'
function customers1()
{
    return(
        <div style={{marginTop:70+'px'}}>
            <br/><br/>
            <table><tr>
                <td><h1>78,700</h1><p>customers in over <b>120</b> countries growing their businesses with HubSpot</p></td>
                <td><img src={comp} className="comp"/></td>
            </tr></table>    
        </div>    
    )
}
export default customers1