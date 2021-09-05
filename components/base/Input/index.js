import styles from "./input.module.css";

const Input = ({ label, name, type, id, placeholder, actionChange, giveClassLabel, giveClass }) => {
  return (
    <>
      <div className={`${styles.container} ${giveClass ? styles[giveClass] : ''}`}>
        <label className={`${styles.label} ${giveClassLabel ? styles[giveClassLabel] : ''}`}>{label}</label>
        <input name={name} type={type} id={id} placeholder={placeholder} onChange={actionChange} className={styles.input} />
      </div>
    </>
  );
}

export default Input;