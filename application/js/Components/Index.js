import React from 'react'

import HomeNavigation from './Home/HomeNavigation'

export default class App extends React.Component{
    render(){
        return(
            <div className="index-container">
              <HomeNavigation />
              {this.props.children}
            </div>
        )
    }
}
