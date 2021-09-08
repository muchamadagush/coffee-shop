import { actionTypes } from "../constants/actionTypes";
import backendApi from "../../api/backendApi";
import Swal from 'sweetalert';


export const register = (data,router) => (dispatch) => {
  console.log(data);
  backendApi
  .post("/register", data)
    .then((res) => {
      // console.log(res);
      Swal("Register success!", "Please check your email for verify","success")
       router.push(`/login`);
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

export const updateuser = (data, id, token) => (dispatch) =>{

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
    backendApi.put(`/users/${id}`, formData,{
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
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
export const getProfile = (token, id) => (dispatch) =>{
  backendApi.get(`users/${id}`, {
    withCredentials:true,
    headers:{
      Cookie: 'token=' + token
    },
  })
  .then((res)=>{
    const Result = res.data.data[0]
    console.log(Result);
    dispatch({type: actionTypes.GET_USER, payload: Result})
  })
  .catch((error)=>{
    Swal("Opps...", `${error.response.data.message}`, "error")
  })
}

export const forgotPasswordUser = (data, router) => (dispatch) => {
   backendApi
     .post(`/forgotpassword`, data)
     .then((res) => {
        const resultData = res.data.data;
       console.log(resultData);
       router.push(`/login`);
       Swal(
         "Success!",
         "Success Forgot Password. Please check email to reset your password",
         "success"
       );
     })
     .catch((error) => {
       Swal("Opps...", `${err.response.data.message}`, "error");
     });
};

export const resetPasswordUser = (data, token, history) => (dispatch) => {
const newPassword={newPassword:data}
   backendApi
     .post(`/resetPassword/${token}`, newPassword)
     .then((res) => {
       const resultData = res.data.data;
       console.log(resultData);
       history.push(`/login`);
       Swal("Success!", "success reset password", "success");
     })
     .catch((error) => {
       Swal("Opps...", `${err.response.data.message}`, "error");
     });
};
