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