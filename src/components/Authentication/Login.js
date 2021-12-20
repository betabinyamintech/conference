import { Form, Input, Button, Alert } from 'antd';
import { useState } from 'react';
import { getUserDetails, login } from '../../actions/auth';
import { Switch, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import '../../App.css'

export const Login = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { loginToken } = useContext(UserContext)

  const handleLogin = async (loginDetails) => {
    setError(null)
    const response = await login(loginDetails)
    if (!response.ok) {
      console.log("user or password are invalid")
      setError(true)
    } else {
      console.log('login success')
      //save user at UserContext
      await loginToken()
      navigate("/")
    }
  }
  return (
    <div className="main" style={{ margin: '3%' }}>
      {error && <Alert type="error" message="שם משתמש או סיסמא אינם נכונים"></Alert>}
      <Form
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          label="מייל"
          rules={[
            {
              type: 'email',
              message: 'כתובת מייל אינה תקינה',
            },
            {
              required: true,
              message: 'אנא הכנס כתובת מייל',
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
              message: 'אנא הכנס  סיסמא',
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
          <a style={{ float: 'left' }} href="">
            Forgot password
          </a>
        </Form.Item>
      </Form>
    </div>
  )
}