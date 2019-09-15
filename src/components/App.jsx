import '@babel/polyfill';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import '../assets/css/app.css';
import Landing from './layout/Landing';
import Header from './common/Header';
import Footer from './common/Footer';
import Login from './layout/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
          </div>
          <Footer/>
        </Router>
      </Provider>
    );
  }
}

export default App;
