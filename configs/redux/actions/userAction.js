import { actionTypes } from '../constants/actionTypes';
import backendApi from '../../api/backendApi';
import Swal from 'sweetalert';
import axios from 'axios';

export const register = (data, router) => (dispatch) => {
  console.log(data);
  backendApi
    .post('register', data)
    .then((res) => {
      // console.log(res);
      Swal('Register success!', 'Please check your email for verify', 'success');
      router.push(`/login`);
    })
    .catch((err) => {
      Swal('Opps...', `${err.response.data.message}`, 'error');
    });
};

export const login = (data, router) => (dispatch) => {
  backendApi
    .post("login",data, {
      withCredentials: true,
    })
    .then((res) => {
      const resultLogin = res?.data?.data;
      console.log(resultLogin);
      dispatch({ type: actionTypes.USER_LOGIN, payload: resultLogin });
      Swal("Success!", "Login success", "success");
      router.push("/product");
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: actionTypes.EROR_LOGIN,
        payload: error?.response?.data?.message,
      });
      Swal("Opps...", error?.response?.data?.message || `Login gagal`, "error");
    });
};

export const updateuser = (data, id, token) => (dispatch) => {
  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('display_name', data.display_name);
  formData.append('first_name', data.first_name);
  formData.append('last_name', data.last_name);
  formData.append('address', data.address);
  formData.append('phone', data.phone);
  formData.append('dateOfBirth', data.dateOfBirth);
  formData.append('image', data.image);
  formData.append('gender', data.gender);
  // console.log(data.image);
  console.log(data);
  backendApi
    .put(`users/${id}`, formData, {
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    })
    .then((res) => {
      const resultData = res.data.data;

      dispatch = { type: actionTypes.UPDATE_USER, payload: resultData };
      Swal('Success!', 'Update data success', 'success');
    })
    .catch((error) => {
      Swal('Opps...', `${error.response.data.message}`, 'error');
    });
};
export const getProfile = (token, id) => (dispatch) => {
  console.log(token);
  // const axiosConfig = {
  //   // crossDomain: true,
  //   // withCredentials: true,
  //   headers: {
  //     Accept: 'application/json,/',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'Cookie',
  //     Cookie: token,
  //   },
  // };
  backendApi
    .get(`users/${id}`,{
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    })
    // return axios({ method: 'get', url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`, headers: { Cookie: token } })
    .then((res) => {
      const Result = res.data.data[0];
      console.log(Result);
      dispatch({ type: actionTypes.GET_USER, payload: Result });
    })
    .catch((error) => {
      Swal('Opps...', `${error.response.data.message}`, 'error');
    });
};

export const getUsers = () => (dispatch) => {
  backendApi
    .get('users', {
      withCredentials: true,
    })
    .then((res) => {
      const users = res.data.data;
      dispatch({ type: actionTypes.GET_USERS, payload: users });
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

export const getUser = (id) => (dispatch) => {
  backendApi
    .get(`users/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      const user = res.data.data;
      dispatch({ type: actionTypes.GET_SELECTED_USER, payload: user });
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

export const forgotPasswordUser = (data, router) => (dispatch) => {
  backendApi
    .post(`forgotpassword`, data)
    .then((res) => {
      const resultData = res.data.data;
      console.log(resultData);
      router.push(`/login`);
      Swal('Success!', 'Success Forgot Password. Please check email to reset your password', 'success');
    })
    .catch((error) => {
      Swal('Opps...', `${err.response.data.message}`, 'error');
    });
};

export const resetPasswordUser = (data, token, history) => (dispatch) => {
  const newPassword = { newPassword: data };
  backendApi
    .post(`resetPassword/${token}`, newPassword)
    .then((res) => {
      const resultData = res.data.data;
      console.log(resultData);
      history.push(`/login`);
      Swal('Success!', 'success reset password', 'success');
    })
    .catch((error) => {
      Swal('Opps...', `${err.response.data.message}`, 'error');
    });
};
