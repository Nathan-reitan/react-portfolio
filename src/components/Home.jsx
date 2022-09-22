import React from "react";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        
      }
    
      render(){
        return (
            <main>
                <div className="mainContainer">
                    <div className="landingContainer">
                        <h1>Nathan Reitan:</h1>
                        <h1>Development and Digital Marketing</h1>
                    </div>
                    <div id="services" className="services">
                        <div className="servicesRow">
                            <div className="serviceWrapper">
                                <div className="serviceIconContainer">
                                    <img src="./icons/computer-solid.svg" alt="" height="75px" className="serviceIcons" />
                                </div>
                                <div className="serviceTitle"><h4>Front End Development</h4></div>
                                <div className="serviceContent">
                                    <p>
                                        Develop light-weight projects using agile methodology and mobile first.  Experience creating React Web Apps.
                                    </p>
                                </div>
                            </div>
                            <div className="serviceWrapper">
                                <div className="serviceIconContainer">
                                    <img src="./icons/ranking-star-solid.svg" alt="" height="75px" className="serviceIcons" />
                                </div>
                                <div className="serviceTitle"><h4>SEO & SEM</h4></div>
                                <div className="serviceContent">
                                    <p>Move your web presence to the front page and help you navigate Google Ads.</p>
                                </div>
                            </div>
                            <div className="serviceWrapper">
                                <div className="serviceIconContainer">
                                    <img src="./icons/server-solid.svg" alt="" height="75px" className="serviceIcons" />
                                </div>
                                <div className="serviceTitle"><h4>Server Development</h4></div>
                                <div className="serviceContent">
                                    <p>Use Express on a Node.js server to connect your front end with your backend.</p>
                                </div>
                            </div>
                            <div className="serviceWrapper">
                                <div className="serviceIconContainer">
                                    <img src="./icons/database-solid.svg" alt="" height="75px" className="serviceIcons" />
                                </div>
                                <div className="serviceTitle"><h4>Back End Development</h4></div>
                                <div className="serviceContent">
                                    <p>Store all your data in a PostgreSQL database.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="portfolio" className="portfolioWrapper">
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="rowContainer">
                            <div id="about-me" className="imageLeftRow">
                                <div className="rowImg">
                                    <img src="./images/nathanReitanCircle.webp" alt="" height="300" className="aboutPics" />
                                </div>
                                <div className="rowContent">
                                    <h2>
                                        Lorem ipsum dolor sit amet
                                    </h2>
                                    <p className="leftP">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rowContainer">
                            <div id="technologies" className="imageRightRow">
                                <div className="rowContent">
                                    <h2>
                                        Lorem ipsum dolor sit amet
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="rowImg">
                                    <img src="./images/techImage.webp" alt="" height="300" className="aboutPics" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>                                             
        );
      }
}