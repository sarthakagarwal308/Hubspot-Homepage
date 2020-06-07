import React, {Component} from 'react'
import hub from '../hub.jpg'
import check from '../check.jpg'
class menu extends Component
{
    constructor(){
        super()
        this.state={
            isvis1 : false,
            isvis3 : false,
            isvis4 : false,
            isvis5 : false
        }
    }
    onl(n){
        if(n==1)this.setState({isvis1 : true})
        else if(n==3)this.setState({isvis3 : true})
        else if(n==4)this.setState({isvis4 : true})
        else if(n==5)this.setState({isvis5 : true})
    }
    offl(n){
        if(n==1)this.setState({isvis1 : false})
        else if(n==3)this.setState({isvis3 : false})
        else if(n==4)this.setState({isvis4 : false})
        else if(n==5)this.setState({isvis5 : false})
    }

render()
{
    return(
        <div className="menu2">
            <li style={{float:'left'}}><img src={hub} alt="Hubspot Logo" className="img2" /></li>

            <li>
                <button onMouseEnter={()=>this.onl(5)} onMouseLeave={()=>this.offl(5)} className="mbutton" >About</button>
                {this.state.isvis5 && (<div className="drop_ab" onMouseEnter={()=>this.onl(5)} onMouseLeave={()=>this.offl(5)}>
                    <table id="drop_ab"><tr>
                        <th><h2>Company</h2></th>
                        <th><h2>News</h2></th>
                        <th><h2>Investors</h2></th>
                    </tr><tr>
                        <td>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Management Teams</p>
                            <p>Board of Directors</p>
                            <p>Carrer</p>
                        </td>
                        <td>
                            <p>HubSpot news</p>
                            <p>Press Resources</p>
                            <p>Speakers</p>
                        </td>
                        <td>
                            <p>Investor Relations</p>
                        </td>    
                    </tr></table>
                </div>)}
            </li>
            <li>
                <button onMouseEnter={()=>this.onl(4)} onMouseLeave={()=>this.offl(4)} className="mbutton" >Partners</button>
                {this.state.isvis4 && (<div className="drop_par"onMouseEnter={()=>this.onl(4)} onMouseLeave={()=>this.offl(4)}>
                <table id="drop_par"><tr>
                        <td><h2>Blog</h2><p>Read marketing, sales, agency and customer success blog content.</p></td>
                        <td><h2>Customer Stories</h2><p>Hear from the businesses that use HubSpot to grow better every day.</p></td>
                        </tr></table>
                </div>)}
            </li>
            <li>
                <button onMouseEnter={()=>this.onl(3)} onMouseLeave={()=>this.offl(3)} className="mbutton" >Resources</button>
                {this.state.isvis3 && (<div className="drop_res" onMouseEnter={()=>this.onl(3)} onMouseLeave={()=>this.offl(3)}>
                    <table id="drop_tab"><tr>
                        <td><h1>Blog</h1><p>Read marketing, sales, agency and customer success blog content.</p></td>
                        <td><h1>Customer Stories</h1><p>Hear from the businesses that use HubSpot to grow better every day.</p></td>
                        <td><h1>Developers</h1><p>Create apps and custom integrations for businesses using HubSpot.</p></td>
                        </tr><tr>
                        <td><h1>Ebooks, Guides and More</h1><p>Get access to HubSpot's most popular marketing resources.</p></td>
                        <td><h1>Onboarding & Services</h1><p>Find training and consultion services to help you thrive with HubSpot.</p></td>
                        <td><h1>Research & Reports</h1><p>Get up-to-date research and data on hot business trends.</p></td>
                        </tr><tr>
                        <td id="no"><h1>Free Courses & Certifications</h1><p>Take courses on latest business trends, taught by industry experts.</p></td>
                        <td id="no"><h1>What is Inbound?</h1><p>Get a primer on how Inbound helps your business grow better.</p></td>
                        <td id="no"><h1>Customer Service</h1><p>Get help if you have questions about using HubSpot software.</p></td>
                    </tr></table>
                </div>)}
            </li>
            <li>
                <button  className="mbutton" >Pricing</button>
            </li>
            <li>
                <button onMouseEnter={()=>this.onl(1)} onMouseLeave={()=>this.offl(1)} className="mbutton" >Software</button>
                {this.state.isvis1 && (<div className="drop" id="soft" onMouseEnter={()=>this.onl(1)} onMouseLeave={()=>this.offl(1)} >
                    <a><div id="f7">
                        <img src={check} class="img7"/>
                        <div className="div7"><h3>Free HubSpot CRM</h3><p >All your contacts and conpanies, 100% free.</p></div>
                    </div></a>

                    <a><div>
                        <img src={check} class="img7"/>
                        <div className="div7"><h3>Marketing Hub</h3><p >Marketing softwares to increase traffic and leads. Free and premium plans</p></div>
                    </div></a>

                    <a><div>
                        <img src={check} class="img7"/>
                        <div className="div7"><h3>Sales Hub</h3><p >Sales software for closing in more deals, faster. Free and premium plans.</p></div>
                    </div></a>

                    <a><div>
                        <img src={check} class="img7"/>
                        <div className="div7"><h3>Service Hub</h3><p >Software for providing first-class customer service. Free and premium plans.</p></div>
                    </div></a>

                    <a><div id="f7">
                        <img src={check} class="img7"/>
                        <div className="div7"><h3>CMS Hub</h3><p >Content management software to power websites. Free and premium plans.</p></div>
                    </div></a>

                    <a><div >
                        <div className="div7"><h3>App marketplace</h3><p >Find HubSpot apps for the tools and softwares you use.</p></div>
                    </div></a>
                </div>)}
            </li>

        </div>
    )
}
}
export default menu