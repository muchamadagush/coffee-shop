
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, CardShadow, CardwFooter, CardWrapper } from '../components/atoms';
import {
  Netflix,
  Reddit,
  Amazon,
  Discord,
  Spotify,
  Map,
  TeamWork,
  CheckList,
  HeroHome,
  HeartIcon,
  NavIcon,
  PersonIcon,
} from '../public';


import Layout from '../components/layout';
import { Breakpoints } from '../utils';
import { CardProduct, Carousel } from '../components/molecules';
export default function Home() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Style>
        <HeroHomeContent>
          <Image src={HeroHome} layout="fill" objectFit="cover" quality={100} alt="Background" />
          <div className="hero-content">
            <div className="hero-content--info">
              <p className="fs-50 fw-700 fc-white">Start Your Day with Coffee and Good Meals</p>
              <p className="fs-20 fw-700 fc-white">
                We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day
                with us for a bigger smile!
              </p>
            </div>
            <Button className="button" color="shine-shadow">
              Get Started
            </Button>
          </div>
        </HeroHomeContent>
        <CardWrapper>
          <OurStore>
            <div className="store">
              <div className="left flex-item">
                <div className="item">
                  <div className="image">
                    <div className="div">
                      <Image width="24" height="24" src={PersonIcon} alt="image"></Image>
                    </div>
                  </div>
                  <div className="info">
                    <p className="fs-25 fw-700 fc-black">90+</p>
                    <p className="fs-20 fw-400 fc-grey">Staff</p>
                  </div>
                </div>
              </div>
              <div className="middle flex-item">
                <div className="item">
                  <div className="image">
                    <div className="div">
                      <Image width="24" height="24" src={NavIcon} alt="image"></Image>
                    </div>
                  </div>
                  <div className="info">
                    <p className="fs-25 fw-700 fc-black">30+</p>
                    <p className="fs-20 fw-400 fc-grey">Stores</p>
                  </div>
                </div>
              </div>
              <div className="right flex-item">
                <div className="item">
                  <div className="image">
                    <div className="div">
                      <Image width="24" height="24" src={HeartIcon} alt="image"></Image>
                    </div>
                  </div>
                  <div className="info">
                    <p className="fs-25 fw-700 fc-black">800+</p>
                    <p className="fs-20 fw-400 fc-grey">Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blur">a</div>
          </OurStore>
        </CardWrapper>

        <StyleTeamWork>
          <div className="image">
            <Image src={TeamWork} alt="team work icon"></Image>
          </div>
          <div className="information">
            <div className="information-content">
              <p className="fs-35 fw-500 fc-black">We Provide Good Coffee and Healthy Meals</p>
              <p className="fs-16 fw-400 fc-grey">
                You can explore the menu that we provide with fun and have their own taste and make your day better.
              </p>
              <div className="information-item">
                <Image src={CheckList} alt="checklist" />
                <p>High quality beans</p>
              </div>
              <div className="information-item">
                <Image src={CheckList} alt="checklist" />
                <p>Healthy meals, you can request the ingredients</p>
              </div>
              <div className="information-item">
                <Image src={CheckList} alt="checklist" />
                <p>Chat with our staff to get better experience for ordering</p>
              </div>
              <div className="information-item">
                <Image src={CheckList} alt="checklist" />
                <p>Free member card with a minimum purchase of IDR 200.000.</p>
              </div>
            </div>
          </div>
        </StyleTeamWork>
        <FavoriteProduct>
          <div className="header">
            <p className="fs-35 fw-500 fc-black">Here is People’s Favorite</p>
            <p className="fs-16 fw-400 fc-grey">
              Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!
            </p>
          </div>
          <div className="wrapper">
            {/* <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct> */}
          </div>
        </FavoriteProduct>
        <div className="background">
          <Location>
            <div>
              <div className="information">
                <p className="fs-35 fw-500 fc-black">Visit Our Store in the Spot on the Map Below</p>
                <p className="fs-16 fw-f00 fc-grey">
                  See our store in every city on the spot and spen your good day there. See you soon!
                </p>
              </div>
              <Image src={Map} alt="maps" />
            </div>
          </Location>
          <PartnerShip>
            <p className="fs-30 fc-black fw-500">Our Partner</p>
            <div className="our-partner partner">
              <div className="partner">
                <img src={Netflix.src} alt="netflix" />
              </div>
              <div className="partner">
                <img src={Reddit.src} alt="reddit" />
              </div>
              <div className="partner">
                <img src={Amazon.src} alt="amazon" />
              </div>
              <div className="partner">
                <img src={Discord.src} alt="discord" />
              </div>
              <div className="partner">
                <img src={Spotify.src} alt="Spotify" />
              </div>
            </div>
          </PartnerShip>
          <Testimoni>
            <div className="header">
              <p className="fs-35 head fw-500 fc-black">Loved by Thousands of Happy Customer</p>
              <p className="fs-16 subhead fw-400 fc-grey">
                These are the stories of our customers who have visited us with great pleasure.
              </p>
            </div>
            <div className="custom-carousel">
              <Carousel src={CheckList.src}></Carousel>
            </div>
          </Testimoni>
        </div>
        <CardWrapper>
          <OurPromo>
            <div className="left">
              <div>
                <p className="fs-35 fw-500 fc-black">Check our promo today!</p>
                <p className="fs-16 fw-400 fc-grey">Let's see the deals and pick yours!</p>
              </div>
            </div>
            <div className="right">
              <div className="see-promo">
                <Button className="button" color="shine-shadow">
                  See Promo
                </Button>
              </div>
            </div>
          </OurPromo>
        </CardWrapper>
        <div className="wedge"></div>
      </Style>
    </Layout>
  );
}
const Style = styled.div`
  background: #fdfdfd;
  position: relative;
  .wedge {
    background: #f8f8f8;
    width: 100%;
    z-index: 0;
    bottom: 0;
    position: absolute;
    height: 100px;
  }
  .background {
    background: #fdfdfd;
  }
`;

