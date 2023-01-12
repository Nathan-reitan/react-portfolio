import React from "react";

export default class Header extends React.Component{
    constructor(props) {
        super(props);

      }
      render(){
        return (
            <main>
                <div className="mainContainer">
                    <div className="landingWrapper">
                        <div className='landingContainer'>
                            <h1 className="landingTitle"><span>Reitan </span><span>Web Services</span></h1>
                        </div>
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
                                        Develop light-weight, reactive projects using a mobile first, agile methodology.
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
                                    <p>Use Express servers with Node.js to retrieve information from databases and APIs and serve your web application</p>
                                </div>
                            </div>
                            <div className="serviceWrapper">
                                <div className="serviceIconContainer">
                                    <img src="./icons/database-solid.svg" alt="" height="75px" className="serviceIcons" />
                                </div>
                                <div className="serviceTitle"><h4>Back End Development</h4></div>
                                <div className="serviceContent">
                                    <p>Store all your data for future reference or to call back to your webpage in a PostgreSQL database.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="portfolio" className="portfolioWrapper">
                        <div className="portfolioContainer">
                            <a href="https://growingrootselc.org/" className="portfolioCard">
                                <div className="portfolioCardImageContainer">
                                    <div>
                                        <img src="./images/growingRootsELC.webp" className="portfolioImage" alt="growing roots early learning center" />
                                    </div>
                                </div>
                                <div className="portfolioCardDescriptionContainer">
                                    <h1>Growing Roots ELC</h1>
                                    <p>A lightweight web page built for a new early learning center in Kalispell, Montana.</p>
                                </div>
                            </a>
                            <a href="https://wicked-sales.nathanreitan.com/" className="portfolioCard">
                                <div className="portfolioCardImageContainer">
                                    <div>
                                        <img src="./images/wickedSales.webp" className="portfolioImage" alt="growing roots early learning center" />
                                    </div>
                                </div>
                                <div className="portfolioCardDescriptionContainer">
                                    <h1>Wicked Sales</h1>
                                    <p>A full-stack Node.js and React.js demonstrative e-commerce application.</p>
                                </div>
                            </a>
                            <a href="https://getcookin.nathanreitan.com/login" className="portfolioCard">
                                <div className="portfolioCardImageContainer">
                                    <div>
                                        <img src="./images/getCookin.webp" className="portfolioImage" alt="growing roots early learning center" />
                                    </div>
                                </div>
                                <div className="portfolioCardDescriptionContainer">
                                    <h1>Get Cookin'</h1>
                                    <p>A dynamic web application made for home cooks who want to use up the items in their fridge/freezer.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="information">
                        <div className="rowContainer">
                            <div id="about-me" className="imageLeftRow">
                                <div className="rowImg">
                                    <img src="./images/nathanReitanCircle.webp" alt="Nathan Reitan - Software Developer, SEO & SEM Specialist" height="300" className="aboutPics" />
                                </div>
                                <div className="rowContent">
                                    <h2>
                                        About Me
                                    </h2>
                                    <p>
                                        I grew up in Southern California and graduated from San Clemente High School.  I am based out of Southern Orange County and have been building and maintaining websites both personal and professional since 2020.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rowContainer">
                            <div id="technologies" className="imageRightRow">
                                <div className="rowContent">
                                    <h2>
                                        Technology Stack
                                    </h2>
                                    <p  className="rightP">
                                        I develop lightweight, reactive web applications using the JavaScript framework React.js on Node.js with Express servers.  Using my experience with HTML5, CSS3, JavaScript, and SQL I can produce you beautiful, lightweight, and reactive full-stack applications for your business!
                                        Once your application is built, we can start pushing your web presence to the front page of Google.
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
