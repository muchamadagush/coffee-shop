import styles from "./input.module.css";
import PropTypes from 'prop-types';

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
Input.propTypes = {
    type : PropTypes.string.isRequired,
    name : PropTypes.string,
    label : PropTypes.string,
    id : PropTypes.string,
    placeholder: PropTypes.string,
    actionChange: PropTypes.func,
    className: PropTypes.string,
}
export default Input;