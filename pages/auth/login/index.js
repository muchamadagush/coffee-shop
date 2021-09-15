/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/base/Input';
import styles from './login.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '../../../configs/redux/actions/userAction';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { publicRoute } from '../../../configs/routes/publicRoute';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pushSignUp = () => {
    router.push('/register');
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(login(values, router));
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email is Invalid').required('email is required'),
      password: Yup.string().required('Password is required'),
    }),
  });

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/logoCoffeShop.svg" />
      </Head>
      <div className={styles.login}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.brand}>
                <img src="/logoCoffeShop.svg" alt="logo" className={styles.logo} />
                <h5 className={styles.title}>Coffee Shop</h5>
              </div>
              <h3 className={styles.labelSignUp}>Login</h3>
            </header>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.formRegister}>
                <Input
                  name="email"
                  type="text"
                  id="email"
                  actionChange={formik.handleChange}
                  placeholder="Enter your email adress"
                  label="Email Adress :"
                />
                {formik.errors.email && formik.touched.email && <p className={styles.errors}>{formik.errors.email}</p>}

                <Input
                  name="password"
                  type="password"
                  actionChange={formik.handleChange}
                  value={formik.values.password}
                  id="password"
                  placeholder="Enter your password"
                  label="Password :"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className={styles.errors}>{formik.errors.password}</p>
                )}
                <Link href="/forgot-password">
                  <a className={styles.forgot}>Forgot password?</a>
                </Link>
                <Button type="submit" color="shine-shadow auth">
                  Login
                </Button>
                <Button color="white auth google">
                  <img src="/google.png" alt="google" /> Login with Google
                </Button>
                <div className={styles.alreadyAccount}>
                  <div className={styles.line}></div>
                  <p className={styles.haveAccount}>Don’t have an account?</p>
                  <span className={styles.line}></span>
                </div>
                <Button type="button" children="Sign up here" color="choco-shadow auth" onClick={pushSignUp} />
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
                  <p className={styles.content}>
                    Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality
                    beans
                  </p>
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
};

export default Login;

export const getServerSideProps = publicRoute(async (ctx) => {
  return {
    props: {},
  };
});
