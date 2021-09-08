import backendApi from '../../api/backendApi';
import swal from 'sweetalert';
import { useRouter } from 'next/router';

export const addOrder = (data, id, token) => () => {
  // console.log(data, id, token)
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
