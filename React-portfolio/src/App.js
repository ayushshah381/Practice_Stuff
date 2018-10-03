import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Services from './Services';

class App extends Component {
  render() {
    const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
    const navlinks = sections.map((section) => {
        return(
          <li><a href={'#' + section}>{section}</a></li>
          );
    });
    return (
      <div>
      <nav>
        <h2 className="logo">{this.props.LogoTitle}</h2>
        <ul>
          {navlinks}
        </ul>
      </nav>
      <div>
        <Header title="Stylish Portfolio" button="Find Out More"/>
      </div>
      <div>
        <Services />
      </div>
      </div>

    );
  }
}

export default App;
