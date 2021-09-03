import Style from './navbar.module.css'
const NavBar = () => {
  return (
    <div className={Style.container}>
      <p>Coffe Shop</p>
      <div>
        <p>Home</p>
        <p>Product</p>
        <p>Your Cart</p>
        <p>History</p>
      </div>
      <button>Login</button>
      <button>sign up</button>
    </div>
  );
}

export default NavBar;