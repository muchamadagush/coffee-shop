import { actionTypes } from "../constants/actionTypes";
import backendApi from "../../api/backendApi";
import swal from 'sweetalert';
import { useRouter } from 'next/router';

export const getOrdersHistoryAdmin = () => (dispatch) => {
  backendApi.get('orders', {
    withCredentials: true
  })
  .then((res) => {
    const data = res.data.data
    dispatch({ type: actionTypes.GET_ORDER_HISTORY_ADMIN, payload: data })
  })
  .catch((error) => {
    console.log(error.response.data.message)
  })
}

export const getOrdersHistoryUser = (userId) => (dispatch) => {
  backendApi.get(`orders/user/${userId}`, {
    withCredentials: true
  })
  .then((res) => {
    const data = res.data.data
    console.log(data)
    dispatch({ type: actionTypes.GET_ORDER_HISTORY_USER, payload: data })
  })
  .catch((error) => {
    console.log(error.response.data.message)
  })
}

export const deleteHistoryOrders = (data, userId) => (dispatch) => {
  backendApi.patch(`orders`, data, {
    withCredentials: true
  })
  .then((res) => {
    backendApi.get(`orders/user/${userId}`, {
      withCredentials: true
    })
    .then((res) => {
      const data = res.data.data
      dispatch({ type: actionTypes.GET_ORDER_HISTORY_USER, payload: data })
    })

    swal('Success', 'Success delete history order!', 'success');
  })
  .catch((error) => {
    console.log(error.response.data.message)
  })
}

export const addOrder = (data, id, token) => () => {
  const detailproducts = data.cart.map((item) => {
    const id_product = item.data.id_product;
    const size_order = item.size;
    const quantity = item.amount;
    const order_time = item.time;
    const delivery_method = item.delivery;
    const dataProduct = { id_product, size_order, quantity, order_time, delivery_method };
    return { ...dataProduct };
  });
  const dataOrder = { id_user: id, subtotal: data.total, total: 0, payment: '', detailproducts };
  return new Promise((resolve, reject) => {
    backendApi
      .post('orders/', dataOrder, {
        withCredentials: true,
        headers: {
          Cookie: 'token=' + token,
        },
      })
      .then((res) => {
        const idOrder = res.data.data.id_order;
        swal('Success', 'Success checkout', 'success');
        resolve(idOrder);
      })
      .catch((err) => {
        console.log(err);
        swal('Error', `${err.message}`, 'error');
        reject(err);
      });
  });
};

export const confirmationOrder = (data, id, token) => () => {
  return new Promise((resolve, reject) => {
    backendApi
      .put(`orders/${id}`, data, {
        withCredentials: true,
        headers: {
          Cookie: 'token=' + token,
        },
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        swal('Error', `${err.message}`, 'error');
        reject(err)
      });
  });
};
