import React from 'react';

export default class Header extends React.Component {
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

  render() {
    return (
      <header>
        <section className="top-nav">
          <div className="navContainer">
            <a href="./" className="logoContainer">
              <h1 className="headerTitle">Reitan Web Services</h1>
            </a>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <ul className="menu">
              <li>
                <div className="headerNavButtons" onClick={this.learnMore}>Services</div>
              </li>
              <li>
                <div className="headerNavButtons" onClick={this.learnMore}>Portfolio</div>
              </li>
              <li>
                <div className="headerNavButtons" onClick={this.learnMore}>About Me</div>
              </li>
              <li>
                <div className="headerNavButtons" onClick={this.learnMore}>Technologies</div>
              </li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}
