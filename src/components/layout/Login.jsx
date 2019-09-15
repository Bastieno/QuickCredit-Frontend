import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Loading from '../common/Loading';
import { login } from '../../actions/authActions';
import '../../assets/css/form.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    }

    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/dashboard');
      return null;
    }
    return null;
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const userData = { email, password };
    this.props.login(userData);
    this.setState({ email: '', password: '' });
  }

  renderLoading = () => {
    const { loading } = this.props.auth;
    const loadingGIF = loading ? <Loading /> : null;
    const loginBtn = loading ? (
      <Input
        type="submit"
        name="signin"
        id=""
        value="LOADING..."
        className="btn-active"
        disabled={true}
      />
    ) : (
      <Input
        type="submit"
        name="signin"
        id="login-btn"
        value="LOGIN"
        className="button-active"
        disabled={false}
      />
    );

    return { loadingGIF, loginBtn };
  }

  // Todo: Make a timeout to the error message
  render() {
    const { errors } = this.state;
    const { loadingGIF, loginBtn } = this.renderLoading();
    return (
      <div className="wrapper" style={{ marginTop: '50px' }}>
        <div className="login-container">
          <h3 className="heading">LOGIN</h3>
          <div className="form-wrapper">
            <form className="login-form" onSubmit={this.onSubmit}>
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

              <br />
              <div className="input-field-button">{loginBtn}</div>
              <br />
              <div className="errors">
                <p className="red center" id="login-error">
                  {errors.payload}
                </p>
                {loadingGIF}
              </div>
              <br />
              <div className="forgot-password">
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>
              <div className="signup-login-link">
                <p>
                  Don&apos;t have an account? <Link to="/signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
