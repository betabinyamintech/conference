import { Form, Input, Button, Alert } from 'antd';
import { useState, useRef } from 'react';
import { getUserDetails, login } from '../../actions/auth';
import { Switch, useNavigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../context/user';
import '../../App.css'
import { sendPhoneVerificationCode } from '../../actions/otp';
import OtpModal from '../OtpPage/otpModal';

export const LoginOtp = () => {

    // const [error, setError] = useState()
    const [showModal, setShowModal] = useState(false)

    const phoneRef = useRef()

    function handleSendCodeVerfication(loginDetails) {
        sendPhoneVerificationCode(loginDetails.phone)
        setShowModal(true)

    }


    return (
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
            {showModal && <OtpModal phone={phoneRef.current.input.value} ></OtpModal>}
        </div>
    )
}