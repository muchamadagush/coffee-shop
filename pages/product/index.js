import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { CardProduct, CardCoupon } from '../../components/molecules';
import Link from 'next/link';
import { Button } from '../../components/atoms';
import { Breakpoints } from '../../utils';

function Index() {
  const list = ['Favorite & Promo', 'Coffe', 'Non Coffe', 'Foods', 'Add-on'];
  const [istrue, setIsTrue] = React.useState(false);
  return (
    <>
      <Layout isAuth={true} active="product" login={true}>
        <Style>
          <Coupun>
            <div className="coupons">
              <div className="coupons-header">
                <p className="tittle">Promo Today</p>
                <p className="sub-tittle">Coupons will be updated every weeks. Check them out! </p>
              </div>
              <div className="coupons-content">
                <div className="coupons-item">
                  <CardCoupon />
                  <CardCoupon />
                  <CardCoupon />
                  <CardCoupon />
                </div>
              </div>
            </div>
            <Button className="apply-coupon button" color="choco">
              Apply Coupun
            </Button>
            <div className="terms-condition">
              <p className="title">Terms and Condition </p>
              <p className="info">1. You can only apply 1 coupon per day</p>
              <p className="info">2. It only for dine in</p>
              <p className="info">3. Buy 1 get 1 only for new user </p>
              <p className="info">4. Should make member card to apply coupon</p>
            </div>
          </Coupun>
          <AllProduct>
            <ToggleCategory>
              {list.map((item, index) => {
                return (
                  <div key={index} className={`category ${istrue ? 'active' : ''}`}>
                    <p>{item}</p>
                    {istrue && <div className="active-border"></div>}
                  </div>
                );
              })}
            </ToggleCategory>
            <ProductWrapper>
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </ProductWrapper>
            <p className="fs-17 fc-brown">*the price has been cutted by discount appears</p>
          </AllProduct>
        </Style>
      </Layout>
    </>
  );
}

const Style = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  border-top: 0.5px solid #9f9f9f;
  flex-wrap: wrap;
  ${Breakpoints.lessThan('md')`
    flex-direction: column;
  `}
`;

const Coupun = styled.div`
  padding: 29px 8px 29px 8px;
  ${Breakpoints.greaterThan('sm')`
    padding: 29px 15px 29px 15px;
  `}
  ${Breakpoints.greaterThan('lg')`
    padding: 29px 15px 29px 15px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `}
  ${Breakpoints.greaterThan('xlg')`
    padding: 29px 50px 29px 50px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `}
// ${Breakpoints.greaterThan('1339px')`
// padding: 0 157px 29px 115px;
// `}
  height: 100%;
  .coupons {
    display: flex;
    height: calc(100vh-156px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-header {
      ${Breakpoints.lessThan('xlg')`
        width: 60%;
      `}
      .tittle {
        font-weight: 700;
        font-size: 25px;
        color: #6a4029;
      }
      .subtittle {
        font-weight: 400;
        font-size: 12px;
        color: #000000;
      }
      padding: 0;
      p {
        text-align: center;
        margin-top: 0;
      }
    }
    &-content {
      margin-top: 3rem;
      scroll-behavior: smooth;
      overflow-y: auto;
      flex: 1;
    }
  }
  .button {
    height: 64px;
    font-size: 17px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 84px;
  }
  .terms-condition {
    font-size: 12px;
    color: #4f5665;
    .title {
      font-weight: 700;
    }
    .info {
      font-weight: 400;
    }
  }
  flex: 1;
`;
const AllProduct = styled.div`
  flex: 2;
  box-sizing: border-box;
  border-left: 0.5px solid #9f9f9f;
  padding: 0 8px 29px 8px;

  ${Breakpoints.greaterThan('sm')`
    padding: 0 15px 29px 15px;
  `}
  ${Breakpoints.greaterThan('lg')`
    padding: 0 35px 29px 35px;
  `}
  ${Breakpoints.greaterThan('xlg')`
    padding: 0 50px 29px 50px;
  `}
  ${Breakpoints.greaterThan('1339px')`
    padding: 0 157px 29px 115px;
  `}
`;

const ToggleCategory = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 29px 0;
  border-radius: 30px;
  ${Breakpoints.greaterThan('lg')`
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 1;
    background: #fff;
  `}
  .category {
    cursor: pointer;
    p {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
      color: #9f9f9f;
      padding: 0 1rem 0.9rem 1rem;
    }
  }
  .active {
    p {
      color: #6a4029;
      font-weight: 700;
    }
  }
  .active-border {
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.67);
    border-bottom: 3px solid #6a4029;
  }
`;
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 3rem;
  ${Breakpoints.lessThan('xsm')`
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  `}
  ${Breakpoints.greaterThan('md')`
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 35px;
  `}
  ${Breakpoints.greaterThan('xlg')`
    grid-template-columns: repeat(4, 1fr);
    column-gap: 35px;
    row-gap: 35px;
  `}
`;
export default Index;
