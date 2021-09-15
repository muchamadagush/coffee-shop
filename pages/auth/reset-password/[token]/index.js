/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import { useState } from "react";
import Button from "../../../../components/atoms/Button";
import Input from "../../../../components/base/Input";
import styles from "./resetpassword.module.css";
import { publicRoute } from "../../../../configs/routes/publicRoute";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Head from 'next/head';
import Layout from "../../../../components/layout";
import { resetPasswordUser } from "../../../../configs/redux/actions/userAction";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";


const ResetPassword = ({token}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const formik = useFormik({
      initialValues: {
        newPassword: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        dispatch(resetPasswordUser(values.newPassword, token, router));
      },
      validationSchema: Yup.object({
        newPassword: Yup.string()
          .required("password is required")
          .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
          .oneOf(
            [Yup.ref("newPassword"), null],
            "Please make sure both passwords match."
          )
          .required("password confirmation is required"),
      }),
    });
    return (
      <div>
        <Head>
          <title>Reset Password</title>
          <link rel="icon" href="/logoCoffeShop.svg" />
        </Head>
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
                <h1 className={styles.labelForgot}>Reset your password?</h1>
                <p className={styles.description}>
                  Please enter your new password!
                </p>
              </header>

              <div className={styles.formForgot}>
                <form onSubmit={formik.handleSubmit}>
                  <Input
                    name="newPassword"
                    type="password"
                    actionChange={formik.handleChange}
                    value={formik.values.newPassword}
                    id="password"
                    placeholder="Enter your new password"
                    label="Password :"
                  />
                  {formik.errors.newPassword && formik.touched.newPassword && (
                    <p className={styles.errors}>{formik.errors.newPassword}</p>
                  )}
                  <Input
                    name="confirmPassword"
                    type="password"
                    actionChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    id="password"
                    placeholder="Confirm your new password"
                    label="Confirm Password :"
                  />
                  {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword && (
                      <p className={styles.errors}>
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                  <Button
                    type="submit"
                    children="Reset"
                    color="shine-shadow forgot"
                  />
                </form>
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
      </div>
    );
}

export default ResetPassword

export const getServerSideProps = publicRoute(async (ctx) => {
    const token = ctx.params.token ;
  return {
    props: { token },
  };
});