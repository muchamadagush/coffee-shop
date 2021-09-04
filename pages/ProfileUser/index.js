import React from 'react'
import styled from 'styled-components'
import { Button, CardwFooter, CardWrapper, InputField } from '../../components/atoms'
import Layout from '../../components/layout'



const ProfileUser = () => {
    return (
        <Styles>
            <Layout isAuth="true" title="Profile">
                <div className="wrapper">
                    <h4 className="fs-35 title">User Profile</h4>
                    <CardWrapper className="card">
                        <div className="row">
                            <div className="col col-4">
                                <div className="side-profile-wrapper">
                                    <img className="image-profile" src="image 39.png" alt="" />
                                    <h4 className="fs-20 fw-bold">Zulaikha</h4>
                                    <h5 className="fs-20 fw-500">zulaikha@gmail.com</h5>
                                    <div className="button_Wrap">
                                        <label className="button-img" for="upload">Upload File</label>
                                        <input id="upload" type="file" name="image" />
                                    </div>
                                    <Button radius="radius-10" className="button" type="button" color="choco">Remove Photo</Button>
                                    <Button radius="radius-20" className="edit-btn" type="button" color="white-choco">Edit Password</Button>
                                    <h4 className="fs-20 fc-brown fw-bold text">Do you want to save <br /> the change?</h4>
                                    <Button radius="radius-20" className="btn" type="button" color="choco-shadow">Save Change</Button>

                                    <Button className="btn cancel" type="button" color="shine">Cancel</Button>
                                    <Button className="btn log-out" type="button" color="white-choco">Log Out</Button>
                                </div>
                            </div>
                            <div className="col-8">
                                <CardwFooter>
                                    <div className="right-profile-wrapper">

                                        <div className="header">
                                            <h4 className="fc-grey fs-25 fw-bold">Contacts</h4>
                                            <Button className="btn-pen" color="choco">
                                                <img src="Vector (1).png" alt="" />
                                            </Button>

                                        </div>
                                        <div className="form-wrapper">

                                            <form>
                                                <div className="d-flex justify-content-between first-section-wrapper">

                                                    <InputField
                                                        onChange=""
                                                        label="Email address : "
                                                        type="email"
                                                        name=""
                                                        defaultValue="Zulaikha"
                                                        className="input-field"
                                                    />
                                                    <InputField
                                                        onChange=""
                                                        label="Phone numbers : "
                                                        type="text"
                                                        name=""
                                                        defaultValue="(+62)89078978"

                                                    />

                                                </div>
                                                <InputField
                                                    onChange=""
                                                    label="Delivery address : "
                                                    type="text"
                                                    name=""
                                                    defaultValue="Zulaikha"
                                                    className="input-field address-field"
                                                />
                                                <h4 className="fc-grey fs-25 fw-bold details-title">Details</h4>
                                                <div className="d-flex justify-content-between second-section-wrapper">

                                                    <InputField
                                                        onChange=""
                                                        label="Display name : "
                                                        type="text"
                                                        name=""
                                                        defaultValue="Zulaikha"
                                                        className="input-field"
                                                    />
                                                    <InputField
                                                        onChange=""
                                                        label="Phone numbers : "
                                                        type="text"
                                                        name=""
                                                        defaultValue="(+62)89078978"

                                                    />

                                                </div>
                                                <InputField
                                                    onChange=""
                                                    label="First name : "
                                                    type="text"
                                                    name=""
                                                    defaultValue="Zulaikha"
                                                    className="input-field second-field"

                                                />
                                                <InputField
                                                    onChange=""
                                                    label="Last name : "
                                                    type="text"
                                                    name=""
                                                    defaultValue="Nirmala"
                                                    className="input-field second-field"

                                                />
                                                <div className="radio-button-wrap">
                                                
                                                    <input id="male" className="checkmark bg_black" type="radio" name="radio" />
                                                    <label htmlFor="male">Male</label>
                                                
                                                    <input id="female" className="checkmark bg_black right-radio" type="radio" name="radio" />
                                                    <label htmlFor="female">Female</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </CardwFooter>
                            </div>
                        </div>

                    </CardWrapper>
                </div>
            </Layout>
        </Styles>
    )
}

export default ProfileUser
const Styles = styled.div`
width: 100vw;
.wrapper{
    padding: 45px 150px;
    background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/profileBg.png');
        .title{
            color: white;
        }
        .card{
            margin-top: 31px;
            padding: 54px 45px;
                .side-profile-wrapper{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                        .image-profile{
                            border-radius: 100%;
                            margin-bottom: 20px;
                        }
                        .button_Wrap {
                            margin-top: 20px;
                            margin-bottom: 11px;
                            .button-img {
                              display: inline-block;
                              padding-top: 10px;
                              cursor: pointer;
                              border: 1px solid #9B9B9B;
                              box-sizing: border-box;
                              border-radius: 10px;
                              font-size: 15px;
                              font-weight: bold;
                              width: 207px;
                              height: 44px;
                              text-align: center;
                              background: #FFBA33;
                              color: #6A4029;
                            }
                            
                            input[type="file"] {
                            position: absolute;
                            z-index: -1;
                            top: 10px;
                            left: 8px;
                            font-size: 17px;
                            color: black;
                            }
                        }
                        .button{
                            width: 207px;
                            height: 44px;
                            font-size: 15px;
                            font-weight: bold;
                        }
                        .edit-btn{
                            margin-top: 42px;
                            width: 207px;
                            height: 60px;
                            font-size: 15px;
                            font-weight: bold;
                            margin-bottom: 34px;
                        }
                        .btn{
                            font-size: 15px;
                            font-weight: bold;
                            width: 207px;
                            height: 60px;       
                        }
                        .text{
                            text-align: center;
                            margin-bottom: 37px;
                        }
                        .cancel{
                            margin-top: 22px;
                            margin-bottom: 41px;
                        }
                        
                }
        }
        .right-profile-wrapper{
            padding: 17px 30px;
            
            .header{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                    .btn-pen{
                        width: 47px;
                        height: 49px;
                        border-radius: 100%;
                    }
            }
            .form-wrapper{
                .first-section-wrapper{
                    margin-top: 21px;
                }
                .second-section-wrapper{
                    margin-top: 47px;
                }
                .input-field{
                    width: 270px;
                }
                .details-title{
                    margin-top: 41px;
                }
                .second-field{
                    margin-top: 47px;
                }
                .address-field{
                    margin-top: 47px;
                }
                .radio-button-wrap{
                    text-align: center;
                    margin-top: 100px;
                    .checkmark{                     
                        height: 30px;
                        width: 30px;
                        -webkit-appearance: none;
                        border-radius: 50%;
                        vertical-align: middle;
                        outline: none;
                        cursor: pointer;  
                                   
                    }
                    .right-radio{
                        margin-left: 120px; 
                    }
                    .bg_black{
                        border: 4px solid #9F9F9F;
                        background: #FFFF;
                    }
                    .bg_black:checked {
                        border: 4px solid #6A4029;
                        background: #FFBA33;
                        font-style: normal;
                       
                    }
                    label{
                        padding-left: 19px;
                    }
                }
             
            }
        }
    }


`