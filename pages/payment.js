import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { CardShadow, Button } from '../components/atoms'
import Layout from '../components/layout'
import { CardCheckout } from '../components/molecules'


const Payment = () => {
    return (
        <Styles>
            <Layout isAuth={true} active="cart" login={true} title="Payment">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col col-7">
                                <h4 className="fc-white fs-40 fw-bold title" >
                                    Checkout your <br /> item now!
                                </h4>
                                <CardShadow className="card-left-side">
                                    <h1 className="f-poppins fs-35 fc-brown fw-bold">
                                        Order Summary
                                    </h1>
                                    <CardCheckout className="card-product" image="food1.png" productname="Hazelnut Latte" qty="1x" price="IDR 24.0" size="regular" />
                                    <CardCheckout className="card-product" image="food1.png" productname="Hazelnut Latte" qty="1x" price="IDR 24.0" size="regular" />
                                    <hr />
                                    <div className="text-detail">
                                        <div className="row">
                                            <div className="col col-7">
                                                <p className="f-poppins fs-20">
                                                    SUBTOTAL
                                                </p>
                                                <p className="f-poppins fs-20">
                                                    TAX & FEES
                                                </p>
                                                <p className="f-poppins fs-20">
                                                    SHIPPING
                                                </p>

                                            </div>
                                            <div className="col">
                                                <p className="f-poppins fs-20">
                                                    IDR 120.000
                                                </p> <p className="f-poppins fs-20">
                                                    IDR 120.000
                                                </p> <p className="f-poppins fs-20">
                                                    IDR 120.000
                                                </p>

                                            </div>
                                            <div className="total-wrap d-flex">
                                                <h2 className="fs-30 fw-bold f-poppins fc-dark-brown">
                                                    Total
                                                </h2>
                                                <h2 className="mr-126 p-2 fs-30 fw-bold f-poppins fc-dark-brown">
                                                    RP. 120.000
                                                </h2>
                                            </div>

                                        </div>
                                    </div>
                                </CardShadow>
                                <div className="hidden">
                                    You  can't see me
                                </div>
                            </div>
                            <div className="col col-5">
                                <div className="title-wrapper">
                                    <h5 className="fc-white fs-25 fw-700 " >
                                        Address Detail
                                    </h5>

                                    <Link href="/ProfileUser">
                                        <a className="edit-text">
                                            <h5 className="fc-white fs-15 fw-700 edit" >
                                                Edit
                                            </h5>
                                        </a>
                                    </Link>


                                </div>
                                <div className="first-section">
                                    <CardShadow className="right-side">
                                        <p className="f-poppins fs-20 fw-700 first-p">
                                            <b>Delivery</b> to Iskandar Street
                                        </p>
                                        <hr />
                                        <p className="f-poppins fs-20 fw-400  second-p">
                                            Km 5 refinery road oppsite re
                                            public road, effurun, Jakarta
                                        </p>
                                        <hr />
                                        <p className="f-poppins fs-20 fw-400  second-p">
                                            +62 81348287878
                                        </p>
                                    </CardShadow>
                                </div>
                                <div className="second-title-wrapper">
                                    <h5 className="fc-white fs-25 fw-700 " >
                                        Payment Method
                                    </h5>
                                </div>
                                <div className="payment-section">
                                    <CardShadow className="right-side payment">
                                        <div className="first-payment">
                                            <input id="creditcard" className="checkmark bg_brown" type="radio" name="radio" />
                                            <img src="ccicon.png" alt="" />
                                            <p className="f-poppins fs-20 fw-200">
                                                Credit Card
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="second-payment">
                                            <input id="bank" className="checkmark bg_brown" type="radio" name="radio" />
                                            <img src="Bankicon.png" alt="" />
                                            <p className="f-poppins fs-20 fw-200">
                                                Bank Account
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="third-payment">
                                            <input id="cod" className="checkmark bg_brown" type="radio" name="radio" />
                                            <img src="Deliverylogo.png" alt="" />
                                            <p className="f-poppins fs-20 fw-200">
                                                Cash on Delivery
                                            </p>
                                        </div>
                                    </CardShadow>
                                </div>
                                <Button className="button" radius="radius-20" color="choco-shadow">Confirm and Pay</Button>
                            </div>
                        </div>
                    </div>
                </div>



            </Layout>
        </Styles>
    )
}

export default Payment
const Styles = styled.div`
.wrapper{
    background-image: url('/paymentBg.png');
        .title{
            padding-top: 114px;
            margin-bottom: 41px;
        }
        .card-left-side{
            width: 487px;
            height: 737px;
                h1{
                    text-align: center;
                    padding-top: 65px;
                    margin-bottom: 80px;
                }
                .card-product{
                    padding: 19px 43px;
                }
                hr{
                    margin: 19px 43px; 
                }
                .text-detail{
                padding-top: 18px;
                padding-left: 47px;
                }
                .total-wrap{
                    gap: 9rem;
                }
            }
            .hidden{
                visibility: hidden;
                width: 50px;
            }
            .right-side{
            width: 454px;
            height: 230px;
            margin-bottom: 40px;
            .first-p{
                /* padding: 32px 43px 0; 
                 */
                padding-top: 32px;
                padding-right: 43px;
                padding-left: 43px;
                padding-bottom: 0;
            }
            hr{
                /* margin: 19px 43px;  */
                margin-left: 43px;
                margin-right: 43px;
                margin-bottom: 2px;
            }
            .second-p{
                padding: 10px 43px 0; 
            }
        }
        .edit-text{
           text-decoration: none;
            }
        
        .title-wrapper{
            padding-top: 210px;
            display: flex;
            flex-direction: row;
            gap: 14rem;
            margin-bottom: 20px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
        }
        .payment-section{
            .payment{
                
                .first-payment{
                    display: flex;
                    padding: 16px 35px 0;
                    .checkmark{
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
                        }
                        .bg_brown{
                            background-color: white;
                            border: 1px solid #6A4029;
                        }
                        .bg_brown:checked{
                            box-shadow: 0px 0px 0px 1px #6A4029;
                            border: 5px solid #fff;
                            background-color: #6A4029;
                        }
                        img{
                            margin-left: 10px;
                            width: 40px;
                            height: 40px;
                        }
                        p{
                            margin-left: 10px;
                        }
                   
                }
                .second-payment{
                    padding: 16px 35px 0;
                    display: flex;
                    .checkmark{
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
                        }
                        .bg_brown{
                            background-color: white;
                            border: 1px solid #6A4029;
                        }
                        .bg_brown:checked{
                            box-shadow: 0px 0px 0px 1px #6A4029;
                            border: 5px solid #fff;
                            background-color: #6A4029;
                        }
                        img{
                            margin-left: 10px;
                            width: 40px;
                            height: 40px;
                        }
                        p{
                            margin-left: 10px;
                        }
                }
                .third-payment{
                    padding: 16px 35px 0;
                    display: flex;
                    .checkmark{
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
                        }
                        .bg_brown{
                            background-color: white;
                            border: 1px solid #6A4029;
                        }
                        .bg_brown:checked{
                            box-shadow: 0px 0px 0px 1px #6A4029;
                            border: 5px solid #fff;
                            background-color: #6A4029;
                        }
                        img{
                            margin-left: 10px;
                            width: 40px;
                            height: 40px;
                        }
                        p{
                            margin-left: 10px;
                        }
                }
            }
        }
        .button{
            margin-top: 47px;
            width: 452px;
            height: 84px;
            font-size: 20px;
        }
}


`
