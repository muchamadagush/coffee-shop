import Layout from '../../components/layout';
import { Button, CardShadow } from '../../components/atoms';
import Style from './productDetail.module.css';
import styled from 'styled-components';
import { privateRoute } from "../../configs/routes/privateRoute";

const ProductDetail = () => {
  return (
    <div>
      <Layout isAuth={true} active="home" login={true}>
        <div className={Style.container}>
          <p className="f-poppins fs-20 fw-400 fc-black">
            Favorite {`&`} Promo {`>`} <span className="fc-brown">Cold Brew</span>
          </p>
          <Styles className={Style.content}>
            <div className={Style.left}>
              <img src="/food1.png" alt="food" className={Style.productImage} />
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
                  <input type="time" className="fs-15 fw-400" placeholder="Enter time for reservation" />
                </div>
              </CardShadow>
            </div>
            <div className={Style.right}>
              <p className="f-poppins fs-65 fw-900 fc-black">COLD BREW</p>
              <p className="f-poppins fs-25 fw-400 fc-brown">
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of
                heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
              </p>
              <p className="f-poppins fs-25 fw-400 fc-brown">
                Delivery only on <span className="fw-700">Monday to friday </span>at{' '}
                <span className="fw-700">1 - 7 pm</span>
              </p>
              <div className="choice">
                <Button className="button" color="choco">
                  Add to Cart
                </Button>
                <Button className="button" color="shine">
                  Ask a Staff
                </Button>
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
                <img src="/food1.png" alt="food" className={Style.imgProduct}/>
                <div className={Style.itemList}>
                  <p className="fs-25 fw-900 fc-black">COLD BREW</p>
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

export const getServerSideProps = privateRoute(async (ctx) => {
  return {
    props: {},
  };
});