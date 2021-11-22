import { Form, Input, Button, Alert } from "antd";
import React, { useState, useContext, useRef } from "react";
import { PlusOutlined, LeftOutlined, RightOutlined, BoldOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { Carousel, Tabs, Modal } from 'antd';
import english from '../img/english.jpg';
import wordPress from '../img/wordPress.jpg';
import ProfileHeader from "./UserProfile/ProfileHeader";
import '../components/Home.css';
import { UserContext } from "../context/user";
import { render } from "@testing-library/react";
import { sendPhoneVerificationCode } from '../actions/otp';
import OtpModal from "./OtpPage/otpModal"
import {login} from "../actions/auth"
// '../OtpPage/otpModal';



const { TabPane } = Tabs;

function onChange(a, b, c) {
}
const contentStyle = {
  //height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#00aaaf'
};

const headDiv = {
  height: '2cm',
  textAlign: 'center',
  background: '#F9F9F9',
  lineHeight: '80px',

}

const middleDiv = {
  height: '2cm',
  textAlign: 'center',
  background: '#F9F9F9',
  lineHeight: '80px',

}
const ModalLogin = () => {
  const [showModalOtp, setShowModalOtp] = useState(false)
  const [error, setError] = useState()
  const navigate = useNavigate()
  const loginToken = useContext(UserContext).loginToken

  const handleLogin = async (loginDetails) => {
    setError(null)
    const response = await login(loginDetails)
    if (!response.ok) {
        const text = await response.text()
        setError(text)
    } else {
        console.log('login success')
        //save user at UserContext
        await loginToken()
        navigate("/home")
    }
}

  function handleSendCodeVerfication(loginDetails) {
        sendPhoneVerificationCode(loginDetails.phone)
        setShowModalOtp(true)

    }

  const phoneRef = useRef()

  return <Modal centered visible="true" maskClosable >
        <Tabs defaultActiveKey="1"  >
            <TabPane tab="כניסה עם sms" key="1"  >
                <div className="main" style={{ margin: '3%' }}>
                <Form
                    onFinish={handleSendCodeVerfication}
                >
                    <Form.Item
                        name="phone"
                        label="טלפון"
                        tooltip="מספר טלפון ליצירת קשר ואימות סיסמא"
                        rules={[{ required: true, message: 'הכנס מספר טלפון', whitespace: true }]}
                    >
                        <Input ref={phoneRef} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit"  >
                            התחבר
                        </Button>
                    </Form.Item>
                </Form>
                {showModalOtp && <OtpModal phone={phoneRef.current.input.value} ></OtpModal>}
            </div>
            </TabPane>
            <TabPane tab="כניסה עם סיסמא" key="2"  >
            <div className="main" style={{ margin: '3%' }}>
            {error}
            {error && <Alert type="error">{error}</Alert>}
            <Form
                onFinish={handleLogin}
            >
                <Form.Item
                    name="email"
                    label="מייל"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="סיסמא"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit"  >
                        התחבר
                    </Button>
                </Form.Item>
            </Form>
        </div>
            </TabPane>
        </Tabs>
      </Modal>
}



const Home = () => {
  const {userState} = useContext(UserContext)
  const navigate = useNavigate()
  const [showModalLogin, setShowModalLogin] = useState(false)
  const NewBookingButton= ()=>{
    console.log("in newBookingButton", showModalLogin)
    if(userState){
      navigate("/bookrequest")
    }
    else{
      setShowModalLogin(true)
      console.log("after ", showModalLogin)
    }
    
  }
  return (
    <>
      <ProfileHeader/>
      {showModalLogin&&<ModalLogin/>}
      <div style={{ height: '20px' }}></div>
      <div>
        <div style={headDiv}>
            <Button type="primary" style={{ background: '#00AAAF' }}
              shape="round" icon={<PlusOutlined />} size={"large"}
              onClick={()=>{NewBookingButton()}}>
              פגישה חדשה
            </Button>
        </div>
        <div >
          <div >
            <p>כדאי לדעת</p>
            <Carousel afterChange={onChange} arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={english} style={{ width: '100%' }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={wordPress} style={{ width: '100%' }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={english} style={{ width: '100%' }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="example" src={wordPress} style={{ width: '100%' }} /></h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}









export default Home;