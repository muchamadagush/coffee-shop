/* eslint-disable @next/next/no-img-element */
import Layout from '../components/layout';
import { Button } from '../components/atoms';
import Style from '../styles/addProduct.module.css';
import styled from 'styled-components';
import Input from '../components/base/Input';
import { privateRouteAdmin } from "../configs/routes/privateRouteAdmin";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../configs/redux/actions/productAction';
import cookies from 'next-cookies';
const AddProduct = ({ token }) => {
  const [form, setForm] = useState({
    name_product: '',
    price: 0,
    description: '',
    image_product: null,
    image_preview: null,
    start_order: '',
    stop_order: '',
    category_id: '',
    stock: 0,
  });
  const [size, setSize] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  function removeA(arr) {
    var what,
      a = arguments,
      L = a.length,
      ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax = arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }
  const handleArraySize = (e) => {
    if (size.includes(e.target.value)) {
      console.log('test error');
      removeA(size, e.target.value);
    } else {
      console.log('test succsess');
      setSize([...size, e.target.value]);
    }
  };
  const handleArrayDelivery = (e) => {
    if (delivery.includes(e.target.value)) {
      console.log('test error');
      removeA(delivery, e.target.value);
    } else {
      console.log('test succsess');
      setDelivery([...delivery, e.target.value]);
    }
  };
  const handleInputFile = (e) => {
    // setImgItem(URL.createObjectURL(e.target.files[0]));
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
      image_preview: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleSubmit = () => {
    dispatch(addProduct(form, size, delivery, token));
  };
  
  return (
    <div>
      <Layout isAuth={false} active="product" title="Add Product">
        <div className={Style.container}>
          <p className="fs-20 fw-400 fc-black">
            Favorite {`&`} Promo {`>`} <span className="fs-20 fw-700 fc-brown">Add new product</span>
          </p>
          <div className={Style.content}>
            <div className={Style.left}>
              <div className={Style.imgProduct}>
                <img
                  src={form.image_preview ? form.image_preview : '/camera.svg'}
                  alt="camera"
                  className={form.image_preview ? Style.img : Style.imgCamera}
                />
              </div>
              <Styles>
                <Button className="button" color="black">
                  Take a picture
                </Button>
                <form onChange={handleInputFile} className={Style.inputButton}>
                  <label htmlFor="image_product" className={`${Style.labelImage} fs-25 fw-bold fc-brown`}>
                    Choose from gallery
                  </label>
                  <input type="file" name="image_product" id="image_product" className={Style.imageInput} />
                </form>
              </Styles>
              <Input
                name="start_order"
                type="time"
                id="start_order"
                placeholder="Select start hour"
                label="Delivery Hour:"
                actionChange={handleChange}
                giveClassLabel="fs-25 fw-700 fc-brown"
              />
              <Input
                name="stop_order"
                type="time"
                id="stop_order"
                placeholder="Select end hour"
                label="until:"
                actionChange={handleChange}
                giveClassLabel="fs-25 fw-700 fc-brown"
              />
              <select
                name="category_id"
                id="category_id"
                onChange={handleChange}
                className={`fs-25 fw-700 fc-black ${Style.category}`}
              >
                <option disabled selected value>
                  Select Category
                </option>
                <option value="1">Coffee</option>
                <option value="2">Non Coffee</option>
                <option value="3">Foods</option>
                <option value="4">Add-on</option>
              </select>
              <label htmlFor="stock" className={`fs-25 fw-700 fc-brown`}>
                Input Stock:
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                onChange={handleChange}
                className={` fs-25 fw-700 fc-black ${Style.category}`}
                placeholder="Input stock"
              />
            </div>
            <div className={Style.right}>
              <Input
                name="name_product"
                type="text"
                id="name_product"
                placeholder="Type product name min. 50 characters"
                label="Name :"
                actionChange={handleChange}
              />
              <Input
                name="price"
                type="text"
                id="price"
                placeholder="Type the price"
                label="Price :"
                actionChange={handleChange}
              />
              <Input
                name="description"
                type="text"
                id="description"
                placeholder="Describe your product min. 150 characters"
                label="Description :"
                actionChange={handleChange}
              />
              <div className={Style.contentSub}>
                <p className="fs-25 fw-700 fc-brown">Input product size :</p>
                <p className="fs-20 fw-400 fc-grey">Click size you want to use for this product</p>
                <div className={Style.size}>
                  <input
                    value="r"
                    type="checkbox"
                    name="r"
                    id="r"
                    className={Style.inputSize}
                    onChange={handleArraySize}
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
                  />
                  <label htmlFor="500gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                    500gr
                  </label>
                </div>
                <p className="fs-25 fw-700 fc-brown">Input delivery methods :</p>
                <p className="fs-20 fw-400 fc-grey">Click methods you want to use for this product</p>
                <div className={Style.size}>
                  <input
                    value="home delivery"
                    type="checkbox"
                    name="home delivery"
                    id="home delivery"
                    className={Style.inputSize}
                    onChange={handleArrayDelivery}
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
                  />
                  <label htmlFor="delivery" className={`fs-20 fw-700 fc-black ${Style.sizeButtonDelivery}`}>
                    Take away
                  </label>
                </div>
                <Styles>
                  <Button className="button" color="choco-shadow" onClick={handleSubmit}>
                    Save Product
                  </Button>
                  <Button className="button" color="gray">
                    Cancel
                  </Button>
                </Styles>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export const getServerSideProps = privateRouteAdmin(async (ctx) => {
  const token = await cookies(ctx).token;
  return {
    props: { token },
  };
});
const Styles = styled.div`
  .button {
    width: 100%;
    padding: 30px 0px;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
  }
`;
export default AddProduct;
