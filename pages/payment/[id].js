/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CardShadow, Button } from '../../components/atoms';
import Layout from '../../components/layout';
import { CardCheckout } from '../../components/molecules';
// import { Breakpoints } from '../../utils';
import { privateRoute } from '../../configs/routes/privateRoute';
import cookies from 'next-cookies';
import backendApi from '../../configs/api/backendApi';
import { useDispatch } from 'react-redux';
import { confirmationOrder } from '../../configs/redux/actions/orderAction';
import { useRouter } from 'next/router';
import swal from 'sweetalert';

const Payment = ({ order, token, isAdmin }) => {
  const [payment, setPayment] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  console.log(order);
  const handleConfirm = () => {
    if (isAdmin) {
      const total = order[0].subtotal + 20000 + 10000;
      const data = {
        id_user: order[0].id_user,
        total: order[0].total,
        subtotal: order[0].subtotal,
        payment: order[0].payment,
        status_payment: 'paid',
      };
      dispatch(confirmationOrder(data, order[0].id_order, token))
        .then((res) => {
          swal('Success', 'Success confirm a payment', 'success');
          router.push(`/`);
        })
        .catch((err) => {
          swal('Error', 'Failed making a payment, please ask admin for help', 'error');
        });
    } else {
      const total = order[0].subtotal + 20000 + 10000;
      const data = {
        id_user: order[0].id_user,
        total: total,
        subtotal: order[0].subtotal,
        payment: payment,
        status_payment: order[0].status_payment,
      };
      dispatch(confirmationOrder(data, order[0].id_order, token))
        .then((res) => {
          swal('Success', 'Success making a payment, please wait for confirmation from admin', 'success');
          router.push(`/`);
        })
        .catch((err) => {
          swal('Error', 'Failed making a payment, please ask admin for help', 'error');
        });
    }
  };
  return (
    <Styles>
      <Layout isAuth={true} active="cart" title="Payment">
        <div className="wrapper">
          <div className="container">
            <div className="row row-wrapper">
              <div className="col col-lg-7 col-md-8">
                {!isAdmin && (
                  <h4 className="fc-white fs-40 fw-bold title">
                    Checkout your <br /> item now!
                  </h4>
                )}
                {isAdmin && (
                  <h4 className="fc-white fs-40 fw-bold title">
                    Finish your <br /> customer order now.
                  </h4>
                )}
                <CardShadow className="card-left-side">
                  {!isAdmin && <h1 className="f-poppins fs-35 fc-brown fw-bold">Order Summary</h1>}
                  {isAdmin && <h1 className="f-poppins fs-35 fc-brown fw-bold">Dine in for {order[0].display_name}</h1>}
                  {order.map((item) => (
                    <CardCheckout
                      className="card-product"
                      image={item.image_product}
                      productname={item.name_product}
                      qty={`${item.quantity}x`}
                      price={`IDR ${item.price * item.quantity}`}
                      size={`${item.size_order}`}
                    />
                  ))}
                  <hr />
                  <div className="text-detail">
                    <div className="row">
                      <div className="col">
                        <p className="f-poppins fs-20 subtotal">SUBTOTAL</p>
                        <p className="f-poppins fs-20 tax">TAX & FEES</p>
                        <p className="f-poppins fs-20 shipping">SHIPPING</p>
                      </div>
                      <div className="col price">
                        <p className="f-poppins fs-20">IDR {order[0].subtotal}</p>{' '}
                        <p className="f-poppins fs-20">IDR 20.000</p> <p className="f-poppins fs-20">IDR 10.000</p>
                      </div>
                      <div className="total-wrap d-flex">
                        <h2 className="fs-30 fw-bold f-poppins fc-dark-brown">Total</h2>
                        <h2 className="mr-126 p-2 fs-30 fw-bold f-poppins fc-dark-brown">
                          RP. {order[0].subtotal + 20000 + 10000}
                        </h2>
                      </div>
                    </div>
                  </div>
                </CardShadow>
                <div className="hidden">You can't see me</div>
              </div>
              <div className="col col-lg-5 col-md-6">
                <div className={isAdmin && `hidden-div`}>
                  <div className="title-wrapper">
                    <h5 className="fc-white fs-25 fw-700 ">Address Detail</h5>

                    <Link href="/ProfileUser">
                      <a className="edit-text">
                        <h5 className="fc-white fs-15 fw-700 edit">Edit</h5>
                      </a>
                    </Link>
                  </div>
                  <div className="first-section">
                    <CardShadow className="right-side">
                      <p className="f-poppins fs-20 fw-700 first-p">
                        <b>Delivery</b> to {order[0].display_name}
                      </p>
                      <hr />
                      <p className="f-poppins fs-20 fw-400  second-p">{order[0].address}</p>
                      <hr />
                      <p className="f-poppins fs-20 fw-400  second-p">{order[0].phone}</p>
                    </CardShadow>
                  </div>
                </div>
                <div className="second-title-wrapper">
                  <h5
                    className={isAdmin ? 'payment-style fc-white fs-25 fw-700' : `fc-white fs-25 fw-700 payment-text`}
                  >
                    Payment Method
                  </h5>
                </div>
                <div className="payment-section">
                  <CardShadow className="right-side payment">
                    <div className="first-payment">
                      <input
                        id="creditcard"
                        className="checkmark bg_brown"
                        type="radio"
                        name="radio"
                        value="Card"
                        onChange={handlePayment}
                      />
                      <img src="/ccicon.png" alt="" />
                      <p className="f-poppins fs-20 fw-200">Card</p>
                    </div>
                    <hr />
                    <div className="second-payment">
                      <input
                        id="bank"
                        className="checkmark bg_brown"
                        type="radio"
                        name="radio"
                        value="Bank Account"
                        onChange={handlePayment}
                      />
                      <img src="/Bankicon.png" alt="" />
                      <p className="f-poppins fs-20 fw-200">Bank Account</p>
                    </div>
                    <hr />
                    <div className="third-payment">
                      <input
                        id="cod"
                        className="checkmark bg_brown"
                        type="radio"
                        name="radio"
                        value="Cash on Delivery"
                        onChange={handlePayment}
                      />
                      <img src="/Deliverylogo.png" alt="" />
                      <p className="f-poppins fs-20 fw-200">Cash on Delivery</p>
                    </div>
                  </CardShadow>
                </div>
                <Button className="button" radius="radius-20" color="choco-shadow" onClick={handleConfirm}>
                  {isAdmin ? `Mark as done` : `Confirm and Pay`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Styles>
  );
};

export const getServerSideProps = privateRoute(async (ctx) => {
  try {
    const id = ctx.params.id;
    const token = await cookies(ctx).token;
    const role = await cookies(ctx).user_role;
    let isAdmin = '';
    if (role === 'admin') {
      isAdmin = true;
    }
    const { data } = await backendApi.get(`orders/order/${id}`, {
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    });
    const dataOrder = data.data;
    // console.log(dataOrder)
    // console.log(data);
    // throw new Error('error')
    return {
      props: {
        order: dataOrder,
        role: role,
        token: token,
        isAdmin: isAdmin,
      },
    };
  } catch (error) {
    // console.log(error);
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

export default Payment;
const Styles = styled.div`
  box-sizing: border-box;
  .wrapper {
    background-image: url('/paymentBg.png');
    @media screen and (max-width: 320px) {
      background-image: none;
    }
    .row-wrapper {
      .title {
        padding-top: 114px;
        margin-bottom: 41px;
        @media screen and (max-width: 320px) {
          color: Black;
        }
      }
      .card-left-side {
        width: 487px;
        height: 737px;
        @media screen and (max-width: 992px) {
          width: 420px;
          height: 600px;
        }
        @media screen and (max-width: 320px) {
          width: 100%;
          height: 600px;
        }
        h1 {
          text-align: center;
          padding-top: 65px;
          margin-bottom: 80px;
          @media screen and (max-width: 992px) {
            font-size: 25px;
            margin-bottom: 30px;
          }
        }
        .card-product {
          padding: 19px 43px;
          /* background-color: #6A4029; */
          @media screen and (max-width: 992px) {
            font-size: 25px;
          }
        }
        hr {
          margin: 19px 43px;
        }
        .text-detail {
          padding-top: 18px;
          padding-left: 47px;
          .total-wrap {
            gap: 9rem;
            h2 {
              @media screen and (max-width: 992px) {
                font-size: 24px;
              }
              @media screen and (max-width: 320px) {
                font-size: 15px;
                gap: 5rem;
              }
            }
          }
          .subtotal {
            @media screen and (max-width: 992px) {
              font-size: 16px;
            }
            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
            @media screen and (max-width: 320px) {
              font-size: 13px;
            }
          }
          .tax {
            @media screen and (max-width: 992px) {
              font-size: 16px;
            }
            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
            @media screen and (max-width: 320px) {
              font-size: 13px;
            }
          }
          .shipping {
            @media screen and (max-width: 992px) {
              font-size: 16px;
            }
            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
            @media screen and (max-width: 320px) {
              font-size: 13px;
            }
          }
        }
        .price p {
          @media screen and (max-width: 320px) {
            font-size: 13px;
          }
        }
      }
      .hidden {
        visibility: hidden;
        width: 50px;
        @media screen and (max-width: 768px) {
          margin-left: auto;
        }
      }
      .right-side {
        width: 454px;
        height: 230px;
        margin-bottom: 40px;
        @media screen and (max-width: 992px) {
          width: 390px;
          height: 230px;
        }
        @media screen and (max-width: 768px) {
          width: 320px;
          height: 230px;
        }
        @media screen and (max-width: 320px) {
          width: 100%;
          height: 230px;
        }
        .first-p {
          /* padding: 32px 43px 0; 
                 */
          padding-top: 32px;
          padding-right: 43px;
          padding-left: 43px;
          padding-bottom: 0;
          @media screen and (max-width: 992px) {
            font-size: 18px;
          }
          @media screen and (max-width: 320px) {
            font-size: 14px;
          }
        }
        hr {
          /* margin: 19px 43px;  */
          margin-left: 43px;
          margin-right: 43px;
          margin-bottom: 2px;
        }
        .second-p {
          padding: 10px 43px 0;
          @media screen and (max-width: 992px) {
            font-size: 18px;
          }
          @media screen and (max-width: 320px) {
            font-size: 14px;
          }
        }
      }
      .title-wrapper {
        padding-top: 210px;
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
        @media screen and (max-width: 768px) {
          padding-top: 0;
        }
        .edit-text {
          text-decoration: none;
          margin-left: auto;
          @media screen and (max-width: 768px) {
            margin-left: 195px;
          }
          @media screen and (max-width: 320px) {
            margin-left: 75px;
          }
        }
      }
      .payment-text {
        @media screen and (max-width: 320px) {
          color: black;
        }
      }
      .payment-style {
        margin-top: 220px;
        padding-top: 10px;
      }
      .payment-section {
        .payment {
          .first-payment {
            display: flex;
            padding: 16px 35px 0;
            .checkmark {
              height: 25px;
              width: 25px;
              /* background-color: red; */
              -webkit-appearance: none;
              border-radius: 50%;
              vertical-align: middle;
              outline: none;
              cursor: pointer;
              border: 2px solid #fff;
              margin-top: 5px;
              @media screen and (max-width: 992px) {
                height: 22px;
                width: 22px;
              }
              @media screen and (max-width: 992px) {
                height: 18px;
                width: 18px;
              }
            }
            .bg_brown {
              background-color: white;
              border: 1px solid #6a4029;
            }
            .bg_brown:checked {
              box-shadow: 0px 0px 0px 1px #6a4029;
              border: 5px solid #fff;
              background-color: #6a4029;
            }
            img {
              margin-left: 10px;
              width: 40px;
              height: 40px;
              @media screen and (max-width: 992px) {
                height: 38px;
                width: 38px;
              }
            }
            p {
              margin-left: 10px;
              @media screen and (max-width: 992px) {
                font-size: 19px;
              }
              @media screen and (max-width: 992px) {
                font-size: 15px;
              }
            }
          }
          .second-payment {
            padding: 16px 35px 0;
            display: flex;
            .checkmark {
              height: 25px;
              width: 25px;
              /* background-color: red; */
              -webkit-appearance: none;
              border-radius: 50%;
              vertical-align: middle;
              outline: none;
              cursor: pointer;
              border: 2px solid #fff;
              margin-top: 5px;
              @media screen and (max-width: 992px) {
                height: 22px;
                width: 22px;
              }
            }
            .bg_brown {
              background-color: white;
              border: 1px solid #6a4029;
            }
            .bg_brown:checked {
              box-shadow: 0px 0px 0px 1px #6a4029;
              border: 5px solid #fff;
              background-color: #6a4029;
            }
            img {
              margin-left: 10px;
              width: 40px;
              height: 40px;
              @media screen and (max-width: 992px) {
                height: 38px;
                width: 38px;
              }
            }
            p {
              margin-left: 10px;
              @media screen and (max-width: 992px) {
                font-size: 19px;
              }
              @media screen and (max-width: 992px) {
                font-size: 15px;
              }
            }
          }
          .third-payment {
            padding: 16px 35px 0;
            display: flex;
            .checkmark {
              height: 25px;
              width: 25px;
              /* background-color: red; */
              -webkit-appearance: none;
              border-radius: 50%;
              vertical-align: middle;
              outline: none;
              cursor: pointer;
              border: 2px solid #fff;
              margin-top: 5px;
              @media screen and (max-width: 992px) {
                height: 22px;
                width: 22px;
              }
            }
            .bg_brown {
              background-color: white;
              border: 1px solid #6a4029;
            }
            .bg_brown:checked {
              box-shadow: 0px 0px 0px 1px #6a4029;
              border: 5px solid #fff;
              background-color: #6a4029;
            }
            img {
              margin-left: 10px;
              width: 40px;
              height: 40px;
              @media screen and (max-width: 992px) {
                height: 38px;
                width: 38px;
              }
            }
            p {
              margin-left: 10px;
              @media screen and (max-width: 992px) {
                font-size: 19px;
              }
              @media screen and (max-width: 992px) {
                font-size: 15px;
              }
            }
          }
        }
      }
      .button {
        width: 452px;
        height: 84px;
        font-size: 20px;
        @media screen and (max-width: 992px) {
          width: 400px;
          height: 84px;
        }
        @media screen and (max-width: 768px) {
          width: px;
          height: 84px;
        }
        @media screen and (max-width: 320px) {
          width: 100%;
          height: 84px;
        }
      }
    }
    .hidden-div {
      display: none;
    }
  }
`;
