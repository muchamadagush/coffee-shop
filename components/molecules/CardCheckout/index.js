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
        width: 100%;
        height: 100%;
        border-radius: 20px;
        }
    }
    .product-item{
        .productname{
            margin: 0;
        }
        .qty{
            margin: 0;
        }
        .size{
            margin: 0;
        }
    }
    .price{
        margin-left: auto;
        margin-top: 20px;
    }
}



`