/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/base/Input";
import styles from "./register.module.css";
import { useDispatch } from "react-redux" 
import { register } from "../../../configs/redux/actions/userAction";
import {useRouter} from "next/router";
import Head from 'next/head';
import { publicRoute } from "../../../configs/routes/publicRoute";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pushLogin = () =>{
    router.push('/login')
  }
  const phoneRegExp = /\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/;
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      phone:''
    },
    onSubmit: values =>{
      // console.log(values);
      dispatch(register(values,router))
    },
    validationSchema : Yup.object ({
      email: Yup.string().email('Email is Invalid').required("email is required"),
      password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
      phone: Yup.string().matches(phoneRegExp, "phone number is invalid").min(10, "Phone number is too short").max(13,"phone must be 12 digits")
    })
  })
  return (
    <>
    <Head>
        <title>Register</title>
        <link rel="icon" href="/logoCoffeShop.svg" />
      </Head>
      <div className={styles.register}>
        <div className={styles.left}>
        </div>
        <div className={styles.right}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.brand}>
                <img src="/logoCoffeShop.svg" alt="logo" className={styles.logo} />
                <h5 className={styles.title}>Coffee Shop</h5>
              </div>
              <h3 className={styles.labelSignUp}>Sign Up</h3>
            </header>
            <form onSubmit={formik.handleSubmit}>
            <div className={styles.formRegister}>
              <Input name="email" type="text" id="email" value={formik.values.email}  placeholder="Enter your email adress" actionChange={formik.handleChange} label="Email Adress :" />
              {formik.errors.email && formik.touched.email && ( <p className={styles.errors}>{formik.errors.email}</p>)}
              <Input name="password" type="password" id="password" value={formik.values.password}  placeholder="Enter your password" actionChange={formik.handleChange} label="Password :" />
              {formik.errors.password && formik.touched.password && ( <p className={styles.errors}>{formik.errors.password}</p>)}
              <Input name="phone" type="phone" id="phone" value={formik.values.phone}  placeholder="Enter your phone number" actionChange={formik.handleChange} label="Phone Number :" giveClass="mb8" />
              {formik.errors.phone && formik.touched.phone && ( <p className={styles.errors}>{formik.errors.phone}</p>)}
              <Button color="shine-shadow auth" type="submit">Sign Up</Button>
              <Button color="white auth google">
                <img src="/google.png" alt="google" /> Sign up with Google
              </Button>
              <div className={styles.alreadyAccount}>
                <div className={styles.line}></div>
                <p className={styles.haveAccount}>Already have an account?</p>
                <span className={styles.line}></span>
              </div>
              <Button children="Login Here" color="choco-shadow auth" onClick={pushLogin}/>

            </div>
            </form>
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

export default Register;
export const getServerSideProps = publicRoute(async (ctx) => {
  return {
    props: {},
  };
});
