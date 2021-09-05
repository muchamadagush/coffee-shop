import Layout from '../../components/layout';
import { CardWrapper } from '../../components/atoms';
import styles from './history.module.css';
import { useState } from 'react';

const History = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Veggie tomato mix', price: 34.000, status: 'Delivered' },
    { id: 1, name: 'Veggie tomato mix', price: 34.000, status: 'Delivered' },
    { id: 1, name: 'Veggie tomato mix', price: 34.000, status: 'Delivered' },
    { id: 1, name: 'Veggie tomato mix', price: 34.000, status: 'Delivered' }
  ])

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
                {data && data.map((item) => (
                  <CardWrapper className={`card ${styles.history}`}>
                    <img src="/food2.svg" alt="food" className={styles.imgItem} />
                    <div className={styles.descriptionItem}>
                      <h5 className={styles.name}>{item.name}</h5>
                      <p className={`${styles.price} f-poppins fc-brown`}>IDR {item.price}</p>
                      <div className={styles.check}>
                        <p className={`${styles.status} f-poppins fc-brown`}>{item.status}</p>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value={item.id} id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">
                          </label>
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
}

export default History;