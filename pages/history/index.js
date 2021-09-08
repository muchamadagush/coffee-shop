/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/layout';
import { CardWrapper } from '../../components/atoms';
import styles from './history.module.css';
import { useEffect, useState } from 'react';
import { privateRoute } from '../../configs/routes/privateRoute';
import cookies from 'next-cookies';
import { useDispatch } from 'react-redux';
import { deleteHistoryOrders, getOrdersHistoryAdmin, getOrdersHistoryUser } from '../../configs/redux/actions/orderAction';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const History = ({ role }, ctx) => {
  const dispatch = useDispatch()
  const userId = cookies(ctx).user_id
  let selected = []

  useEffect(() => {
    if(role === 'admin') {
      dispatch(getOrdersHistoryAdmin())
    }

    if (role === 'custommer') {
      dispatch(getOrdersHistoryUser(userId))
    }
  }, [role])
  const [data, setData] = useState([
    { id: 1, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
    { id: 2, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
    { id: 3, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
    { id: 4, name: 'Veggie tomato mix', price: 34.0, status: 'Delivered' },
  ]);

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const handleSelected = (id) => {
    if (selected.indexOf(id) === -1) {
      selected.push(id)
    } else {
      removeItemOnce(selected, id);
    }
    console.log(selected)
  }

  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Cancel',
          onClick: () => alert('Click Cancel')
        },
        {
          label: 'Delete',
          onClick: () => handleDeleteHistory()
        }
      ]
    });
  };

  const handleDeleteHistory = () => {
    dispatch(deleteHistoryOrders(selected))
  }

  return (
    <>
      <Layout isAuth={true} active="home" login={true}>
        <div className={styles.background}>
          <div className="container">
            <h3 className={styles.title}>Let’s see what you have bought!</h3>
            <p className={styles.description}>Select item to delete</p>
            <div className={styles.list}>
              <h5 className={`${styles.buttonSelect} f-poppins`} onClick={submit}>Delete</h5>

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
                            <input className="form-check-input" type="checkbox" value={item.id} id="flexCheckDefault" onClick={() => handleSelected(item.id)} defaultChecked={selected.includes(item.id) ? true : false} />
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
  const role = cookies(ctx).user_role

  return {
    props: {role: role},
  };
});