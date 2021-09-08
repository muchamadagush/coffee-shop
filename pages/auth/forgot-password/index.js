import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/base/Input";
import styles from "./forgotPassword.module.css";
import { publicRoute } from "../../../configs/routes/publicRoute";
import { useRouter } from "next/router";
import { forgotPasswordUser } from "../../../configs/redux/actions/userAction";

const ForgotPassword = () => {
  router=useRouter()
  const [form, setForm] = useState({
    email: '',

  })

  const handleChange = (e) => {
    e.preventDefault()

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

    const forgotPasswordClick = () => {
      dispatch(forgotPasswordUser(user, router));
    };
  return (
    <>
      <div className={styles.forgotPassword}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.brand}>
                <img
                  src="/logoCoffeShop.svg"
                  alt="logo"
                  className={styles.logo}
                />
                <h5 className={styles.title}>Coffee Shop</h5>
              </div>
              <h1 className={styles.labelForgot}>Forgot your password?</h1>
              <p className={styles.description}>
                Don’t worry, we got your back!
              </p>
            </header>

            <div className={styles.formForgot}>
              <Input
                name="email"
                type="text"
                id="email"
                placeholder="Enter your email adress"
                actionChange={handleChange}
                label="Email Adress :"
                giveClassLabel="none"
                giveClass="forgot"
              />
              <Button
                children="Send"
                color="shine-shadow forgot"
                onClick={forgotPasswordClick}
              />
              <p className={styles.time}>
                Click here if you didn’t receive any link in 2 minutes
                <br />
                <span>01:52</span>
              </p>
              <Button children="Resend Link" color="choco-shadow forgot" />
            </div>
          </div>
          <footer>
            <div className={styles.container}>
              <div className={styles.footer}>
                <div className={styles.footerLeft}>
                  <div className={styles.brand}>
                    <img
                      src="/logoCoffeShop.svg"
                      alt="logo"
                      className={styles.logo}
                    />
                    <h3 className={styles.title}>Coffee Shop</h3>
                  </div>
                  <p className={styles.content}>
                    Coffee Shop is a store that sells some good meals, and
                    especially coffee. We provide high quality beans
                  </p>
                  <div className={styles.socialMedia}>
                    <img
                      src="/facebook.svg"
                      alt="facebook"
                      className={styles.item}
                    />
                    <img
                      src="/twitter.svg"
                      alt="twitter"
                      className={styles.item}
                    />
                    <img
                      src="/instagram.svg"
                      alt="instagram"
                      className={styles.item}
                    />
                  </div>
                  <span className={styles.copyright}>©2020CoffeeStore</span>
                </div>
                <div className={styles.footerRight}>
                  <h5 className={styles.title}>Product</h5>
                  <div className={styles.product}>
                    <span>Download </span>
                    <span>Pricing</span>
                    <span>Locations</span>
                    <span>Countries</span>
                    <span>Blog</span>
                  </div>
                  <h5 className={styles.title}>Engage</h5>
                  <div className={styles.product}>
                    <span>Coffe Shop ?</span>
                    <span>About Us</span>
                    <span>FAQ</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

export const getServerSideProps = publicRoute(async (ctx) => {
  return {
    props: {},
  };
});