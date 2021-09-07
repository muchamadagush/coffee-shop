import Layout from '../components/layout';
import { Button } from '../components/atoms';
import Style from '../styles/addProduct.module.css';
import styled from 'styled-components';
import Input from '../components/base/Input';
const AddProduct = () => {
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
                <img src="/camera.svg" alt="camera" className={Style.img} />
              </div>
              <Styles>
                <Button className="button" color="black">
                  Take a picture
                </Button>
                <Button className="button" color="shine">
                  Choose from gallery
                </Button>
              </Styles>
              <label htmlFor="startHour" className="fs-25 fw-700 fc-brown">
                Delivery Hour:
              </label>
              <input type="time" id="startHour" name="startHour" />
              <label htmlFor="closeHour" className="fs-25 fw-700 fc-brown">
                Until:
              </label>
              <input type="time" id="closeHour" name="closeHour" />
              <label htmlFor="closeHour" className="fs-25 fw-700 fc-brown">
                Category:
              </label>
              <select name="category" id="category">
                <option disabled selected value>
                  Select Category
                </option>
                <option value="coffee">coffee</option>
                <option value="nonCoffee">Non Coffee</option>
                <option value="food">Foods</option>
                <option value="addOn">Add-on</option>
              </select>
              <label htmlFor="stock" className="fs-25 fw-700 fc-brown">
                Input Stock:
              </label>
              <input type="number" id="stock" name="stock" min="0" />
            </div>
            <div className={Style.right}>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Type product name min. 50 characters"
                label="Name :"
              />
              <Input name="price" type="text" id="price" placeholder="Type the price" label="Price :" />
              <Input
                name="description"
                type="text"
                id="description"
                placeholder="Describe your product min. 150 characters"
                label="Description :"
              />
              <div className={Style.contentSub}>
                <p className="fs-25 fw-700 fc-brown">Input product size :</p>
                <p className="fs-20 fw-400 fc-grey">Click size you want to use for this product</p>
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
                  <input type="checkbox" name="250gr" id="250gr" className={Style.inputSize} />
                  <label htmlFor="250gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                    250gr
                  </label>
                  <input type="checkbox" name="300gr" id="300gr" className={Style.inputSize} />
                  <label htmlFor="300gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                    300gr
                  </label>
                  <input type="checkbox" name="500gr" id="500gr" className={Style.inputSize} />
                  <label htmlFor="500gr" className={`fs-20 fw-700 fc-black ${Style.sizeButton}`}>
                    500gr
                  </label>
                </div>
                <p className="fs-25 fw-700 fc-brown">Input delivery methods :</p>
                <p className="fs-20 fw-400 fc-grey">Click methods you want to use for this product</p>
                <Styles>
                  <Button className="button" color="choco-shadow">
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
const Styles = styled.div`
  .button {
    width: 100%;
    padding: 30px 0px;
    margin-bottom: 30px;
  }
`;
export default AddProduct;
