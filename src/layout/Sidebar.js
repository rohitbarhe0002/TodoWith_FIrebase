import React from 'react'
import {FaChevronDown,FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa';
export default function Sidebar() {
    return (
        <div className ="sidebar" data-testid="sidebar">
            <ul>
        <li><span><FaInbox/></span><span>Inbox</span></li>
        <li><span><FaRegCalendar/></span><span>Today</span></li>
        <li><span><FaRegCalendarAlt/></span><span>Nextn  7 Day</span></li>
        </ul>

        <div className="sidebar__middle">
            <span><FaChevronDown/></span>
            <h2>Projects</h2>
        </div>
<ul className ="sidebar_projects">projects will be here</ul>
Add project component here!!
        </div>
      
    )
}
