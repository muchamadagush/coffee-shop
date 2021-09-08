/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/layout';
import { CardWrapper } from '../../components/atoms';
import styles from './history.module.css';
import { useState } from 'react';
import { privateRoute } from '../../configs/routes/privateRoute';

const History = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
    { id: 1, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
    { id: 1, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
    { id: 1, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
  ]);

  return (
    <>
      <Layout isAuth={true} active="home" login={true}>
        <div className={styles.background}>
          <div className="container">
            <h3 className={styles.title}>Let’s see what you have bought!</h3>
            <p className={styles.description}>Select item to delete</p>
            <div className={styles.list}>
              <h5 className={`${styles.buttonSelect} f-poppins`}>Select All</h5>

              <div className={styles.item}>
                {data &&
                  data.map((item, index) => (
                    <CardWrapper className={`card ${styles.history}`} key={index}>
                      <img src="/food2.svg" alt="food" className={styles.imgItem} />
                      <div className={styles.descriptionItem}>
                        <h5 className={styles.name}>{item.name}</h5>
                        <p className={`${styles.price} f-poppins fc-brown`}>IDR {item.price}</p>
                        <div className={styles.check}>
                          <p className={`${styles.status} f-poppins fc-brown`}>{item.status}</p>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={item.id} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                          </div>
                        </div>
                      </div>
                    </CardWrapper>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default History;

export const getServerSideProps = privateRoute(async (ctx) => {
  return {
    props: {},
  };
});