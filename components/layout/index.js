import NavBar from './navbar';
import Footer from './footer';
const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
