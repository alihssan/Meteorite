import React, { Component } from 'react';
import met from "../images/meteor.png";
import {Link} from 'react-router-dom'

class Headview extends Component{
    render(){
    return(
        <div className="forhead" >
            <div className="left">
                <img src={met} alt="images" width="50px" height="50px"/>
                <p>Meteorite Tavern</p>
            </div>
            <div className="right">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Link'>link</Link></li>
                </ul>
            </div>
        </div>
    );
}
}
export default Headview;
