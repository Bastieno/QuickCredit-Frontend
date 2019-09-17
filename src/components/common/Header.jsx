import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class Header extends Component {
  onLogoutClick = () => this.props.logout();

  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated ? (
      <div className="bar top topnav" >
        <Link to="/">
          <span className="bar-item large text-orange" >QuickCredit</span>
        </Link>
        <button className="bar-item right button hide-medium hide-large hover-none">
          <i className="fa fa-bars"></i>
        </button>
        <nav className="nav-menu hide-small">
          <Link to="/" onClick={this.onLogoutClick}>
           <span className="bar-item right" >Logout</span>
          </Link>
        </nav>
      </div>
    )
      : (
      <div className="bar top topnav" >
        <Link to="/">
          <span className="bar-item large text-orange" >QuickCredit</span>
        </Link>
        <button className="bar-item right button hide-medium hide-large hover-none">
          <i className="fa fa-bars"></i>
        </button>
        <nav className="nav-menu hide-small">
          <Link to="/login">
           <span className="bar-item right" >Login</span>
          </Link>
          <Link to="/signup">
            <span className="bar-item right" >Signup</span>
          </Link>
        </nav>
      </div>
      );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logout })(Header);
