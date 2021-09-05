import React from 'react';
import styled from 'styled-components';
import Susu from '../../../public/food1.png';
import Link from 'next/link';
function index() {
  return (
    <CardProduct>
      <Link href="/">
        <a className="atom-card--link">
          <div className="atom-card--image">
            <div className="atom-card--image-tag">
              <img src={Susu.src} alt="product"></img>
            </div>
          </div>
          <div className="card-info">
            <p className="atom-card--name">Veggie asjdnasdjns tomato mix</p>
            <p className="atom-card--price">IDR 30.000</p>
          </div>
        </a>
      </Link>
    </CardProduct>
  );
}

const CardProduct = styled.div`
  margin-top: 60px;
  background: #fff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  justify-content: center;
  p {
    text-align: center;
  }
  .atom-card {
    &--link {
      background: #ffffff;
      display: block;
      padding-top: 42%;
      position: relative;
      border-radius: 30px;
    }
    &--image {
      top: -40%;
      position: absolute;
      height: 100%;
      width: 100%;
      &-tag {
        width: 100%;
        position: relative;
        padding-bottom: 100%;
        img {
          border-radius: 50%;
          object-fit: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 100%;
          max-height: 100%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      }
    }

    &--name {
      font-size: 22px;
      font-style: normal;
      font-weight: 900;
      color: #000000;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &--price {
      font-style: normal;
      font-weight: bold;
      font-size: 17px;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #6a4029;
    }
  }
  .card-info {
    max-width: 100%;
    padding: 0 15px;
  }
`;
export default index;
