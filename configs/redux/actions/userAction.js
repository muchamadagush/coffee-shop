import { actionTypes } from "../constants/actionTypes";
import backendApi from "../../api/backendApi";
import Swal from 'sweetalert';


export const register = (data) => (dispatch) => {
  backendApi
    .post("register", data)
    .then((res) => {
      // console.log(res);
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
      router.push('/')
    })
    .catch((error) => {
      dispatch({ type: actionTypes.EROR_LOGIN, payload: error.response.data.message })
      Swal("Opps...", `${error.response.data.message}`, "error")
    })
}

export const updateuser = (data, id) => (dispatch) =>{

    const formData = new FormData();
    formData.append('email', formData.email);
    formData.append('first_name', formData.address);
    formData.append('last_name', formData.phone_number);
    formData.append('email', formData.display_name);
    formData.append('address', formData.datebirth);
    formData.append('phone', formData.phone);
    formData.append('dateOfBirth', formData.datebirth);
    formData.append('image', formData.image);
    formData.append('gender', formData.gender);

  return backendApi.put(`users/${id}`, data, formData,{
    'Authorization' :{
      token : token.cookies
    }
  })
  .then((res)=>{
    const resultData = res.data.data
    dispatch =({type: actionTypes.UPDATE_USER, payload: resultData})
    Swal("Success!", "Update data success","success")
  })
  .catch((error)=>{
    Swal("Opps...", `${error.response.data.message}`, "error")
  })
}