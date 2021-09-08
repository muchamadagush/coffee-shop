import { useState } from "react";
import { BrownCard, CardWrapper } from "../../components/atoms";
import InputChat from "../../components/base/InputChat";
import InputSearch from "../../components/base/InputSearch";
import Layout from "../../components/layout";
import styles from "./chat.module.css";
const Chat = () => {
  const [admin, setAdmin] = useState([
    {
      id: 1,
      name: "Jason",
      title: "Hey, I’m Jason, Let’s talk and share what’s on your thoughts!",
      avatar: "/avatar1.svg",
    },
    {
      id: 2,
      name: "Web",
      title: "Hey, I’m Jason, Let’s talk and share what’s on your thoughts!",
      avatar: "/avatar2.svg",
    },
    {
      id: 3,
      name: "Token",
      title: "Hey, I’m Jason, Let’s talk and share what’s on your thoughts!",
      avatar: "/avatar3.svg",
    },
  ]);
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
                    {admin && admin.map((item) => (
                      <div className={styles.listAdmin}>
                        <img
                          src={item.avatar}
                          alt="profile"
                          className={styles.imgAdmin}
                        />
                        <div className={styles.titleAdmin}>
                          <h3 className={`f-poppins ${styles.nameAdmin}`}>{item.name}</h3>
                          <p className={`f-poppins ${styles.descAdmin}`}>{item.title}</p>
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
