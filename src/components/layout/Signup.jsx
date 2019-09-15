import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Loading from '../common/Loading';
import { signUp } from '../../actions/authActions';
import '../../assets/css/form.css';

class Signup extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    history: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: '',
      password2: '',
      errors: {},
      passwordMatchError: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      firstName, lastName, email, address, password, password2
    } = this.state;
    this.setState({ passwordMatchError: {} });

    if (password !== password2) {
      return this.setState({ passwordMatchError: { status: 401, error: 'Passwords must match' } });
    }

    const userData = {
      firstName, lastName, email, address, password
    };
    return this.props.signUp(userData, this.props.history);
  }

  renderLoading = () => {
    const { loading } = this.props.auth;
    const loadingGIF = loading ? <Loading /> : null;
    const signUpBtn = loading ? (
      <Input
        type="submit"
        name="signin"
        id=""
        value="LOADING..."
        className="dark-grey"
        disabled={true}
      />
    ) : (
      <Input
        type="submit"
        name="signin"
        id="login-btn"
        value="SIGN UP"
        className="blue"
        disabled={false}
      />
    );

    return { loadingGIF, signUpBtn };
  }

  render() {
    const { errors, passwordMatchError } = this.state;
    const { loadingGIF, signUpBtn } = this.renderLoading();
    return (
      <div className="wrapper" style={{ marginTop: '50px' }}>
        <div className="signup-container">
          <h3 className="heading">SIGN UP</h3>
          <div className="form-wrapper">
            <form className="login-form" onSubmit={this.onSubmit}>
              <label htmlFor="firstName">First Name</label>
              <Input
                type="text"
                name="firstName"
                placeholder="Ciroma"
                id="first-name"
                value={this.state.firstName}
                onChange={this.onChange}
                required={true}
              />
              <label htmlFor="lastName">Last Name</label>
              <Input
                type="text"
                name="lastName"
                placeholder="Adekunle"
                id="last-name"
                value={this.state.lastName}
                onChange={this.onChange}
                required={true}
              />
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                id="user-email"
                value={this.state.email}
                onChange={this.onChange}
                required={true}
              />
              <label htmlFor="address">Address</label>
              <Input
                type="text"
                name="address"
                placeholder="35 Broad Street, Lekki Lagos"
                id="address"
                value={this.state.address}
                onChange={this.onChange}
                required={true}
              />
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="***********"
                id="user-password"
                value={this.state.password}
                onChange={this.onChange}
                required={true}
              />
              <label htmlFor="password2"> Confirm Password</label>
              <Input
                type="password"
                name="password2"
                placeholder="***********"
                id="confirm-password"
                value={this.state.password2}
                onChange={this.onChange}
                required={true}
              />
              <br />
              <div className="input-field-button">{signUpBtn}</div>
              <br />
              <div className="errors">
                <p className="red center">
                  {passwordMatchError.error}
                  {errors.payload}
                </p>
                {loadingGIF}
              </div>
              <br />
              <div className="signup-login-link">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { signUp })(Signup);
