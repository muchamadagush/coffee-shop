import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button, CardwFooter, CardWrapper, InputField } from '../../components/atoms'
import Layout from '../../components/layout'
// import { privateRoute } from "../../configs/routes/privateRoute";
import { getProfile, updateuser } from '../../configs/redux/actions/userAction'



const ProfileUser = () => {

    const dispatch = useDispatch();
    const [imagePrev, setImagePrev] = useState(null)
    const [errImage, setErrImage] = useState(false);
    const [errImageType, setErrImageType] = useState(false);
    const profile = useSelector(state => state.user.profile)
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(profile);

    useEffect(() => {
        dispatch(getProfile(profile.token, profile.id))
    }, [])

    const handleChange = (e) =>{  
        dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.value } });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(updateuser(profile, profile.id, profile.token, handlepreviewImage))
       
    }

    const handlepreviewImage = (e) => {
        e.preventDefault();
        if(e.target.files[0].size > 1048576){
            setErrImage(true)
        }
        else if(e.target.files[0].type !== "image/png" && e.target.files[0].type !== "image/jpg" && e.target.files[0].type !== "image/jpeg" ){
            setErrImageType(true)
        }
        else if (e.target.files.length !== 0) {
            setErrImage(false)
            setErrImageType(false)
            setImagePrev(URL.createObjectURL(e.target.files[0]));
            dispatch({ type: 'CHANGE_VALUE', payload: { imagePrev : imagePrev } })
        }
        dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.files[0] } });
       
      };

    return (
        <Styles>
            <Layout isAuth="true" title="Profile">
                <div className="wrapper">
                    <div className="container">
                    <form onSubmit={handleSubmit}>        
                    <h4 className="fs-35 title">User Profile</h4>
                    <CardWrapper className="card">
                        <div className="container"></div>
                        <div className="row">
                            <div className="col col-4">
                                <div className="side-profile-wrapper">
                                    <img className="image-profile" src={imagePrev ? imagePrev : profile.image ? profile.image : '/avatar1.svg'} alt="" />
                                    {errImage ? <p className="error">Image size is too large. max 1mb</p> :''}
                                    {errImageType ? <p className="error">Invalid file type. only png, jpg, and jpeg format allowed</p> :''}
                                    <h4 className="fs-20 fw-bold">{profile.first_name}</h4>
                                    <h5 className="fs-20 fw-500">{profile.email}</h5>
                                    <div className="button_Wrap">
                                        <label className="button-img" for="upload">Upload File</label>
                                        <input id="upload" type="file" name="image" onChange={handlepreviewImage}/>
                                    </div>
                                    <Button radius="radius-10" className="button" type="button" color="choco">Remove Photo</Button>
                                    <Button radius="radius-20" className="edit-btn" type="button" color="white-choco">Edit Password</Button>
                                    <h4 className="fs-20 fc-brown fw-bold text">Do you want to save <br /> the change?</h4>
                                    <Button radius="radius-20" className="btn" type="submit" color="choco-shadow">Save Change</Button>

                                    <Button className="btn cancel" type="button" color="shine">Cancel</Button>
                                    <Button className="btn log-out" type="button" color="white-choco">Log Out</Button>
                                </div>
                            </div>
                            <div className="col-8 ">
                                <CardwFooter>
                                    <div className="right-profile-wrapper">
                                        <div className="header">
                                            <h4 className="fc-grey fs-25 fw-bold">Contacts</h4>
                                            <Button className="btn-pen" color="choco">
                                                <img src="Vector (1).png" alt="" />
                                            </Button>
                                        </div>
                                        <div className="form-wrapper">
                                                <div className="row first-section-wrapper">
                                                    <div className="col">                                                  
                                                    <InputField
                                                        onChange=""
                                                        label="Email address : "
                                                        type="email"
                                                        name="email"
                                                        value={profile.email}
                                                        className="input-field"
                                                        
                                                    />
                                                    </div>
                                                    <div className="col">
                                                    <InputField
                                                        label="Phone numbers : "
                                                        type="text"
                                                        value={profile.phone}
                                                        onChange={handleChange}
                                                    />                                               
                                                    </div>
                                                </div>
                                                <InputField
                                                    onChange={handleChange}
                                                    label="Delivery address : "
                                                    type="text"
                                                    // name="address"
                                                    // defaultValue="Zulaikha"
                                                    value={profile.address}
                                                    className="input-field address-field"
                                                    
                                                />
                                                <h4 className="fc-grey fs-25 fw-bold details-title">Details</h4>
                                                <div className="row econd-section-wrapper">
                                                    <div className="col">                                                       
                                                    <InputField
                                                        onChange={handleChange}
                                                        label="Display name : "
                                                        type="text"
                                                        name="display_name"
                                                        // defaultValue="Zulaikha"
                                                        value={profile.display_name}
                                                        className="input-field"
                                                    />
                                                    </div>    
                                                    <div className="col">
                                                    
                                                    <InputField
                                                        onChange={handleChange}
                                                        label="DD/MM/YY : "
                                                        type="date"
                                                        name="dateOfBirth"
                                                        value={profile.dateOfBirth}
                                                        defaultValue={profile.dateOfBirth}
                                                        // defaultValue=""

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
                                                
                                                    <input id="male" className="checkmark bg_black" checked={profile.gender == 'male'} type="radio" name="gender" value="male" onChange={handleChange} />
                                                    <label htmlFor="male">Male</label>
                                                
                                                    <input id="female" className="checkmark bg_black right-radio" type="radio" checked={profile.gender == 'female'} value="female" onChange={handleChange} name="gender" />
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
    )
}


export default ProfileUser

// export const getServerSideProps = privateRoute(async (ctx) => {
//     const token = await cookies(ctx).token;
//     return {
//       props: { token },
//     };
// });

const Styles = styled.div`
/* width: 100vw; */
.wrapper{
    width: 100%;
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
                            width: 150px;
                            height: 150px;
                            object-fit: cover;
                        }
                        .error{
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
.hidden{
    visibility: hidden;
    height: 30px;
}
`

