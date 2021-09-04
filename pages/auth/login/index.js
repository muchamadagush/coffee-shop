import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/base/Input";
import styles from "./login.module.css";
import Link from "next/link"

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: ''
  })

  const handleChange = (e) => {
    e.preventDefault()

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className={styles.login}>
        <div className={styles.left}>
        </div>
        <div className={styles.right}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.brand}>
                <img src="/logoCoffeShop.svg" alt="logo" className={styles.logo} />
                <h5 className={styles.title}>Coffee Shop</h5>
              </div>
              <h3 className={styles.labelSignUp}>Login</h3>
            </header>

            <div className={styles.formRegister}>
              <Input name="email" type="text" id="email" placeholder="Enter your email adress" actionChange={handleChange} label="Email Adress :" />
              <Input name="password" type="password" id="password" placeholder="Enter your password" actionChange={handleChange} label="Password :" />
              <Input name="phone" type="phone" id="phone" placeholder="Enter your phone number" actionChange={handleChange} label="Phone Number :" />
              <Link href="/forgot-password">
                <a className={styles.forgot}>Forgot password?</a>
              </Link>
              <Button children="Login" color="shine-shadow auth" />
              <Button color="white auth google">
                <img src="/google.png" alt="google" /> Login with Google
              </Button>
              <div className={styles.alreadyAccount}>
                <div className={styles.line}></div>
                <p className={styles.haveAccount}>Already have an account?</p>
                <span className={styles.line}></span>
              </div>
              <Button children="Sign up here" color="choco-shadow auth" />

            </div>
          </div>
          <footer>
            <div className={styles.container}>
              <div className={styles.footer}>
                <div className={styles.footerLeft}>
                  <div className={styles.brand}>
                    <img src="/logoCoffeShop.svg" alt="logo" className={styles.logo} />
                    <h3 className={styles.title}>Coffee Shop</h3>
                  </div>
                  <p className={styles.content}>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                  <div className={styles.socialMedia}>
                    <img src="/facebook.svg" alt="facebook" className={styles.item} />
                    <img src="/twitter.svg" alt="twitter" className={styles.item} />
                    <img src="/instagram.svg" alt="instagram" className={styles.item} />
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

export default Login;