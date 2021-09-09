/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Arifin, Agus, Rico, Farrel, Nisa } from '../../../public/team';

function Index(props) {
  const data = [
    {
      name: 'Rico',
      image: Rico,
      location: 'Depok',
      description:
        '“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!',
    },

    {
      name: 'Agus',
      image: Agus,
      location: 'Jombang',
      description:
        '“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte',
    },
    {
      name: 'Farrel',
      image: Farrel,
      location: 'Bojonegoro',
      description:
        '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!',
    },
    {
      name: 'Nisa',
      image: Nisa,
      location: 'Tangerang',
      description:
        '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!',
    },
    {
      name: 'Arifin',
      image: Arifin,
      location: 'Tuban',
      description:
        '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!',
    },
  ];
  const settings = {
    // autoplay: true,
    autoplaySpeed: 50,
    slidesToShow: 3,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Style>
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <Carousel key={index}>
              <div className="carousel-content">
                <Profile>
                  <div className="profile">
                    <div className="image">
                      <img src={item.image.src} alt="product"></img>
                    </div>
                    <div>
                      <p className="fs-18 fw-500 fc-black carousel-text">{item.name}</p>
                      <p className="fs-14 fw-400 fc-grey carousel-text">{item.location}</p>
                    </div>
                  </div>
                  <div className="rating"></div>
                </Profile>
                <Comment>
                  <p className="carousel-text">{item.description}</p>
                </Comment>
              </div>
            </Carousel>
          );
        })}
      </Slider>
    </Style>
  );
}

const Style = styled.div`
  height: 100%;
  position: relative;
  // overflow: hidden;
`;

const Carousel = styled.div`
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;

  position: relative;
  height: 100%;
  .carousel-content {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 100%;
    padding: 30px;
  }

  border: 2px solid #dddddd;
  border-radius: 10px;
`;
const Profile = styled.div`
  display: flex;
  margin-bottom: 20px;
  .profile {
    display: flex;
    gap: 10px;
    .carousel-text {
      text-align: left;
      margin: 0;
      padding: 0;
    }
  }
  .image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
`;

const Comment = styled.div`
  // background: red;
  .carousel-text {
    padding: 0;
    margin: 0;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    color: #0b132a;
  }
`;
export default Index;
