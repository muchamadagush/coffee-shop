import Layout from '../../components/layout';
import { Button, CardShadow } from '../../components/atoms';
import Style from './productDetail.module.css';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import PlusMinus from '../../components/base/plusMinus/PlusMinus';
import { useRouter } from 'next/dist/client/router';
import swal from 'sweetalert';
import cookies from 'next-cookies';
import backendApi from '../../configs/api/backendApi';
const ProductDetail = ({ product, role }) => {
  const [form, setForm] = useState();
  const router = useRouter();
  // const user_role = role;
  const handleEdit = () => {
    if (role === 'admin') {
      router.push('/edit-product/1');
    }
  };
  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, product cannot be recover',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Product has been deleted', {
          icon: 'success',
        });
      }
    });
  };
  const start_time = product.start_order.slice(0, 5);
  const stop_time = product.stop_order.slice(0, 5);
  // console.log(product)
  return (
    <div>
      <Layout isAuth={true} active="home" title="Product Detail">
        <div className={Style.container}>
          <p className="f-poppins fs-20 fw-400 fc-black">
            Favorite {`&`} Promo {`>`} <span className={`fc-brown ${Style.productName}`}>{product.name_product}</span>
          </p>
          <Styles className={Style.content}>
            <div className={Style.left}>
              <div className={Style.imageContainer}>
                <img
                  src={product.image_product ? product.image_product : '/food1.png'}
                  alt="food"
                  className={Style.productImage}
                />
              </div>
              <CardShadow className="card">
                <p className="f-poppins fs-25 fw-700 fc-black">Delivery and Time</p>
                <div className="btn-collection">
                  <Button className="button" color="gray">
                    Dine in
                  </Button>
                  <Button className="button" color="gray">
                    Door Delivery
                  </Button>
                  <Button className="button" color="gray">
                    Pick Up
                  </Button>
                </div>
                <div className="btn-yn">
                  <p className="f-poppins fs-20 fw-400 fc-black">Now</p>
                  <Button className="button" color="gray">
                    Yes
                  </Button>
                  <Button className="button" color="gray">
                    No
                  </Button>
                </div>
                <div className={Style.inputTime}>
                  <p className="f-poppins fs-20 fw-400 fc-black">Set Time</p>
                  <input
                    type="time"
                    className="fs-15 fw-400"
                    id="timeInput"
                    placeholder="Enter time for reservation"
                    min={start_time}
                    max={stop_time}
                  />
                  <span className={Style.validation}></span>
                </div>
              </CardShadow>
            </div>
            <div className={Style.right}>
              <p className={`f-poppins fs-65 fw-900 fc-black ${Style.productName}`}>{product.name_product}</p>
              <p className="f-poppins fs-25 fw-400 fc-brown">{product.description}</p>
              <p className="f-poppins fs-25 fw-400 fc-brown">
                Delivery only on <span className="fw-700">Monday to friday </span>at{' '}
                <span className="fw-700">
                  {start_time} - {stop_time}
                </span>
              </p>
              <div className={Style.content}>
                <PlusMinus type="detail" maxAmount={product.stock} />
                <p className="fs-35 fw-700 fc black">IDR {product.price}</p>
              </div>
              <div className="choice">
                <Button className="button" color="choco">
                  Add to Cart
                </Button>
                <Button className="button" color="shine" onClick={handleEdit}>
                  {role === 'admin' ? 'Edit Product' : 'Ask a Staff'}
                </Button>
                <div className={role === 'admin' ? null : Style.hide}>
                  <Button className="button" color="black" onClick={handleDelete}>
                    Delete Product
                  </Button>
                </div>
              </div>
            </div>
          </Styles>
          <div className={Style.bottomCard}>
            <CardShadow className="card">
              <div className={Style.sizeCard}>
                <p className="fs-25 fw-700 fc-black">Choose a size</p>
                <div className={Style.size}>
                  <input type="checkbox" name="r" id="r" className={Style.inputSize} />
                  <label htmlFor="r" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                    R
                  </label>
                  <input type="checkbox" name="l" id="l" className={Style.inputSize} />
                  <label htmlFor="l" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                    L
                  </label>
                  <input type="checkbox" name="xl" id="xl" className={Style.inputSize} />
                  <label htmlFor="xl" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                    XL
                  </label>
                </div>
              </div>
            </CardShadow>
            <CardShadow>
              <div className={Style.checkoutCard}>
                <div>
                  <img
                    src={product.image_product ? product.image_product : '/food1.png'}
                    alt="food"
                    className={Style.imgProduct}
                  />
                </div>
                <div className={Style.itemList}>
                  <p className={`fs-25 fw-900 fc-black ${Style.productName}`}>{product.name_product}</p>
                  <p className="fs-20 fw-400 fc-black">x1 (Large)</p>
                  <p className="fs-20 fw-400 fc-black">x1 (Regular)</p>
                </div>
                <div className={Style.checkoutContainer}>
                  <p className="fs-25 fw-700 fc-black">Checkout</p>
                  <button className={Style.checkoutButton}>
                    <img src="/arrow.svg" alt="arrow" />
                  </button>
                </div>
              </div>
            </CardShadow>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const token = await cookies(ctx).token;
  const role = await cookies(ctx).user_role;
  // console.log(token)
  const { data } = await backendApi.get(`products/${id}`, {
    withCredentials: true,
    headers: {
      Cookie: 'token=' + token,
    },
  });
  // console.log(data)
  return {
    props: {
      product: data.data[0],
      role: role,
    },
  };
};
const Styles = styled.div`
  .btn-collection {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: start;
    .button {
      padding: 6px 15px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      white-space: nowrap;
    }
  }
  .btn-yn {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: start;
    .button {
      padding: 6px 24px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      white-space: nowrap;
    }
  }
  .choice {
    display: flex;
    flex-direction: column;
    gap: 22px;
    .button {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      padding-bottom: 25px;
      padding-top: 25px;
    }
  }
  .card {
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;
export default ProductDetail;
