import { actionTypes } from "../constants/actionTypes";
import backendApi from "../../api/backendApi";
import Swal from 'sweetalert';

export const register = (data) => (dispatch) => {
  backendApi
    .post("register", data)
    .then((res) => {
      console.log(res);
      Swal("Register success!", "Please check your email for verify","success")
    })
    .catch((err) => {
      Swal("Opps...", `${err.response.data.message}`, "error")
    })
}

export const login = (data, router) => (dispatch) => {
  backendApi.post(`/login`, data, {
    withCredentials: true
  })
    .then((res) => {
      const resultLogin = res.data.user
      console.log(resultLogin)
      dispatch({ type: actionTypes.USER_LOGIN, payload: resultLogin })
      Swal("Success!", "Login success","success")
      router.push('/product')
    })
    .catch((error) => {
      dispatch({ type: actionTypes.EROR_LOGIN, payload: error.response.data.message })
      Swal("Opps...", `${error.response.data.message}`, "error")
    })
}

export const updateuser = (data, id) => (dispatch) =>{
  backendApi.put(`users/${id}`, data)
  .then((res)=>{
      const resultData = res.data.data
      console.log(resultData);
    })
  .catch((error)=>{
    Swal("Opps...", `${err.response.data.message}`, "error")
  })
}

export const forgotPasswordUser = (data, history) => (dispatch) => {
   backendApi
     .post(`/forgotpassword`, data)
     .then((res) => {
        const resultData = res.data.data;
       console.log(resultData);
       Swal(
         "Success!",
         "Success Forgot Password. Please check email to reset your password",
         "success"
       );
       history.push(`/auth/login`);
     })
     .catch((error) => {
       Swal("Opps...", `${err.response.data.message}`, "error");
     });
};

export const resetPasswordUser = (data, token, history) => (dispatch) => {
  // console.log(data);
  axios
    .post(`${process.env.REACT_APP_BASE_URL}auth/resetPassword/${token}`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data.password,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_RESETPASSWORD", payload: dataUser });
      //   history.push(`/new-password`);
       Swal("Success!", "success reset password", "success");
      history.push(`/auth/login`);
    })
    .catch((error) => {
       Swal("Opps...", `${err.response.data.message}`, "error");
    });
};