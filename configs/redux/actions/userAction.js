import axios from 'axios';

export const login = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    const dataBody = { email: data.email, password: data.password };
    // console.log(dataBody);
    // console.log(process.env.REACT_APP_API_URL)
    return axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, dataBody, { withCredentials: true })
      .then((res) => {
        const result = res.data.data;
        // console.log(result.role);
        // console.log(result.status);
        if (result.status === 1) {
          dispatch({ type: 'LOGIN_USER', payload: result });
          localStorage.setItem('token', result.token);
          resolve(result);
          return result;
        } else if (result.status === 0) {
          reject(new Error(`your account has not been activated`));
        } else {
          reject(new Error(`Email/Password wrong`));
        }
      })
      .catch((err) => {
        console.log(err.message);
        reject(err.message);
      });
  });
};
export const signup = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, data)
      .then((res) => {
        const result = res.data.data;
        // console.log(result.role);
        // console.log(result.status);
        dispatch({ type: 'SIGNUP_USER', payload: result });
        // localStorage.setItem('token', result.token)
        resolve(result);
        return result;
      })
      .catch((err) => {
        reject(err.response.data.error.message);
      });
  });
};

export const sendMail = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    // console.log(data);
    return axios
      .post(`${process.env.REACT_APP_API_URL}/users/confirm`, data)
      .then((res) => {
        dispatch({ type: 'FORGOT_USER', payload: data });
        resolve(res);
        return res;
      })
      .catch((err) => {
        reject(err.response.data.error.message);
      });
  });
};
export const renewPass = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    const dataPass = {
      password: data.password,
    };
    return axios
      .put(`${process.env.REACT_APP_API_URL}/users/forgot/${data.email}`, dataPass)
      .then((res) => {
        dispatch({ type: 'RENEW_PASS', payload: { email: data.email, password: data.password } });
        resolve(res);
        return res;
      })
      .catch((err) => {
        reject(err.response.data.error.message);
      });
  });
};
export const editProfile = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // console.log(data);
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('gender', data.gender);
    formData.append('profilePicture', data.profilePicture[0], data.profilePicture[0].name);
    // console.log(formData)
    return axios
      .put(`${process.env.REACT_APP_API_URL}/users/${data.id}`, formData, config)
      .then((res) => {
        const result = res.data.data;
        // console.log(result.role)
        // console.log(result.status)
        dispatch({ type: 'UPDATE_USER', payload: result });
        // localStorage.setItem('token', result.token)
        resolve(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
        reject(err.response);
      });
  });
};
export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT', payload: '' });
}