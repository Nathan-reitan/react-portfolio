import React from "react";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.closeNav = this.closeNav.bind(this);
        this.openNav = this.openNav.bind(this);
      }

      openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('overlay').style.width = '100%';
        document.getElementById('overlay').style.opacity = '0.8';
      }

      closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('overlay').style.width = '0';
        document.getElementById('overlay').style.opacity = '0';
      }
      render(){
        return (
            <header>
                <section class="top-nav">
                    <div class="navContainer">
                        <a href="./" className="logoContainer">
                            <h1 className="headerTitle">Reitan Web Services</h1>
                        </a>

                        <input id="menu-toggle" type="checkbox" />
                        <label class="menu-button-container" for="menu-toggle">
                            <div class="menu-button"></div>
                        </label>
                        <ul class="menu">
                            <li>
                                <a href="#services" className="headerNavButtons">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="headerNavButtons">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about-me" className="headerNavButtons">About Me</a>
                            </li>
                            <li>
                                <a href="#technologies" className="headerNavButtons">Technologies</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
        );
    }
}
