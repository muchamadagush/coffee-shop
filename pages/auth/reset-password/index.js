import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/base/Input";
import styles from "./resetpassword.module.css";
import { publicRoute } from "../../../configs/routes/publicRoute";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Head from 'next/head';
import Layout from "../../../components/layout";

const ResetPassword = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(login(values, router))
        },
        validationSchema: Yup.object({
            password: Yup.string().required("password is required").min(8, "Password must be at least 8 characters"),
            password2: Yup.string().oneOf([Yup.ref('password'), null],"Please make sure both passwords match.").required("password confirmation is required")
        })
    })
    return (
        <div>
            <Head>
                <title>Reset Password</title>
                <link rel="icon" href="/logoCoffeShop.svg" />
            </Head>
            <div className={styles.forgotPassword}>
                <div className={styles.left}>
                </div>
                <div className={styles.right}>
                    <div className={styles.container}>
                        <header className={styles.header}>
                            <div className={styles.brand}>
                                <img src="/logoCoffeShop.svg" alt="logo" className={styles.logo} />
                                <h5 className={styles.title}>Coffee Shop</h5>
                            </div>
                            <h1 className={styles.labelForgot}>Forgot your password?</h1>
                            <p className={styles.description}>Don’t worry, we got your back!</p>
                        </header>

                        <div className={styles.formForgot}>
                            <form onSubmit={formik.handleSubmit}>
                            <Input name="password" type="password" actionChange={formik.handleChange} value={formik.values.password}  id="password" placeholder="Enter your new password" label="Password :" />
                            {formik.errors.password && formik.touched.password && ( <p className={styles.errors}>{formik.errors.password}</p>)}
                            <Input name="password2" type="password" actionChange={formik.handleChange} value={formik.values.password2}  id="password" placeholder="Confirm your new password" label="Confirm Password :" />
                            {formik.errors.password2 && formik.touched.password2 && ( <p className={styles.errors}>{formik.errors.password2}</p>)}
                                <Button type="submit" children="Send" color="shine-shadow forgot" />
                            </form>
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
        </div>
    )
}

export default ResetPassword
