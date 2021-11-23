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
import { login } from "../actions/auth"
import { Register } from "./Authentication/Register";
// '../OtpPage/otpModal';



const { TabPane } = Tabs;

function onChange(a, b, c) {
}
const contentStyle = {
  //height: '160px',
  color: '#fff',
  width: '100%',
  lineHeight: '160px',
  textAlign: 'center',
  direction: 'center',
  background: '#c0c0c0',
  border: '2px',
  padding: '20px',
  borderRadius: '70px 20px'
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
const ModalLogin = ({ showModalLogin, setShowModalLogin }) => {
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
      navigate("/bookrequest")
    }
  }

  function handleSendCodeVerfication(loginDetails) {
    sendPhoneVerificationCode(loginDetails.phone)
    setShowModalOtp(true)

  }

  const phoneRef = useRef()

  return <Modal centered visible="true"
    maskClosable onCancel={() => (setShowModalLogin(false))}
    footer={<></>}>
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
              rules={[{ required: true, message: 'הכנס מספר טלפון', whitespace: true },
              { min: 10, message: 'מינימום 10 ספרות יש להקיש' },
              { max: 10, message: 'אופס! יותר מדי ספרות' },]}
            >
              <Input type="number"  ref={phoneRef} />
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
      <TabPane tab="הרשמה" key="3"  >
        <Register/>
      </TabPane>
    </Tabs>
  </Modal>
}

const Home = () => {
  const { userState } = useContext(UserContext)
  const navigate = useNavigate()
  const [showModalLogin, setShowModalLogin] = useState(false)
  const NewBookingButton = () => {
    console.log("in newBookingButton", showModalLogin)
    if (userState) {
      navigate("/bookrequest")
    }
    else {
      setShowModalLogin(true)
      console.log("after ", showModalLogin)
    }

  }
  return (
    <>
      <ProfileHeader />
      {showModalLogin && <ModalLogin showModalLogin={showModalLogin} setShowModalLogin={setShowModalLogin} />}
      <div style={{ height: '20px' }}></div>
      <div>
        <div style={headDiv}>
          <Button type="primary" style={{ background: '#00AAAF' }}
            shape="round" icon={<PlusOutlined />} size={"large"}
            onClick={() => { NewBookingButton() }}>
            פגישה חדשה
          </Button>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{width: '80%', marginRight:"auto", marginLeft:"auto"}}>
            <p>כדאי לדעת</p>
            <Carousel
            afterChange={onChange}
            arrows prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}>
              <div class="img_carousel">
                  <img alt="תמונה" src="https://binyamintech.co.il/wp-content/uploads/2021/11/wordpress.png" />
              </div>
              <div class="img_carousel">
                  <img alt="תמונה" src="https://binyamintech.co.il/wp-content/uploads/2021/01/SJ2A0013.jpg" />
              </div>
              <div class="img_carousel">
                  <img alt="תמונה" src={english} />
              </div>
              <div class="img_carousel">
                  <img alt="תמונה" src="https://binyamintech.co.il/wp-content/uploads/2021/02/02-2-1.png" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}









export default Home;