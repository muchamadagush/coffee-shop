import { actionTypes } from "../constants/actionTypes";
import backendApi from "../../api/backendApi";

export const getOrdersHistoryAdmin = () => (dispatch) => {
  backendApi.get('/orders', {
    withCredentials: true
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.log(error.response.data.message)
  })
}

export const getOrdersHistoryUser = (userId) => (dispatch) => {
  backendApi.get(`/orders/user/${userId}`, {
    withCredentials: true
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.log(error.response.data.message)
  })
}

export const deleteHistoryOrders = (data) => (dispatch) => {
  backendApi.patch(`/orders`, data, {
    withCredentials: true
  })
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error.response.data.message)
  })
}