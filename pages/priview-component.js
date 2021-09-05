import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, CardShadow, CardwFooter, CardWrapper } from '../components/atoms';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Styles className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Ini Contoh Buttonnya</h2>
      <h4>untuk propsnya pakai color="warnanya"</h4>
      <h5>nanti tinggal diatur height width dan ukuran font sizenya</h5>
      <div className="btn-collection">
        {/* CONTOH PEMANGGILAN DAN PROPSNYA */}
        {/* dan nama untuk warnanya */}
        <Button className="namanya-bebass-terserah-apa-aja" color="shine">
          shine
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="choco">
          choco
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="white">
          white
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="gray">
          gray
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="choco-shadow">
          choco-shadow
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="shine-shadow">
          shine-shadow
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="white-choco">
          white-choco
        </Button>
        <Button className="namanya-bebass-terserah-apa-aja" color="black">
          black
        </Button>
      </div>
      <h3>Basic Card wrappernya</h3>
      <CardWrapper className="card">Halooow</CardWrapper>
      <CardwFooter className="card-profile">Test Dayooo</CardwFooter>
      <CardShadow className="card-shadow">UWOHHH</CardShadow>
    </Styles>
  );
}
const Styles = styled.div`
  .btn-collection {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: space-between;
    .button {
      width: 250px;
      height: 70px;
    }
  }
  .card {
    padding: 30px;
    width: 150px;
    height: 60px;
  }
  .card-profile {
    height: 500px;
    width: 450px;
  }
  .card-shadow {
    margin-top: 50px;
    height: 150px;
    width: 450px;
  }
`;