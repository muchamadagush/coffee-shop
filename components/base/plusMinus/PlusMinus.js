import { useState } from 'react';
import Style from './plusMinus.module.css';
const PlusMinus = ({ itemAmount, maxAmount, type }) => {
  const [amount, setAmount] = useState(itemAmount ? itemAmount : 1);
  const handlePlusAmount = () => {
    const newAmount = amount + 1;
    if (newAmount < maxAmount) {
      setAmount(newAmount);
      // dispatch(updateAmount(newAmount));
    } else {
      setAmount(maxAmount);
      // dispatch(updateAmount(maxAmount));
    }
  };
  const handleMinusAmount = () => {
    let newAmount = amount - 1;
    if (newAmount > 0) {
      setAmount(newAmount);
      // dispatch(updateAmount(amount));
    } else {
      setAmount(0);
      // dispatch(updateAmount(0));
    }
  };
  return (
    <div className={Style.plusMinusBox}>
      <button
        className={`f-poppins fs-24 fw-900 fc-black ${Style.button} ${type === 'detail' ? Style.detail : null}`}
        onClick={handlePlusAmount}
      >
        +
      </button>
      <p className="f-poppins fs-24 fw-900 fc-black">{itemAmount ? itemAmount : amount}</p>
      <button
        className={`f-poppins fs-24 fw-900 fc-black ${Style.button} ${type === 'detail' ? Style.detailLeft : null}`}
        onClick={handleMinusAmount}
      >
        -
      </button>
    </div>
  );
};

export default PlusMinus;
