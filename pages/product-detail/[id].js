/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Layout from '../../components/layout';
import { Button, CardShadow } from '../../components/atoms';
import Style from './productDetail.module.css';
import styled from 'styled-components';
import { privateRoute } from "../../configs/routes/privateRoute";
import { useState } from 'react';
import PlusMinus from '../../components/base/plusMinus/PlusMinus';
import { useRouter } from 'next/dist/client/router';
import swal from 'sweetalert';
import cookies from 'next-cookies';
import backendApi from '../../configs/api/backendApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../configs/redux/actions/productAction';
import { addOrder } from '../../configs/redux/actions/orderAction';
import { Breakpoints } from '../../utils/breakpoints';
import { actionTypes } from '../../configs/redux/constants/actionTypes';
const ProductDetail = ({ product, role, token, idUser }) => {
  const [size, setSize] = useState(null);
  const [totalItem, setTotalItem] = useState(1);
  const [time, setTime] = useState(null);
  const [deliveryMethod, setdeliveryMethod] = useState(null);
  const [timeNotError, setTimeNotError] = useState(null);
  const router = useRouter();
  const start_time = product.start_order.slice(0, 5);
  const stop_time = product.stop_order.slice(0, 5);
  const sizeProduct = product.size.split(',');
  const deliveryProduct = product.delivery.split(',');
  const cart = useSelector((state) => state.product);
  const order = useSelector(state => state.product)
  const dispatch = useDispatch();
  const handleArraySize = (e) => {
    setSize(e.target.value);
  };
  const handleArrayDelivery = (e) => {
    setdeliveryMethod(e.target.value);
  };
  const handleEdit = () => {
    if (role === 'admin') {
      router.push(`/edit-product/${product.id_product}`);
    }
  };
  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, product cannot be recover',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        backendApi.delete(`products/${product.id_product}`, {
          withCredentials: true,
          headers: {
            Cookie: 'token=' + token,
          },
        });
        swal('Product has been deleted', {
          icon: 'success',
        });
        router.push('/');
      }
    });
  };
  const handleTime = (e) => {
    const start = start_time.slice(':');
    const stop = stop_time.slice(':');
    const timeUser = e.target.value;
    const checkTimeUser = timeUser.slice(':');
    if (checkTimeUser >= start && checkTimeUser <= stop) {
      setTimeNotError(true);
      setTime(e.target.value);
    } else {
      setTimeNotError(false);
    }
  };
  const handleCart = () => {
    if (deliveryMethod !== null && size !== null && totalItem !== 0 && timeNotError === true) {
      dispatch(addToCart(product, size, deliveryMethod, totalItem, time));
    } else {
      swal('Error', 'You need to choose delivery method, size, amount, and time', 'error');
    }
  };
  const handleCheckout = () => {
    dispatch(addOrder(order, idUser, token))
    .then((res) => {
      dispatch({ type: actionTypes.EMPTY_CART , payload: {} })
      router.push(`/payment/${res}`)
    })
    .catch()
  };
  
  return (
    <div>
      <Layout isAuth={true} active="product" title="Product Detail">
        <div className={Style.container}>
          <p className="f-poppins fs-20 fw-400 fc-black">
            Favorite {`&`} Promo {`>`} <span className={`fc-brown ${Style.productName}`}>{product.name_product}</span>
          </p>
          <Styles className={Style.content}>
            <div className={Style.left}>
              <div className={Style.imageContainer}>
                <img
                  src={product.image_product ? product.image_product : '/food1.png'}
                  alt="food"
                  className={Style.productImage}
                />
              </div>
              <CardShadow className="card">
                <p className="f-poppins fs-25 fw-700 fc-black">Delivery and Time</p>
                <div className="btn-collection">
                  {deliveryProduct.map((item) => (
                    <>
                      <input
                        value={item}
                        type="radio"
                        name="deliveryMethod"
                        id={item}
                        className={Style.inputSize}
                        onChange={handleArrayDelivery}
                      />
                      <label htmlFor={item} className={`fs-20 fw-700 fc-black ${Style.sizeButtonDelivery}`}>
                        {item}
                      </label>
                    </>
                  ))}
                </div>
                <div className={Style.inputTime}>
                  <p className="f-poppins fs-20 fw-400 fc-black">Set Time</p>
                  <input
                    type="time"
                    className="fs-15 fw-400"
                    id="timeInput"
                    placeholder="Enter time for reservation"
                    min={start_time}
                    max={stop_time}
                    onChange={handleTime}
                  />
                </div>
                <p className={timeNotError ? Style.inputSize : `f-poppins fs-14 fw-400 fc-black ${Style.alert}`}>
                  Please select your time between {start_time} - {stop_time}
                </p>
              </CardShadow>
            </div>
            <div className={Style.right}>
              <p className={`f-poppins fs-65 fw-900 fc-black ${Style.productName}`}>{product.name_product}</p>
              <p className="f-poppins fs-25 fw-400 fc-brown">{product.description}</p>
              <p className="f-poppins fs-25 fw-400 fc-brown">
                Delivery only on <span className="fw-700">Monday to friday </span>at{' '}
                <span className="fw-700">
                  {start_time} - {stop_time}
                </span>
              </p>
              <div className={Style.content}>
                <PlusMinus type="detail" maxAmount={product.stock} total={setTotalItem} />
                <p className="fs-35 fw-700 fc black">IDR {product.price}</p>
              </div>
              <div className="choice">
                <Button className="button" color="choco" onClick={handleCart}>
                  Add to Cart
                </Button>
                <Button className="button" color="shine" onClick={handleEdit}>
                  {role === 'admin' ? 'Edit Product' : 'Ask a Staff'}
                </Button>
                <div className={role === 'admin' ? null : Style.hide}>
                  <Button className="button" color="black" onClick={handleDelete}>
                    Delete Product
                  </Button>
                </div>
              </div>
            </div>
          </Styles>
          <div className={Style.bottomCard}>
            <CardShadow className="card">
              <div className={Style.sizeCard}>
                <p className="fs-25 fw-700 fc-black">Choose a size</p>
                <div className={Style.size}>
                  {sizeProduct.map((item) => (
                    <>
                      <input
                        type="radio"
                        name="size"
                        id={item}
                        value={item}
                        className={Style.inputSize}
                        onChange={handleArraySize}
                        placeholder={item}
                      />
                      <label htmlFor={item} className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                        {item}
                      </label>
                    </>
                  ))}
                </div>
              </div>
            </CardShadow>
            <div className={cart.cart.length !== 0 ? null : Style.checkoutHidden}>
              <CardShadow className={cart.cart ? 'card' : 'hidden'}>
                <div className={Style.checkoutBox}>
                  <div>
                    {cart.cart.map((item) => (
                      <div className={Style.checkoutCard}>
                        <div>
                          <img
                            src={item.data.image_product ? item.data.image_product : '/food1.png'}
                            alt="food"
                            className={Style.imgProduct}
                          />
                        </div>
                        <div className={Style.itemList}>
                          <p className={`fs-25 fw-900 fc-black ${Style.productName}`}>{item.data.name_product}</p>
                          <p className="fs-20 fw-400 fc-black">
                            x{item.data.amount} ({item.size})
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={Style.checkoutContainer}>
                    <p className="fs-25 fw-700 fc-black">Checkout</p>
                    <button className={Style.checkoutButton} onClick={handleCheckout}>
                      <img src="/arrow.svg" alt="arrow" />
                    </button>
                  </div>
                </div>
              </CardShadow>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export const getServerSideProps = privateRoute(async (ctx) => {
  try {
    const id = ctx.params.id;
    const token = await cookies(ctx).token;
    const role = await cookies(ctx).user_role;
    const idUser = await cookies(ctx).user_id;
    const { data } = await backendApi.get(`products/${id}`, {
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    });
    // console.log(data);
    // throw new Error('error')
    return {
      props: {
        product: data.data[0],
        role: role,
        token: token,
        idUser: idUser,
      },
    };
  } catch (error) {
    console.log(error);
    //cek
    // if (!ctx.req) {
    //   router.push('/history');
    // }
    // context.req -> untuk cek diserver kah
    if (ctx.req) {
      ctx.res.writeHead(301, {
        Location: '/',
        'Cache-Control': 'no-cache',
      });
      ctx.res.end();
    }
  }
});
const Styles = styled.div`
  .btn-collection {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: start;
    ${Breakpoints.lessThan('xsm')`
    flex-wrap: wrap;
    width: 100%;`}
    .button {
      padding: 6px 15px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      white-space: nowrap;
    }
  }
  .choice {
    display: flex;
    flex-direction: column;
    gap: 22px;
    .button {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      padding-bottom: 25px;
      padding-top: 25px;
    }
  }
  .card {
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .hidden {
      display: hidden;
    }
  }
`;
export default ProductDetail;


