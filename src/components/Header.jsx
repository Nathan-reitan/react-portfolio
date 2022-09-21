import React from "react";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.closeNav = this.closeNav.bind(this);
        this.openNav = this.openNav.bind(this);
      }
    
      /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
      openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('overlay').style.width = '100%';
        document.getElementById('overlay').style.opacity = '0.8';
      }
    
      /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
      closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('overlay').style.width = '0';
        document.getElementById('overlay').style.opacity = '0';
      }
      render(){
        return (
            <header className="header">
                <div className="navContainer">
                    <div className="logoContainer">
                        <img src="./images/logo(blue).png" alt="Nathan Reitan Software Development" height="40px"/>
                    </div>
                    <nav className="navListContainer">
                        <ul className="headerNavList">
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#technologies">Technologies</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about-me">About Me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>                                               
        );
      }
}