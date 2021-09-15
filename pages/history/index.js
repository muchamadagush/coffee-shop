/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/layout';
import { CardWrapper } from '../../components/atoms';
import styles from './history.module.css';
import { useEffect, useState } from 'react';
import { privateRoute } from '../../configs/routes/privateRoute';
import cookies from 'next-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHistoryOrders, getOrdersHistoryAdmin, getOrdersHistoryUser } from '../../configs/redux/actions/orderAction';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useRouter } from 'next/router';

const History = ({ role }, ctx) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const userId = cookies(ctx).user_id
  let selected = []

  useEffect(() => {
    if (role === 'admin') {
      dispatch(getOrdersHistoryAdmin())
    }

    if (role === 'custommer') {
      dispatch(getOrdersHistoryUser(userId))
    }
  }, [role, dispatch, userId])

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

  const { order } = useSelector(state => state.order)

  const handleDeleteHistory = () => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete the history?",
      icon: "warning",
      buttons: [
        'No, cancel it!',
        'Yes, I am sure!'
      ],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        dispatch(deleteHistoryOrders(selected, userId))
      } else {
        swal("Cancelled", "Your history order is safe :)", "error");
      }
    })
  }

  const showHistoryDetail = (id) => {
    router.push(`/payment/${id}`)
  }

  return (
    <>
      <Layout isAuth={true} active="history" login={true}>
        <div className={styles.background}>
          <div className="container">
            <h3 className={styles.title}>Let’s see what you have bought!</h3>
            {role === 'admin' ? (
              ''
            ) : (
              <>
                <p className={styles.description}>Select item to delete</p>
                <h5 className={`${styles.buttonSelect} f-poppins`} onClick={handleDeleteHistory}>Delete</h5>
              </>
            )}

            <div className={styles.item}>
              {order &&
                order.map((item) => (
                  <CardWrapper className={`card ${styles.history}`} key={item.id_order}>
                    <div className={styles.wrapper} onClick={() => showHistoryDetail(item.id_order)}>
                      <img src={item.image_product} alt="food" className={styles.imgItem} />
                      <div className={styles.descriptionItem}>
                        <h5 className={styles.name}>{item.name_product}</h5>
                        <p className={`${styles.price} f-poppins fc-brown`}>IDR {item.subtotal}</p>
                        <p className={`${styles.status} f-poppins fc-brown`}>{item.status_payment}</p>
                      </div>
                    </div>
                    <div className={styles.check}>
                      {role === 'admin' ? (
                        ''
                      ) : (
                        <div className={`form-check ${styles.checkbox}`}>
                          <input className="form-check-input" type="checkbox" value={item.id_order} id="flexCheckDefault" onClick={() => handleSelected(item.id_order)} defaultChecked={selected.includes(item.id_order) ? true : false} />
                          <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                        </div>
                      )}
                    </div>
                  </CardWrapper>
                ))}
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
    props: { role: role },
  };
});