import { Form, Input, Button, Alert, Link } from "antd";
import { useState, useRef } from "react";
import { getUserDetails, login } from "../../actions/auth";
import { Switch, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import "../../App.css";
import "./Login.css";

export const Login = ({ setShowModalLogin, setShowModalReset }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [selectedValue, setSElectedValue] = useState();
  const { loginToken } = useContext(UserContext);
  const emailRef = useRef("");
  const handleLogin = async (loginDetails) => {
    setError(null);
    const response = await login(loginDetails);
    if (!response.ok) {
      console.log("user or password are invalid");
      console.log("selectedValue", selectedValue);
      setError(true);
    } else {
      console.log("login success");
      //save user at UserContext
      await loginToken();
      navigate("/");
    }
  };
  const resetPass = async () => {
    setShowModalLogin(false);
    console.log("selectedValue in reset", selectedValue);
    setShowModalReset({ visible: true, email: selectedValue });
  };

  return (
    <div className="main" style={{ margin: "3%" }}>
      {error && (
        <Alert
          className="alert"
          type="error"
          message="שם משתמש או סיסמא אינם נכונים"
          showIcon
        ></Alert>
      )}
      <Form onFinish={handleLogin}>
        <Form.Item
          name="email"
          label="מייל"
          id="emailItem"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          {/* <Input onChange={(e) => selectedValue = e.target.value} /> */}
          <Input onChange={(e) => setSElectedValue(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="password"
          label="סיסמא"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            התחבר
          </Button>
          <Button type="text" className="buttonResset" onClick={resetPass}>
            שכחתי סיסמא
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
