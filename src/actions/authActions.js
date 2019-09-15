import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { SET_USER, LOAD_USER } from './types';
import { clearErrors, getErrors } from './errorActions';
import API_URL from '../utils/API';

export const setUser = decoded => ({ type: SET_USER, payload: decoded });

export const login = userData => async (dispatch) => {
  dispatch({ type: LOAD_USER, payload: true });
  try {
    dispatch(clearErrors());
    const returningUser = await axios.post(`${API_URL}/auth/signin`, userData);

    const { token } = returningUser.data.data;

    setAuthToken(token);
    const decoded = jwtDecode(token);

    dispatch(setUser(decoded));
    localStorage.setItem('jwtToken', token);

    return dispatch({ type: LOAD_USER, payload: false });
  } catch (error) {
    dispatch({ type: LOAD_USER, payload: false });
    return dispatch(getErrors(error.response.data.error));
  }
};

export const signUp = (userData, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER, payload: true });
  try {
    dispatch(clearErrors());
    const newUser = await axios.post(`${API_URL}/auth/signup`, userData);

    const { token } = newUser.data.data;

    setAuthToken(token);
    const decoded = jwtDecode(token);

    dispatch(setUser(decoded));
    localStorage.setItem('jwtToken', token);
    history.push('/userdashBoard');

    return dispatch({ type: LOAD_USER, payload: false });
  } catch (error) {
    dispatch({ type: LOAD_USER, payload: false });
    return dispatch(getErrors(error.response.data.error));
  }
};
