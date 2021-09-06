import React from 'react'
import styled from 'styled-components'
import { CardShadow } from '../components/atoms'
import Layout from '../components/layout'
import { CardCheckout } from '../components/molecules'


const Payment = () => {
    return (
        <Styles>
            <Layout isAuth={true} active="cart" login={true} title="Payment">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col">
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
                            </div>
                            <div className="col">
                                <div className="title-wrapper">            
                                    <h5 className="fc-white fs-25 fw-700 " >
                                        Address Detail
                                    </h5>
                                    <h5 className="fc-white fs-15 fw-700 edit" >
                                        Edit
                                    </h5>
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
                                <div className="title-wrapper">            
                                    <h5 className="fc-white fs-25 fw-700 " >
                                        Address Detail
                                    </h5>
                                    <h5 className="fc-white fs-15 fw-700 edit" >
                                        Edit
                                    </h5>
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
        }.card-left-side{
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
        .right-side{
            width: 454px;
            height: 230px;
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
        .title-wrapper{
            padding-top: 210px;
            display: flex;
            flex-direction: row;
            gap: 14rem;
            margin-bottom: 20px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
        }
}


`
