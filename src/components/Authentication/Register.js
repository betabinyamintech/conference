import { Form, Input, Button, Alert, InputNumber } from 'antd';
import { useRef, useState } from 'react';
import { getUserDetails, register } from '../../actions/auth';
import OtpModal from '../OtpPage/otpModal';
import { useNavigate } from 'react-router-dom';
import { sendPhoneVerificationCode } from '../../actions/otp';
import '../../App.css'
import { useContext } from 'react';
import { UserContext } from '../../context/user';

export const Register = () => {

    const navigate = useNavigate()

    const [error, setError] = useState()
    const [disable, setDisable] = useState(true);
    const [phone, setPhone] = useState();
    // const phoneRef = useRef()

    const { loginToken } = useContext(UserContext)

    function handleSendCodeVerfication() {
        // let phone = phoneRef.current.input.value
        sendPhoneVerificationCode(phone)
    }

    // async function handleRegister(phoneVerificationCode) {
    async function handleRegister(registerDetails) {
        setError(null)
        const response = await register(registerDetails)
        if (!response.ok) {
            setError(await response.text())
        } else {

            //take UserDetails from mongoose  by email of the token
            await loginToken()
            // getUserDetails()           
            navigate("/")
        }
    }

    return (
        <div className="main" style={{ margin: '3%' }}>
            {error && <Alert type="error">{error}</Alert>}
            <Form onFinish={handleRegister}>
                <Form.Item
                    name="email"
                    label="מייל"
                    rules={[
                        {
                            type: 'email',
                            message: 'כתובת לא תקינה',
                        },
                        {
                            required: true,
                            message: 'הכנס כתובת אימייל',
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
                            message: 'בחר סיסמא!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="אשר סיסמא"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'הכנס שוב את הסיסמא שבחרת',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('הסיסמאות אינן תואמות! נסה שוב'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="שם מלא"
                    tooltip="שם פרטי ושם משפחה"
                    rules={[{ required: true, message: 'הכנס שם מלא', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="טלפון"
                    tooltip="מספר טלפון ליצירת קשר ואימות סיסמא"
                    rules={[{ required: true, message: 'הכנס מספר טלפון', whitespace: true },
                    { min: 10, message: 'מינימום 10 ספרות יש להקיש' },
                    { max: 10, message: 'אופס! יותר מדי ספרות' },]}
                >
                    {/* ref={phoneRef} */}
                    <Input type="number" value={phone} onChange={(e) => { setPhone(e.target.value); setDisable((e.target.value.length == 10) ? false : true) }} />
                </Form.Item>
                <div className="ant-row ant-form-item" style={{ rowGap: '0px' }}>
                    <Button onClick={handleSendCodeVerfication} disabled={disable}>
                        שלח קוד אימות לטלפון
                    </Button>
                </div>
                <Form.Item
                    name="code"
                    label="קוד אימות"
                    tooltip="קוד הנשלח בהודעה לטלפון"
                    rules={[{ required: true, message: "עליך להזין קוד אימות" }]}
                >
                    <Input type="number" />


                </Form.Item>
                <Form.Item style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" >
                        הירשם
                    </Button>
                </Form.Item>
            </Form>
        </div>)
}