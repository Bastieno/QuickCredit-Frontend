import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../assets/css/app.css';
import Landing from './layout/Landing';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
          <Route exact path="/" component={Landing}/>
        <Footer/>
      </Router>
    );
  }
}

export default App;