const HeroHomeContent = styled.div`
  position: relative;
  height: calc(100vh);
  .hero-content {
    position: absolute;
    top: 20%;
    left: 10%;
    padding-right: 10%;

    max-width: calc(570px + 10%);
    &--info {
      p {
        padding: 0;
        margin: 0;
      }
      margin-bottom: 4rem;
    }
      .button {
        width: 50%;
        height: 60px;
        font-weight: 700;
        font-size: 16px;
        color: #6a4029;
      }
    }
`;

const OurStore = styled.div`
  ${Breakpoints.greaterThan('sm')`
  position: relative;
  bottom: 120px;
    `}
  z-index: 1;
  margin: 0 auto;
  max-width: 1140px;
  .store {
    display: flex;
    align-items: center;
    ${Breakpoints.lessThan('sm')`
    flex-direction: column;`}
    background: #fff;
    max-width: 1140px;
    border-radius: 20px;
    padding: 66px 70px;
    margin: 0 auto;
  }
  ${Breakpoints.lessThan('md')`
    flex-direction: column;
    padding: 0;
  `}
  .flex-item:nth-child(2) {
    ${Breakpoints.greaterThan(`sm`)`
    border-right: 2px solid #eeeff2;
    border-left: 2px solid #eeeff2;
    `}
  }
  .blur {
    position: absolute;
    left: 80px;
    top: 60px;
    bottom: -80px;
    right: 80px;
    background: #0d1025;
    opacity: 0.06;
    z-index: -1;
    filter: blur(114px);
    border-radius: 10px;
  }
  .flex-item {
    flex: 1;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 36px;
      .image {
        background: #ffba33;
        padding: 0.8rem;
        border-radius: 50%;
        .div {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
      .info {
        p {
          margin: 0;
          padding: 0;
          line-height: 34px;
        }
      }
    }
  }
`;


const StyleTeamWork = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  ${Breakpoints.lessThan('md')`
  flex-direction: column;
  `}
  .image {
    display: flex;
    justify-content: center;
    flex: 1 10%;
  }
  .information {
    flex: 1;
    &-content {
      max-width: 432px;
    }
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      p {
        margin: 0;
        margin-left: 10px;
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        color: #4f5665;
      }
    }
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
  .information {
    margin-top: 182px;
    margin-bottom: 155px;
  }
`;

const PartnerShip = styled.div`
  margin-top: 8rem;
  p {
    text-align: center;
  }
  .our-partner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
  }
`;

const Testimoni = styled.div`
  margin-top: 6rem;
  .custom-carousel {
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .header {
    .head {
      margin: 0 auto;
      max-width: 447.81px;
      margin-bottom: 20px;
    }
    .subhead {
      margin: 0 auto;
      max-width: 555px;
    }
    margin-bottom: 6rem;
  }
  margin-bottom: 150px;
  p {
    text-align: center;
  }
`;

const OurPromo = styled.div`
  position: relative;
  // top: 100px;
  display: flex;
  height: 233px;
  z-index: 1;
  max-width: 1140px;
  background: #fff;
  border-radius: 20px;
  padding: 58.5px 70px;
  margin: 0 auto;
  align-items: center;
  ${Breakpoints.lessThan('md')`
  flex-direction: column;
  padding: 0;
  `}
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
    width: 100%;
    .see-promo {
      .button {
        width: 100%;
        ${Breakpoints.greaterThan('md')`
        margin-left: auto;
        display: block;
        float: none;
        width: 40%;
        `}
        height: 60px;
      }
    }
  }
`;

const FavoriteProduct = styled.div`
  margin-top: 14rem;
  .header {
    p {
      text-align: center;
    }
    margin-bottom: 8rem;
  }
  .wrapper {
    display: grid;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;
    margin-bottom: 3rem;
    grid-template-columns: repeat(1, 1fr);
    ${Breakpoints.lessThan('xsm')`
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  `}
    ${Breakpoints.greaterThan('md')`
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 35px;
  `}
  ${Breakpoints.greaterThan('xlg')`
    grid-template-columns: repeat(auto-fit, minmax(330px, 330px));
    column-gap: 35px;
    row-gap: 35px;
  `}
  }
`;
