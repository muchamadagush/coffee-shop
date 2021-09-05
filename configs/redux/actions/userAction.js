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
  backendApi.post(`login`, data)
    .then((res) => {
      const resultLogin = res.data.data
      dispatch({ type: actionTypes.USER_LOGIN, payload: resultLogin })
      Swal("Success!", "Login success","success")
      router.push('/')
    })
    .catch((error) => {
      dispatch({ type: actionTypes.EROR_LOGIN, payload: error.response.data.message })
      Swal("Opps...", `${error.response.data.message}`, "error")
    })
}