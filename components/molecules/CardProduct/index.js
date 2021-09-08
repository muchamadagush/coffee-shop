/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Susu from '../../../public/food1.png';
import Link from 'next/link';
function index(props) {
  return (
    <CardProduct>
      <Link href={props.href}>
        <a className="atom-card--link">
          <div className="atom-card--image">
            <img src={props.image} alt="product"></img>
          </div>
          <div className="card-info">
            <p className="atom-card--name">{props.name}</p>
            <p className="atom-card--price">{props.price}</p>
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
      background: #fff;
      display: block;
      height: 100%;
      text-decoration: none;
      position: relative;
      border-radius: 30px;
    }
    &--image {
      position: relative;
      top: -15%;
      margin: 0 auto;
      height: 100%;
      width: 100%;
      width: 128px;
      height: 128px;
      img {
        border-radius: 50%;
        object-fit: cover;
        height: 100%;
        width: 100%;
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
