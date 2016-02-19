import React from 'react';

export default class FrontList extends React.Component{
    render(){
        return(
            <li
            key={this.props.id}
            className={this.props.active ? 'active' : ''}
            onClick={this.props.onClick}
            >
            {this.props.name}</li>
        )
    }
}
