/* eslint-disable @next/next/no-img-element */
import Style from './footer.module.css';
const Footer = (props) => {
  return (
    <div className={`${Style.container} ${props.login ? Style.center : null}`}>
      <div className={Style.desc}>
        <div className={Style.title}>
          <img src="/logoCoffeShop.svg" alt="logoCoffee" />
          <p className="fs-20 fw-700 fc-black">Coffee Shop</p>
        </div>
        <p className="fs-16 fw-500 fc-grey">
          Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
        </p>
        <div className={Style.socialMedia}>
          <img src="/facebook.svg" alt="facebook" />
          <img src="/twitter.svg" alt="twitter" />
          <img src="/instagram.svg" alt="instagram" />
        </div>
        <p className="fs-16 fw-400 fc-grey">©2020CoffeeStore</p>
      </div>
      {props.login ? (
        <>
          <div className={Style.listLogin}>
            <p className="fs-18 fw-500 fc-black">Product</p>
            <div className={Style.loginDesc}>
              <div>
                <p className="fs-16 fw-400 fc-grey">Download</p>
                <p className="fs-16 fw-400 fc-grey">Locations</p>
                <p className="fs-16 fw-400 fc-grey">Blog</p>
              </div>
              <div>
                <p className="fs-16 fw-400 fc-grey">Pricing</p>
                <p className="fs-16 fw-400 fc-grey">Countries</p>
              </div>
            </div>
            <p className="fs-18 fw-500 fc-black">Engage</p>
            <div className={Style.loginDesc}>
              <div>
                <p className="fs-16 fw-400 fc-grey">Coffe Shop ?</p>
                <p className="fs-16 fw-400 fc-grey">About Us</p>
                <p className="fs-16 fw-400 fc-grey">Terms of Service</p>
              </div>
              <div>
                <p className="fs-16 fw-400 fc-grey">FAQ</p>
                <p className="fs-16 fw-400 fc-grey">Privacy Policy</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={Style.list}>
            <div>
              <p className="fs-18 fw-500 fc-black">Product</p>
              <p className="fs-16 fw-400 fc-grey">Download</p>
              <p className="fs-16 fw-400 fc-grey">Pricing</p>
              <p className="fs-16 fw-400 fc-grey">Locations</p>
              <p className="fs-16 fw-400 fc-grey">Countries</p>
              <p className="fs-16 fw-400 fc-grey">Blog</p>
            </div>
            <div>
              <p className="fs-18 fw-500 fc-black">Engage</p>
              <p className="fs-16 fw-400 fc-grey">Coffe Shop ?</p>
              <p className="fs-16 fw-400 fc-grey">FAQ</p>
              <p className="fs-16 fw-400 fc-grey">About Us</p>
              <p className="fs-16 fw-400 fc-grey">Privacy Policy</p>
              <p className="fs-16 fw-400 fc-grey">Terms of Service</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
