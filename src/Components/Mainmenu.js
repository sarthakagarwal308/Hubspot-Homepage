import React, {Component} from 'react'
import globe from '../globe.jpg'
import lang from '../lang.png'

class Top extends Component
{
    constructor(){
        super()
        this.state={
            isvis : false,
            message:'English'
        }
    }
    onl(){
        this.setState({isvis:true})
    }
    ofl(){
        this.setState({isvis:false})
    }
    ctext(st)
    {
        this.setState({message:st})
        this.ofl()
    }
    render()
    {
        return(
            <div className="mainMenu">
                <li><img src={lang} alt="language:" className="main_img" /></li>
                <li><button className='lang' onMouseEnter={()=>this.onl()} onMouseLeave={()=>this.ofl()}>{this.state.message}</button>
                {this.state.isvis && <div className="lang3" onMouseEnter={()=>this.onl()} onMouseLeave={()=>this.ofl()}>
                <h3 className="lang7"onMouseDown={()=>this.ctext("English")}>English</h3>
                <h3 className="lang7"onMouseDown={()=>this.ctext("Spanish")}>Spanish</h3>
                <h3 className="lang7"onMouseDown={()=>this.ctext("French")}>French</h3>
                <h3 className="lang7"onMouseDown={()=>this.ctext("Hindi")}>Hindi</h3>
                <h3 onMouseDown={()=>this.ctext("German")} >German</h3>
                </div>}</li>


                <li><div className="inl"><h3>Contact Sales</h3></div></li>
                <li id="lef"><a href='https://www.hubspot.com/get-started'><button className="button">Get HubSpot Free</button></a></li>
                <li id="lef_l"><a href='https://app.hubspot.com/login'><button className="button_l">Login</button></a></li>
                <li id="sear"><input type='search' placeholder='Search..' className="search"/></li>
                
            </div>
        )
    }
}
export default Top
