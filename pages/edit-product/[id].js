import Layout from '../../components/layout';
import { Button } from '../../components/atoms';
import Style from '../../styles/editProduct.module.css';
import styled from 'styled-components';
import { privateRouteAdmin } from "../../configs/routes/privateRouteAdmin";

const EditProduct = () => {
  return (
    <div>
      <Layout isAuth={true} active="product" title="Edit Product">
        <div className={Style.container}>
          <p className="f-poppins fs-20 fw-400 fc-black">
            Favorite {`&`} Promo {`>`} <span className="fc-brown">Cold Brew</span>
          </p>
          <div className={Style.content}>
            <div className={Style.left}>
              <img src="/food7.svg" alt="food" />
              <p className="f-poppins fs-25 fw-400 fc-black">
                Delivery only on <span className="fw-700">Monday to friday </span>at{' '}
                <span className="fw-700">1 - 7 pm</span>
              </p>
            </div>
            <div className={Style.right}>
              <input type="text" value="Cold Brew" className={`fs-65 fw-900 f-poppins fc-black`} />
              <input type="text" value="IDR 30000" className={`f-poppins fs-40 fw-500 fc-black`} />
              <textarea
                type="text"
                value="Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours."
                className={`f-poppins fs-25 fw-400 fc-black ${Style.inputDesc}`}
                wrap="soft"
              />
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
              <Styles>
                <Button className="button" color="choco">
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
`;
export default EditProduct;

export const getServerSideProps = privateRouteAdmin(async (ctx) => {
  return {
    props: {},
  };
});