/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, CardwFooter, CardWrapper, InputField } from '../../components/atoms';
import Layout from '../../components/layout';
import { privateRoute } from '../../configs/routes/privateRoute';
import { getProfile, updateuser } from '../../configs/redux/actions/userAction';
import axios from 'axios';
import swal from 'sweetalert';
import cookies from 'next-cookies';
import router from 'next/router';
import backendApi from '../../configs/api/backendApi';

function ProfileUser({ tokenAccess }) {
  const dispatch = useDispatch();
  const [imagePrev, setImagePrev] = useState(null);
  const [errImage, setErrImage] = useState(false);
  const [errImageType, setErrImageType] = useState(false);
  const profile = useSelector((state) => state.user.profile);
  const [reset, setReset] = useState(false);
  console.log(tokenAccess);
  useEffect(() => {
    if (tokenAccess) {
      dispatch(getProfile(tokenAccess, profile.id));
    }
  }, [reset]);

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateuser(profile, profile.id, profile.token, handlepreviewImage));
    setReset(!reset);
  };

  const handlepreviewImage = (e) => {
    e.preventDefault();
    if (e.target.files[0].size > 1048576) {
      setErrImage(true);
      setErrImageType(false);
    } else if (
      e.target.files[0].type !== 'image/png' &&
      e.target.files[0].type !== 'image/jpg' &&
      e.target.files[0].type !== 'image/jpeg'
    ) {
      setErrImageType(true);
      setErrImage(false);
    } else if (e.target.files.length !== 0) {
      setErrImage(false);
      setErrImageType(false);
      setImagePrev(URL.createObjectURL(e.target.files[0]));
      dispatch({ type: 'CHANGE_VALUE', payload: { imagePrev: imagePrev } });
    }
    // dispatch({ type: 'CHANGE_VALUE', payload: { imagePrev: imagePrev } })
    dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.files[0] } });
  };
  const handleLogout = () => {
    console.log("handle logout")
    backendApi
      .get("logout")
      .then((res) => {
        dispatch({ type: "LOGOUT" });
        swal("Success", "you're logged out ! see ya", "success");
        router.push("/login");
      })
      .catch((err) => console.log(err, "Err logout"));
  };
  return (
    <Styles>
      <Layout isAuth="true" title="Profile" userPrev={imagePrev}>
        <div className="wrapper">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h4 className="fs-35 title">User Profile</h4>
              <CardWrapper className="card">
                <div className="container"></div>
                <div className="row  no-gutters main-row">
                  <div className="col col-lg-5 col-md-4 col-sm-4">
                    <div className="side-profile-wrapper">
                      <img
                        className="image-profile"
                        src={imagePrev ? imagePrev : profile.image ? profile.image : '/avatar1.svg'}
                        alt=""
                      />
                      {errImage ? <p className="error">Image size is too large. max 1mb</p> : ''}
                      {errImageType ? (
                        <p className="error">Invalid file type. only png, jpg, and jpeg format allowed</p>
                      ) : (
                        ''
                      )}
                      <h4 className="fs-20 fw-bold">{profile.first_name}</h4>
                      <h5 className="fs-20 fw-500 email">{profile.email}</h5>
                      <div className="button_Wrap">
                        <label className="button-img" for="upload">
                          Upload File
                        </label>
                        <input id="upload" type="file" name="image" onChange={handlepreviewImage} />
                      </div>
                      <Button radius="radius-10" className="button" type="button" color="choco">
                        Remove Photo
                      </Button>
                      <Button radius="radius-20" className="edit-btn" type="button" color="white-choco">
                        Edit Password
                      </Button>
                      <h4 className="fs-20 fc-brown fw-bold text">
                        Do you want to save <br /> the change?
                      </h4>
                      <Button radius="radius-20" className="btn" type="submit" color="choco-shadow">
                        Save Change
                      </Button>

                      <Button className="btn cancel" type="button" color="shine">
                        Cancel
                      </Button>
                      <Button onClick={() => handleLogout()} className="btn log-out" type="button" color="white-choco">
                        Log Out
                      </Button>
                    </div>
                  </div>
                  <div className="col col-lg-7 col-md-8 col-sm-8">
                    <CardwFooter className="card-w-footer">
                      <div className="right-profile-wrapper">
                        <div className="header">
                          <h4 className="fc-grey fs-25 fw-bold">Contacts</h4>
                          <Button className="btn-pen" color="choco">
                            <img src="Vector (1).png" alt="" />
                          </Button>
                        </div>
                        <div className="form-wrapper">
                          <div className="row first-section-wrapper">
                            <div className="col col-lg-6 col-md-7 col-s-8">
                              <InputField
                                onChange=""
                                label="Email address : "
                                type="email"
                                name="email"
                                value={profile.email}
                                className="email-field"
                              />
                            </div>
                            <div className="col  col-lg-5 col-md-5 col-s-4">
                              <InputField
                                label="Phone numbers : "
                                type="text"
                                name="phone"
                                className="phone-field"
                                value={profile.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <InputField
                            onChange={handleChange}
                            label="Delivery address : "
                            type="text"
                            name="address"
                            // defaultValue="Zulaikha"
                            value={profile.address}
                            className="input-field address-field"
                          />
                          <h4 className="fc-grey fs-25 fw-bold details-title">Details</h4>
                          <div className="row second-section-wrapper">
                            <div className="col col-lg-6 col-md-6 ">
                              <InputField
                                onChange={handleChange}
                                label="Display name : "
                                type="text"
                                name="display_name"
                                // defaultValue="Zulaikha"
                                value={profile.display_name}
                                className="display-field"
                              />
                            </div>
                            <div className="col col-lg-5 col-md-6">
                              <InputField
                                onChange={handleChange}
                                type="date"
                                name="dateOfBirth"
                                value={profile.dateOfBirth}
                                defaultValue={profile.dateOfBirth}
                                className="date-field"
                              />
                            </div>
                          </div>
                          <InputField
                            onChange={handleChange}
                            label="First name : "
                            type="text"
                            name="first_name"
                            defaultValue="Zulaikha"
                            value={profile.first_name}
                            className="input-field second-field"
                          />
                          <InputField
                            onChange={handleChange}
                            label="Last name : "
                            type="text"
                            name="last_name"
                            defaultValue="Nirmala"
                            value={profile.last_name}
                            className="input-field second-field"
                          />
                          <div className="radio-button-wrap">
                            <input
                              id="male"
                              className="checkmark bg_black"
                              checked={profile.gender == 'male'}
                              type="radio"
                              name="gender"
                              value="male"
                              onChange={handleChange}
                            />
                            <label htmlFor="male">Male</label>

                            <input
                              id="female"
                              className="checkmark bg_black right-radio"
                              type="radio"
                              checked={profile.gender == 'female'}
                              value="female"
                              onChange={handleChange}
                              name="gender"
                            />
                            <label htmlFor="female">Female</label>
                          </div>
                        </div>
                      </div>
                    </CardwFooter>
                  </div>
                </div>
              </CardWrapper>
            </form>
          </div>
          <div className="hidden">You cant see me</div>
        </div>
      </Layout>
    </Styles>
  );
}

