import React from 'react';
import Navigation from './Application/Navigation';

export default class Application extends React.Component{
    render(){
        return(
            <div className="application-container">
                <Navigation />
                <div className="application-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
