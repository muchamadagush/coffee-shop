import NavBar from './navbar';
import Footer from './footer';
const Layout = (props) => {
  return (
    <div>
      <NavBar isAuth={props.isAuth} active={props.active}/>
      {props.children}
      <Footer login={props.login}/>
    </div>
  );
};

export default Layout;
