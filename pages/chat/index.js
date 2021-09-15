/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BrownCard, CardWrapper } from "../../components/atoms";
import InputChat from "../../components/base/InputChat";
import InputSearch from "../../components/base/InputSearch";
import Layout from "../../components/layout";
import { privateRoute } from "../../configs/routes/privateRoute";
import styles from "./chat.module.css";
import io from "socket.io-client";
import cookies from "next-cookies"
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../configs/redux/actions/userAction";

const Chat = ({ token }) => {
  const dispatch = useDispatch()
  const [socket, setSocket] = useState(null)
  const [selected, setSelected] = useState('')

  const setupSocket = () => {
    const resultSocket = io("ws://localhost:4000", {
      query: {
        token: token,
      },
    });
    setSocket(resultSocket);
  };

  useEffect(() => {
    dispatch(getUsers())

    if (token && !socket) {
      setupSocket();
    }
  }, [socket]);

  useEffect(() => {
    if (selected) {
      dispatch(getUsers(selected.id))
    }
  }, [selected]);

  const {users, user} = useSelector(state => state.user)

  return (
    <>
      <Layout>
        <div className={styles.bg}>
          <div className="container">
            <div className={styles.chat}>
              <div className={styles.listChat}>
                <BrownCard>
                  <div className={styles.listCard}>
                    <InputSearch />
                    <p className={`f-poppins ${styles.titleListAdmin}`}>Choose a staff you want to talk with</p>
                    {users && users.map((item) => (
                      <div className={styles.listAdmin} key={item.id} onClick={() => setSelected(() => item)}>
                        <img
                          src={item.avatar}
                          alt="profile"
                          className={styles.imgAdmin}
                        />
                        <div className={styles.titleAdmin}>
                          <h3 className={`f-poppins ${styles.nameAdmin}`}>{item.first_name}</h3>
                          <p className={`f-poppins ${styles.descAdmin}`}>{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </BrownCard>
              </div>
              <div className={styles.roomChat}>
                <CardWrapper>
                  <div className={styles.roomCard}>
                    <h1 className={`f-poppins ${styles.title}`}>Room Chat</h1>
                    <div className={styles.admin}>
                      <img
                        src="/avatar1.svg"
                        alt="profile"
                        className={styles.imgAdmin}
                      />
                      <div className={styles.titleAdmin}>
                        <h3 className={`f-poppins ${styles.nameChat}`}>Jason</h3>
                        <p className={`f-poppins ${styles.descChat}`}>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</p>
                      </div>
                    </div>
                  </div>
                </CardWrapper>

                <div className={styles.displayChat}>
                  <CardWrapper>
                    <div className={styles.chatUser}>

                    </div>
                  </CardWrapper>
                </div>
                <InputChat />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Chat;

export const getServerSideProps = privateRoute(async (ctx) => {
  let cookie = cookies(ctx).token

  return {
    props: {token: cookie}, // will be passed to the page component as props
  }
})