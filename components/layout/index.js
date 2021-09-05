import NavBar from './navbar';
import Head from 'next/head';
import Footer from './footer';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <NavBar isAuth={props.isAuth} active={props.active} />
      {props.children}
      <Footer login={props.login} />
    </div>
  );
};

export default Layout;
