
import api from '../../utils/api';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await api.post('/auth/register', userData);
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: error.response.data,
    });
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await api.post('/auth/login', credentials);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT_USER' });
};
