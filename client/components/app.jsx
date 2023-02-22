import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
