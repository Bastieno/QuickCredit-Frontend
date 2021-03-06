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
import Signup from './layout/Signup';
import UserDashboard from './layout/UserDashboard';
import AdminDashboard from './layout/AdminDashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div className="content-wrapper">
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/user-dashboard" component={UserDashboard}/>
            <Route exact path="/admin-dashboard" component={AdminDashboard}/>
          </div>
          <Footer/>
        </Router>
      </Provider>
    );
  }
}

export default App;