export default ProfileUser;
const Styles = styled.div`
  box-sizing: border-box;
  .wrapper {
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/profileBg.png');
    .title {
      color: white;
    }
    .card {
      margin-top: 31px;
      padding: 54px 45px;
      .main-row {
        grid-template-columns: 100%;

        .side-profile-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          .image-profile {
            border-radius: 100%;
            margin-bottom: 20px;
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .email {
            @media screen and (max-width: 992px) {
              font-size: 15px;
            }
            @media screen and (max-width: 576px) {
              font-size: 12px;
            }
          }
          .error {
            color: red;
            text-align: center;
          }
          .button_Wrap {
            margin-top: 20px;
            margin-bottom: 11px;
            .button-img {
              display: inline-block;
              padding-top: 10px;
              cursor: pointer;
              border: 1px solid #9b9b9b;
              box-sizing: border-box;
              border-radius: 10px;
              font-size: 15px;
              font-weight: bold;
              width: 207px;
              height: 44px;
              text-align: center;
              background: #ffba33;
              color: #6a4029;
              @media screen and (max-width: 576px) {
                width: 150px;
              }
            }

            input[type='file'] {
              position: absolute;
              z-index: -1;
              top: 10px;
              left: 8px;
              font-size: 17px;
              color: black;
            }
          }
          .button {
            width: 207px;
            height: 44px;
            font-size: 15px;
            font-weight: bold;
            @media screen and (max-width: 576px) {
              width: 150px;
            }
          }
          .edit-btn {
            margin-top: 42px;
            width: 207px;
            height: 60px;
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 34px;
            @media screen and (max-width: 576px) {
              width: 150px;
            }
          }
          .btn {
            font-size: 15px;
            font-weight: bold;
            width: 207px;
            height: 60px;
            @media screen and (max-width: 576px) {
              width: 150px;
            }
          }
          .text {
            text-align: center;
            margin-bottom: 37px;
          }
          .cancel {
            margin-top: 22px;
            margin-bottom: 41px;
          }
        }
      }
      .card-w-footer {
        @media screen and (max-width: 320px) {
          width: 100%;
          margin: 15px 2px;
        }
        .right-profile-wrapper {
          padding: 17px 30px;

          .header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .btn-pen {
              width: 47px;
              height: 49px;
              border-radius: 100%;
              @media screen and (max-width: 320px) {
                width: 30px;
                height: 30px;
              }
              img {
                @media screen and (max-width: 320px) {
                  width: 15px;
                  height: 15px;
                }
              }
            }
          }
          .form-wrapper {
            .first-section-wrapper {
              margin-top: 21px;
              .email-field {
                width: 100%;
                @media screen and (max-width: 576px) {
                  width: 100%;
                }
              }
            }
            .second-section-wrapper {
              margin-top: 47px;
              .date-field {
                padding-top: 15px;
                @media screen and (max-width: 992px) {
                  width: 100%;
                }
                @media screen and (max-width: 768px) {
                  width: 100%;
                }
                @media screen and (max-width: 576px) {
                  width: 100%;
                }
              }
            }
            .input-field {
              width: 48%;
              @media screen and (max-width: 768px) {
                width: 55%;
              }
              @media screen and (max-width: 576px) {
                width: 100%;
              }
            }
            .phone-field {
              width: 100%;
              @media screen and (max-width: 576px) {
                display: block;
              }
            }
            .display-field {
              width: 100%;
              @media screen and (max-width: 576px) {
                width: 100%;
              }
            }
            .details-title {
              margin-top: 41px;
            }
            .second-field {
              margin-top: 47px;
            }
            .address-field {
              margin-top: 47px;
            }
            .radio-button-wrap {
              text-align: center;
              margin-top: 100px;
              .checkmark {
                height: 30px;
                width: 30px;
                -webkit-appearance: none;
                border-radius: 50%;
                vertical-align: middle;
                outline: none;
                cursor: pointer;
                @media screen and (max-width: 320px) {
                  height: 28px;
                  width: 28px;
                }
              }
              .right-radio {
                margin-left: 120px;
                @media screen and (max-width: 576px) {
                  margin-left: 10px;
                }
                @media screen and (max-width: 320px) {
                  margin-left: 10px;
                }
              }
              .bg_black {
                border: 4px solid #9f9f9f;
                background: #ffff;
              }
              .bg_black:checked {
                border: 4px solid #6a4029;
                background: #ffba33;
                font-style: normal;
              }
              label {
                padding-left: 19px;
                @media screen and (max-width: 576px) {
                  padding-left: 10px;
                }
                @media screen and (max-width: 320px) {
                  font-size: 13px;
                  padding-left: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
  .hidden {
    visibility: hidden;
    height: 30px;
  }
`;

export const getServerSideProps = privateRoute(async (ctx) => {
  try {
    const tokenAccess = await ctx.req.headers.cookie;
    return {
      props: { tokenAccess }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error, 'error when get cookie');
  }
});
