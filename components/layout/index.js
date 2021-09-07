import NavBar from './navbar';
import Head from 'next/head';
import Footer from './footer';
import { useSelector } from 'react-redux';
const Layout = (props) => {
  const {profile} = useSelector(state => state.user)
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <NavBar isAuth={Object.keys(profile).length === 0 ? false : true} active={props.active} />
      <div className="layoutBox">{props.children}</div>
      <Footer login={props.login} />
    </div>
  );
};

export default Layout;
