import Style from './navbar.module.css';
import { Button } from '../../atoms';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
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
      <Link href="/home">
        <a>
          <div className={Style.title}>
            <img src="/logoCoffeShop.svg" alt="logoCoffee" />
            <p className="fs-20 fw-700 fc-black">Coffee Shop</p>
          </div>
        </a>
      </Link>
      <button className={Style.buttonCollapse} onClick={handleDropDown}>
        <hr />
        <hr />
        <hr />
      </button>
      <div className={`${Style.content} ${drop ? Style.hidden : Style.visible}`}>
        <Link href="/home">
          <a>
            <p className={`fs-16 ${props.active === 'home' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>Home</p>
          </a>
        </Link>
        <Link href="/product">
          <a>
            <p className={`fs-16 ${props.active === 'product' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>Product</p>
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <p className={`fs-16 ${props.active === 'cart' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>Your Cart</p>
          </a>
        </Link>
        <Link href="/history">
          <a>
            <p className={`fs-16 ${props.active === 'history' ? 'fw-700 fc-brown' : 'fw-400 fc-grey'}`}>History</p>
          </a>
        </Link>
      </div>
      {props.isAuth ? (
        <div className={`${Style.profileContainer} ${drop ? Style.hidden : Style.visible}`}>
          <form className={Style.inputContainer}>
            <button>
              <img src="/search.svg" alt="seach button" className={Style.searchButton} />
            </button>
            <input type="text" placeholder="Search" className={`fs-15 fw-400 ${Style.input}`} />
          </form>
          <img src="/chat.svg" alt="msg" />
          <img src="/avatar1.svg" alt="profile" className={Style.profile} />
        </div>
      ) : (
        <div className={`${Style.profileContainer} ${drop ? Style.hidden : Style.visible}`}>
          <Link href="/auth/login">
            <a>
              <p className="fs-16 fw-500 fc-black">Login</p>
            </a>
          </Link>
          <Link href="/auth/register">
            <a>
              <Styles>
                <Button className="button" color="shine">
                  Sign Up
                </Button>
              </Styles>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
const Styles = styled.div`
  .button {
    width: 150px;
    height: 45px;
    font-weight: 500px;
    font-size: 16px;
  }
`;
export default NavBar;
