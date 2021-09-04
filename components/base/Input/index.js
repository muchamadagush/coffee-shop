import styles from "./input.module.css";

const Input = ({ label, name, type, id, placeholder, actionChange, giveClass }) => {
  return (
    <>
      <div className={`${styles.container} ${giveClass ? styles[giveClass] : ''}`}>
        <label className={styles.label}>{label}</label>
        <input name={name} type={type} id={id} placeholder={placeholder} onChange={actionChange} className={styles.input} />
      </div>
    </>
  );
}

export default Input;