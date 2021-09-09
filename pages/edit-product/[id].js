/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/layout';
import { Button } from '../../components/atoms';
import Style from '../../styles/editProduct.module.css';
import styled from 'styled-components';
import { privateRouteAdmin } from '../../configs/routes/privateRouteAdmin';
import cookies from 'next-cookies';
import backendApi from '../../configs/api/backendApi';
import { useState } from 'react';
import Input from '../../components/base/Input';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../configs/redux/actions/productAction';
import { Breakpoints } from '../../utils/breakpoints';

const EditProduct = ({ product, token }) => {
  const [form, setForm] = useState({
    name_product: product.name_product,
    price: product.price,
    description: product.description,
    image_product: product.image_product,
    stock: product.stock,
    start_order: product.start_order,
    stop_order: product.stop_order,
    category_id: product.category_id
  });
  const [ErrImage, setErrImage] = useState(false);
  const [ErrImageType, setErrImageType] = useState(false);
  const [imagePrev, setImagePrev] = useState(null);
  const [size, setSize] = useState(product.size.split(','));
  const [delivery, setDelivery] = useState(product.delivery.split(','));
  const dispatch = useDispatch()
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
  const handleArraySize = (e) => {
    if (size.includes(e.target.value)) {
      console.log('test error');
      setSize(arrayRemove(size, e.target.value));
    } else {
      console.log('test succsess');
      setSize([...size, e.target.value]);
    }
  };
  const handleArrayDelivery = (e) => {
    if (delivery.includes(e.target.value)) {
      console.log('test error');
      setDelivery(arrayRemove(delivery, e.target.value));
    } else {
      console.log('test succsess');
      setDelivery([...delivery, e.target.value]);
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputFile = (e) => {
    e.preventDefault();
    if (e.target.files[0].size > 1048576) {
      setErrImage(true);
      setErrImageType(false);
    } else if (
      e.target.files[0].type !== 'image/png' &&
      e.target.files[0].type !== 'image/jpg' &&
      e.target.files[0].type !== 'image/jpeg'
    ) {
      setErrImageType(true);
      setErrImage(false);
    } else if (e.target.files.length !== 0) {
      setErrImage(false);
      setErrImageType(false);
      setImagePrev(URL.createObjectURL(e.target.files[0]));
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
    }
  };
  const handleSubmit = () => {
    const data = { ...form, size, delivery };
    dispatch(editProduct(data, product.id_product, token))
  };
  const start_time = product.start_order.slice(0, 5);
  const stop_time = product.stop_order.slice(0, 5);
  return (
    <div>
      <Layout isAuth={true} active="product" title="Edit Product">
        <div className={Style.container}>
          <p className="f-poppins fs-20 fw-400 fc-black">
            Favorite {`&`} Promo {`>`} <span className="fc-brown">{product.name_product}</span>
          </p>
          <div className={Style.content}>
            <div className={Style.left}>
              <img
                src={imagePrev ? imagePrev : product.image_product ? product.image_product : '/food7.svg'}
                alt="food"
                className={Style.image}
              />
              {ErrImage ? <p className="error">Image size is too large. max 1mb</p> : ''}
              {ErrImageType ? <p className="error">Invalid file type. only png, jpg, and jpeg format allowed</p> : ''}
              <form onChange={handleInputFile} className={Style.inputButton}>
                <label htmlFor="image_product" className={`${Style.labelImage} fs-25 fw-bold fc-brown`}>
                  Choose from gallery
                </label>
                <input type="file" name="image_product" id="image_product" className={Style.imageInput} />
              </form>
              <p className="f-poppins fs-25 fw-400 fc-black">
                Delivery only on <span className="fw-700">Monday to friday </span>at{' '}
                <span className="fw-700">
                  {start_time} - {stop_time}
                </span>
              </p>
            </div>
            <div className={Style.right}>
              <input
                type="text"
                name="name_product"
                defaultValue={product.name_product}
                className={`fs-65 fw-900 f-poppins fc-black`}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                min={0}
                defaultValue={product.price}
                className={`f-poppins fs-40 fw-500 fc-black`}
                onChange={handleChange}
              />
              <textarea
                type="text"
                defaultValue={product.description}
                className={`f-poppins fs-25 fw-400 fc-black ${Style.inputDesc}`}
                wrap="soft"
                onChange={handleChange}
                name="description"
              />
              <label htmlFor="stock" className={`fs-25 fw-700 fc-black`}>
                Input Stock:
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                defaultValue={product.stock}
                onChange={handleChange}
                className={` fs-25 fw-700 fc-black ${Style.category}`}
                placeholder="Input stock"
              />
              <p className={`fs-25 fw-700 fc-black`}>Input size: </p>
              <div className={Style.size}>
                <input
                  value="r"
                  type="checkbox"
                  name="r"
                  id="r"
                  className={Style.inputSize}
                  onChange={handleArraySize}
                  checked={size.includes('r')}
                />
                <label htmlFor="r" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                  R
                </label>
                <input
                  value="l"
                  type="checkbox"
                  name="l"
                  id="l"
                  className={Style.inputSize}
                  onChange={handleArraySize}
                  checked={size.includes('l')}
                />
                <label htmlFor="l" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                  L
                </label>
                <input
                  value="xl"
                  type="checkbox"
                  name="xl"
                  id="xl"
                  className={Style.inputSize}
                  onChange={handleArraySize}
                  checked={size.includes('xl')}
                />
                <label htmlFor="xl" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                  XL
                </label>
                <input
                  value="250gr"
                  type="checkbox"
                  name="250gr"
                  id="250gr"
                  className={Style.inputSize}
                  onChange={handleArraySize}
                  checked={size.includes('250gr')}
                />
                <label htmlFor="250gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                  250gr
                </label>
                <input
                  value="300gr"
                  type="checkbox"
                  name="300gr"
                  id="300gr"
                  className={Style.inputSize}
                  onChange={handleArraySize}
                  checked={size.includes('300gr')}
                />
                <label htmlFor="300gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                  300gr
                </label>
                <input
                  value="500gr"
                  type="checkbox"
                  name="500gr"
                  id="500gr"
                  className={Style.inputSize}
                  onChange={handleArraySize}
                  checked={size.includes('500gr')}
                />
                <label htmlFor="500gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                  500gr
                </label>
              </div>
              <p className={`fs-25 fw-700 fc-black`}>Input delivery method: </p>
              <div className={Style.size}>
                <input
                  value="home delivery"
                  type="checkbox"
                  name="home delivery"
                  id="home delivery"
                  className={Style.inputSize}
                  onChange={handleArrayDelivery}
                  checked={delivery.includes('home delivery')}
                />
                <label htmlFor="home delivery" className={`fs-20 fw-700 fc-black ${Style.sizeButtonDelivery}`}>
                  Home Delivery
                </label>
                <input
                  value="dine in"
                  type="checkbox"
                  name="dine in"
                  id="dine in"
                  className={Style.inputSize}
                  onChange={handleArrayDelivery}
                  checked={delivery.includes('dine in')}
                />
                <label htmlFor="dine in" className={`fs-20 fw-700 fc-black ${Style.sizeButtonDelivery}`}>
                  Dine in
                </label>
                <input
                  value="take away"
                  type="checkbox"
                  name="delivery"
                  id="delivery"
                  className={Style.inputSize}
                  onChange={handleArrayDelivery}
                  checked={delivery.includes('take away')}
                />
                <label htmlFor="delivery" className={`fs-20 fw-700 fc-black ${Style.sizeButtonDelivery}`}>
                  Take away
                </label>
              </div>
              <Styles>
                <Button className="button" color="choco" onClick={handleSubmit}>
                  Save change
                </Button>
              </Styles>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export const getServerSideProps = privateRouteAdmin(async (ctx) => {
  try {
    const id = ctx.params.id;
    const token = await cookies(ctx).token;
    const { data } = await backendApi.get(`products/${id}`, {
      withCredentials: true,
      headers: {
        Cookie: 'token=' + token,
      },
    });
    return {
      props: {
        product: data.data[0],
        token: token,
      },
    };
  } catch (error) {
    console.log(error);
    if (ctx.req) {
      ctx.res.writeHead(301, {
        Location: '/',
        'Cache-Control': 'no-cache',
      });
      ctx.res.end();
    }
  }
});
const Styles = styled.div`
  .button {
    padding: 25px 180px;
    width: 100%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    white-space: nowrap;
  }
  ${Breakpoints.lessThan('xsm')`
    .button {
      padding: 6px 15px;
      width:
    }
  `}
`;
export default EditProduct;