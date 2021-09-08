/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Susu from '../../../public/voucherIlust1.svg';
function index({ ...props }) {
  return (
    <CardCoupon {...props}>
      <div className="coupon-image">
        <img src={Susu.src} alt="coupon"></img>
      </div>
      <div className="coupon-info">
        <p className="name two-line">Happy Mother</p>
        <p className="description two-line">
          Get one of our favorite menu for free! Get one of our favorite menu for free! Get one of our favorite menu for
          free! Get one of our favorite menu for free! Get one of our favorite menu for free!
        </p>
      </div>
    </CardCoupon>
  );
}

const CardCoupon = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  background: #88b788;
  padding: 0.5rem 1.4rem;
  margin-bottom: 1.2rem;
  border-radius: 20px;
  // .coupon-image {
  //   width: 83px;
  //   height: 92px;
  //   img {
  //     object-fit: contain;
  //     max-width: 100%;
  //     max-height: 100%;
  //   }
  // }
  .coupon-info {
    .name {
      font-size: 14px;
      font-weight: 700;
    }
    .description {
      font-size: 12px;
      font-weight: 400;
    }
    .two-line {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;
export default index;
