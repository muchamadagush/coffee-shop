import NavBar from './navbar';
import Head from 'next/head';
import Footer from './footer';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/logoCoffeShop.svg" />
      </Head>
      <NavBar isAuth={props.isAuth} active={props.active} />
      <div className="layoutBox">{props.children}</div>
      <Footer login={props.login} />
    </div>
  );
};

export default Layout;
