import React from 'react'
import { Link, IndexLink } from 'react-router'

const ACTIVE_CLASS = "active-home-link"

export default class HomeNavigation extends React.Component{
  render(){
    return(
      <nav className="home-navigation">
        <ul>
          <li><IndexLink to="/" activeClassName={ACTIVE_CLASS}>Home</IndexLink></li>
          <li><Link to="/info" activeClassName={ACTIVE_CLASS}>Info</Link></li>
        </ul>
      </nav>
    )
  }
}
