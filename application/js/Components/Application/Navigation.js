import React from 'react';
import { Link } from 'react-router';

const ACTIVE_CLASS = "active-app-link"

export default class Navigation extends React.Component{
    render(){
        return(
            <nav className="app-nav">
                <div className="app-nav-inner">
                    <div className="links">
                        <ul>
                            <li><Link to="/app" activeClassName={ACTIVE_CLASS}>Front</Link></li>
                            <li><Link to="/submit" activeClassName={ACTIVE_CLASS}>Submit</Link></li>
                            <li><Link to="/messages" activeClassName={ACTIVE_CLASS}>Messages</Link></li>
                            <li><Link to="/subreddits" activeClassName={ACTIVE_CLASS}>Subreddits</Link></li>
                            <li><Link to="/profile" activeClassName={ACTIVE_CLASS}>My Profile</Link></li>
                            <li><Link to="/logout" activeClassName={ACTIVE_CLASS}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
