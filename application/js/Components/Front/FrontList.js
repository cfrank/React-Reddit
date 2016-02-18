import React from 'react';

export default class FrontList extends React.Component{
    render(){
        return(
            <div className="front-list">
                <ul>
                    <li className="active">Hot</li>
                    <li>New</li>
                    <li>Rising</li>
                    <li>Controversial</li>
                    <li>Top</li>
                    <li>Guilded</li>
                </ul>
            </div>
        )
    }
}
