/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

const CardCheckout = ({className, image, productname, qty, size, price}) => {
    return (
        <Styles className={className}>
            <div className="left">
                <div className="image-wrapper">
                    <img src={image} alt="" />
                </div>
                <div className="product-item">
                    <p className="f-poppins fs-20 productname">{productname}</p>
                    <p className="f-poppins fs-20 qty">{qty}</p>
                    <p className="f-poppins fs-20 size">{size}</p>
                </div>
                <div className="price">
                    <h5 lassName="f-poppins fs-20">{price}</h5>
                </div>
            </div>
        </Styles>
    )
}

export default CardCheckout
const Styles = styled.div`
display: flex;
.left{
    display: flex;
    flex-direction: row;
    width: 100%;
    .image-wrapper {
    width: 82px;
    height: 90px;   
    margin-right: 1rem;
    img {
        object-fit: cover;
    }  
    @media screen and (max-width: 992px) {
            width: 70px;
            height: 80px;
        }  
        img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        }
    }
    .product-item{
        .productname{
            margin: 0;
            @media screen and (max-width: 992px) {
                font-size: 16px;
               
            } 
        }
        .qty{
            margin: 0;
            @media screen and (max-width: 992px) {
                font-size: 16px;
               
            } 
        }
        .size{
            margin: 0;
            @media screen and (max-width: 992px) {
                font-size: 16px;
               
            } 
        }
    }
    .price{
        margin-left: auto;
        margin-top: 20px;
        @media screen and (max-width: 992px) {
                font-size: 16px;
               
            } 
    }
}



`