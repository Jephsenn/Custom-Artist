import React from 'react';
import logo from '../images/logo.png';
import { Link, withRouter } from "react-router-dom";

class Navigation extends React.Component {
    render(){
        return <div className="Navigation"> 
                    <div className="nav-container">
                        <div className="Logo">
                            <img className="logo-image"src={logo} alt="Oops."/>
                        </div>
                        <div className="Tabs">
                            <div className="tab-home">
                                <Link to="/home">Home</Link>
                            </div>
                            <div className="tab-about">
                                <Link to="/about">About</Link>
                            </div>
                        </div>
                    </div>
                </div>
                ;
    }
}
export default Navigation;