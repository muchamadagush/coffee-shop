import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, CardShadow, CardwFooter, CardWrapper } from '../components/atoms';
import { Netflix, Reddit, Amazon, Discord, Spotify, Map } from '../public';
import TeamWork from '../public/homeImage1.png';
import HeroHome from '../public/background1.png';
import CheckList from '../public/checklist.svg';
import Layout from '../components/layout';
export default function Home() {
  return (
    <Layout>
      <Style>
        <HeroHomeContent>
          <div className="custom-hero">
            <div className="hero-image">
              <img src={HeroHome.src} objectFit="cover" alt="Background" />
            </div>
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
          </div>
        </HeroHomeContent>
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
          <div>
            <p className="fs-35 fw-500 fc-black">Loved by Thousands of Happy Customer</p>
            <p className="fs-16 fw-400 fc-grey">
              These are the stories of our customers who have visited us with great pleasure.
            </p>
          </div>
        </Testimoni>
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
      </Style>
    </Layout>
  );
}
const Style = styled.div`
  background: #fdfdfd;
`;
const HeroHomeContent = styled.div`
  .custom-hero {
    position: relative;
  }
  .hero-image {
    width: 100vw;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .hero-content {
    position: absolute;
    top: 25%;
    bottom: 0;
    left: 9%;
    &--info {
      p {
        padding: 0;
        margin: 0;
      }
      margin-bottom: 4rem;
    }
    max-width: 570px;
  }
  .button {
    width: 50%;
    height: 60px;
    font-weight: 700;
    font-size: 16px;
    color: #6a4029;
  }
`;
const StyleTeamWork = styled.div`
  display: flex;
  align-items: center;

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
  alignt-items: center;
  p {
    text-align: center;
  }
  .information {
    margin-top: 182px;
    margin-bottom: 155px;
  }
`;

const PartnerShip = styled.div`
  p {
    text-align: center;
  }
  .our-partner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
`;

const Testimoni = styled.div`
  p {
    text-align: center;
  }
`;

const OurPromo = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  height: 233px;
  max-width: 1140px;
  background: #fff;
  border-radius: 20px;
  padding: 58.5px 70px;
  margin: 0 auto;
  align-items: center;
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
    .see-promo {
      .button {
        margin-left: auto;
        display: block;
        float: none;
        width: 40%;
        height: 60px;
      }
    }
  }
`;
