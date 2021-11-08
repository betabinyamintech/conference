import { Form, Input, Button, Alert } from 'antd';
import { useState } from 'react';
import { getUserDetails, login } from '../../actions/auth';
import { Route } from 'react-router'
import { Switch } from 'react-router-dom';
import BookingRequestDetails from '../BookingRequestDetails/BookingRequestDetails'

export const Login = () => {
    const [error, setError] = useState()
    const sing_in = ()=>{
        console.log("sing in")
        return <Route exact path='/bookrequest' component={<BookingRequestDetails />}></Route>
    }
    const handleLogin = async (loginDetails) => {
        setError(null)
        const response = await login(loginDetails)
        if (!response.ok) {
            const text = await response.text()
            setError(text)
        } else {
            getUserDetails()
        }
    }
    return (
        <div>
            {error}
            {error && <Alert type="error">{error}</Alert>}
            <Form
                onFinish={handleLogin}
            >
                <Form.Item
                    name="email"
                    label="E-mail"
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
                    <Button type="primary" htmlType="submit" onClick={sing_in}  >
                        התחבר
                    </Button>
                </Form.Item>
            </Form>
        </div>)
}