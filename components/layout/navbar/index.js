import Style from './navbar.module.css';
import { Button } from '../../atoms';
import styled from 'styled-components';
import { useState } from 'react';
const NavBar = (props) => {
  const [drop, setDrop] = useState(false);
  const handleDropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else if (drop === true) {
      setDrop(false);
    }
  };
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <img src="logoCoffeShop.svg" alt="logoCoffee" />
        <p className="fs-20 fw-700 fc-black">Coffee Shop</p>
      </div>
      <button className={Style.buttonCollapse} onClick={handleDropDown}>
        <hr />
        <hr />
        <hr />
      </button>
      <div className={`${drop ? Style.hidden : Style.content}`}>
        <p className={`fs-16 ${props.active === 'home' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>Home</p>
        <p className={`fs-16 ${props.active === 'product' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>Product</p>
        <p className={`fs-16 ${props.active === 'cart' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>Your Cart</p>
        <p className={`fs-16 ${props.active === 'history' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>History</p>
      </div>
      {props.isAuth ? (
        <div className={`${drop ? Style.hidden : Style.profileContainer}`}>
          <form className={Style.inputContainer}>
            <button>
              <img src="search.svg" alt="seach button" className={Style.searchButton} />
            </button>
            <input type="text" placeholder="Search" className={`fs-15 fw-400 ${Style.input}`} />
          </form>
          <img src="chat.svg" alt="msg" />
          <img src="avatar1.svg" alt="profile" className={Style.profile} />
        </div>
      ) : (
        <Styles>
          <div className={`${drop ? Style.hidden : 'buttonContainer'}`}>
            <p className="fs-16 fw-500 fc-black">Login</p>
            <Button className="button" color="shine">
              Sign Up
            </Button>
          </div>
        </Styles>
      )}
    </div>
  );
};
const Styles = styled.div`

.buttonContainer {
  display: flex;
  gap: 40px;
  .button {
    width: 150px;
    height: 45px;
    font-weight: 500px;
    font-size: 16px;
  }
}
`;
export default NavBar;
