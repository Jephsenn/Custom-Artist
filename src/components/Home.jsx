import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPalette, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    render(){
        
        return  <div className="main-content">
                    <div className="header">
                        <div className="header-container">
                            <h1>Experience Art Like Never Before</h1>
                            <div className="search-field">
                                <input className="search-bar" type="text" placeholder="Search.."/>
                                <button className="submit" type="submit">
                                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="main-content-container">
                        <div className="section-about">
                            <h2>Who are we</h2>
                            <p>We are Custom Artist, where you can fulfill any of your art needs!</p>
                            <div className="service-list">
                                <div className="service-1">
                                    <FontAwesomeIcon className="service-icon" icon={faPalette}/>
                                    <h3>Find any type of art!</h3>
                                    <p>We are dedicated to finding you any type of art you need, whether it be a painting, piece of music, or anything you can imagine!</p>
                                </div>
                                <div className="service-2">
                                    <FontAwesomeIcon className="service-icon" icon={faMoneyBill}/>
                                    <h3>Competetive pricing for all!</h3>
                                    <p>One of our prime focuses is bringing you the best bang for your buck! Here at Custom Artist, we pride ourselves on our competitive pricing and low hassle purchases!</p>
                                </div>
                                <div className="service-3">
                                    <FontAwesomeIcon className="service-icon" icon={faUser}/>
                                    <h3>Support when you need!</h3>
                                    <p>Have an issue with a purchase? We're always here for your support when you need, whether it be through a ticket or a simple phone call, we'll always help!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ;
    }
}

export default Home;