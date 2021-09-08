import { actionTypes } from '../constants/actionTypes';
import backendApi from '../../api/backendApi';
import swal from 'sweetalert';

export const addProduct = (data, size, delivery, token) => (dispatch) => {
  const formData = new FormData();
  formData.append('name_product', data.name_product);
  formData.append('price', data.price);
  formData.append('stock', data.stock);
  formData.append('description', data.description);
  formData.append('size', size);
  formData.append('delivery', delivery);
  formData.append('image', data.image_product);
  formData.append('category_id', data.category_id);
  formData.append('start_order', data.start_order);
  formData.append('stop_order', data.stop_order);
  backendApi
    .post('products/', formData, {
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    })
    .then((res) => {
      swal('Success', 'Product successfuly added to list', 'success');
    })
    .catch((err) => swal('Error', `${err.message}`, 'error'));
};

export const addToCart = (data, size, delivery, amount, time) => (dispatch) => {
  const dataCart = { data, size, delivery, amount, time };
  dispatch({ type: actionTypes.ADD_CART, payload: dataCart });
  swal(`Success`, `Success adding ${data.name_product} to cart`, 'success');
};

export const editProduct = (data, id, token) => (dispatch) => {
  const formData = new FormData();
  formData.append('name_product', data.name_product);
  formData.append('price', data.price);
  formData.append('stock', data.stock);
  formData.append('description', data.description);
  formData.append('size', data.size);
  formData.append('delivery', data.delivery);
  formData.append('image', data.image_product);
  formData.append('category_id', data.category_id);
  formData.append('start_order', data.start_order);
  formData.append('stop_order', data.stop_order);
  console.log(id)
  backendApi
    .put(`products/${id}`, formData, {
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    })
    .then((res) => {
      swal('Success', 'Product edited successfuly', 'success');
    })
    .catch((err) => swal('Error', `${err.message}`, 'error'));
};
