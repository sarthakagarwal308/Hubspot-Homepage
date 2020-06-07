import React from 'react'
import Hang from './Hang'
function products()
{
    return(
        <div className="container">
            <table className="tabl"><tr>

            <td><div className="t1">
                <h1 style={{fontFamily:'Verdana'}}>Powerful alone.<br/>Better together</h1>
                <p>HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together.</p>

            </div></td>
            <td><Hang  head="Free HubSpot CRM" text="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever." f1="Contact Insights" f2="Deals" f3="Tasks" but="Get Free CRM" /></td>
            <td><Hang  head="CMS Hub" text="Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience." f1="Drag-and-Drop Editor" f2="SEO Recommendations" f3="Websites Themes" but="Get Started"/></td>
            </tr><tr>
            <td><Hang  head="Marketing Hub" text="Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale." f1="Lead Generations" f2="Marketing Automation" f3="Analytics" but="Get Started"/></td>
            <td><Hang  head="Sales Hub" text="Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster." f1="Email Traking" f2="Meeting Scheduling" f3="Email Automation" but="Get Started"/></td>
            <td><Hang  head="Service Hub" text="Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business." f1="Tickets" f2="Customer Feedback" f3="Knowledge Base" but="Get Started"/></td>
            </tr></table>
        </div>
    )
}
export default products