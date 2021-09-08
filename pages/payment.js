import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { CardShadow, Button } from '../components/atoms'
import Layout from '../components/layout'
import { CardCheckout } from '../components/molecules'
import { Breakpoints } from '../utils'


const Payment = () => {
    const isAdmin = true
    return (
        <Styles>
            <Layout isAuth={true} active="cart" login={true} title="Payment">
                <div className="wrapper">
                    <div className="container">
                        <div className="row row-wrapper">
                            <div className="col col-lg-7 col-md-8">
                                {!isAdmin && <h4 className="fc-white fs-40 fw-bold title" >
                                    Checkout your <br /> item now!
                                </h4>}
                                {isAdmin && <h4 className="fc-white fs-40 fw-bold title" >
                                    Finish your <br /> customer order now.
                                </h4>}
                                <CardShadow className="card-left-side">
                                    {!isAdmin && <h1 className="f-poppins fs-35 fc-brown fw-bold">
                                        Order Summary
                                    </h1>}
                                    {isAdmin && <h1 className="f-poppins fs-35 fc-brown fw-bold">
                                        Dine in for Zulaikha
                                    </h1>}
                                    <CardCheckout className="card-product" image="food1.png" productname="Hazelnut Latte" qty="1x" price="IDR 24.0" size="regular" />
                                    <CardCheckout className="card-product" image="food1.png" productname="Hazelnut Latte" qty="1x" price="IDR 24.0" size="regular" />
                                    <hr />
                                    <div className="text-detail">
                                        <div className="row">
                                            <div className="col">
                                                <p className="f-poppins fs-20 subtotal">
                                                    SUBTOTAL
                                                </p>
                                                <p className="f-poppins fs-20 tax">
                                                    TAX & FEES
                                                </p>
                                                <p className="f-poppins fs-20 shipping">
                                                    SHIPPING
                                                </p>

                                            </div>
                                            <div className="col price">
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
                            <div className="col col-lg-5 col-md-6">
                                <div className={isAdmin&& `hidden-div`}>

                                
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
                                </div>
                                <div className="second-title-wrapper">
                                    <h5 className={isAdmin ? 'payment-style fc-white fs-25 fw-700' : `fc-white fs-25 fw-700 payment-text`} >
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
                                <Button className="button" radius="radius-20" color="choco-shadow">{isAdmin ? `Mark as done` : `Confirm and Pay`}</Button>
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
box-sizing: border-box;
.wrapper{
    background-image: url('/paymentBg.png');
        @media screen and (max-width: 320px) {
            background-image: none;
            } 

 
.row-wrapper{         
        .title{
            padding-top: 114px;
            margin-bottom: 41px;
            @media screen and (max-width: 320px) {
               color: Black;
             } 
        }
        .card-left-side{
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
             
                h1{
                    text-align: center;
                    padding-top: 65px;
                    margin-bottom: 80px;
                    @media screen and (max-width: 992px) {
                       font-size: 25px;
                       margin-bottom: 30px;
                    }   
                }
                .card-product{
                    padding: 19px 43px;
                    /* background-color: #6A4029; */
                    @media screen and (max-width: 992px) {
                       font-size: 25px;
                    
                    }  
                }
                hr{
                    margin: 19px 43px; 
                }
                .text-detail{
                padding-top: 18px;
                padding-left: 47px;
    
               
                .total-wrap{
                    gap: 9rem;
                    h2{
                        @media screen and (max-width: 992px) {
                            font-size: 24px;
                        
                        }
                        @media screen and (max-width: 320px) {
                            font-size: 15px;
                            gap: 5rem;
                        
                        }  
                    }
                }
                .subtotal{
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
                .tax{
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
                .shipping{
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
            .price p{
                @media screen and (max-width: 320px) {
                            font-size: 13px;
                        
                        }  
            }
        }
            .hidden{
                visibility: hidden;
                width: 50px;

                @media screen and (max-width: 768px) {
                        margin-left: auto;                 
                } 
            }
            .right-side{
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
            .first-p{
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
            hr{
                /* margin: 19px 43px;  */
                margin-left: 43px;
                margin-right: 43px;
                margin-bottom: 2px;
            }
            .second-p{
                padding: 10px 43px 0; 
                @media screen and (max-width: 992px) {
                   font-size: 18px;
                            
                    } 
                    @media screen and (max-width: 320px) {
                    font-size: 14px;
                }
            }
        }
     
        .title-wrapper{
            padding-top: 210px;
            display: flex;
            flex-direction: row; 
            margin-bottom: 20px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
            
            @media screen and (max-width: 768px) {
                    padding-top: 0;
               
            }
            .edit-text{
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
        .payment-text{
                @media screen and (max-width: 320px) {
                    color: black;
                    } 
        }
        .payment-style{
            margin-top: 220px;
            padding-top: 10px;
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
                            @media screen and (max-width: 992px) {
                                height: 22px;
                                width: 22px;
                                            
                            } 
                            @media screen and (max-width: 992px) {
                                height:18px;
                                width: 18px;
                                            
                            } 
                            
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
                            @media screen and (max-width: 992px) {
                              height: 38px;
                              width: 38px;
                                            
                            } 
                        }
                        p{
                            margin-left: 10px;
                            @media screen and (max-width: 992px) {
                                    font-size: 19px;  
                            } 
                            @media screen and (max-width: 992px) {
                                font-size: 15px; 
                                            
                            } 
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
                                @media screen and (max-width: 992px) {
                                    height: 22px;
                                    width: 22px;
                                                
                                } 
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
                            @media screen and (max-width: 992px) {
                              height: 38px;
                              width: 38px;
                                            
                            }
                        }
                        p{
                            margin-left: 10px;
                            @media screen and (max-width: 992px) {
                                    font-size: 19px;                                           
                            } 
                            @media screen and (max-width: 992px) {
                                font-size: 15px; 
                                            
                            } 
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
                            @media screen and (max-width: 992px) {
                                height: 22px;
                                width: 22px;
                                            
                            } 
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
                            @media screen and (max-width: 992px) {
                              height: 38px;
                              width: 38px;
                                            
                            } 
                        }
                        p{
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
        .button{
           
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
    .hidden-div{
        display: none;
    }
}


`
