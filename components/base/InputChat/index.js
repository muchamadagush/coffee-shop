/* eslint-disable @next/next/no-img-element */
import styles from "./inputChat.module.css"

const InputChat = () => {
  return (
    <div className={styles.container}>
      <input name="chat" type="text" className={styles.input} />
      <img src="/camera.svg" alt="add-image" className={styles.camera} />
    </div>
  );
}

export default InputChat;