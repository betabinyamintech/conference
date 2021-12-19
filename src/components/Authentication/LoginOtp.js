import { Form, Input, Button, Alert } from "antd";
import { useState, useRef } from "react";
import { getUserDetails, login } from "../../actions/auth";
import { Switch, useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../context/user";
import "../../App.css";
import { sendPhoneVerificationCode } from "../../actions/otp";
import OtpModal from "../OtpPage/otpModal";

export const LoginOtp = () => {
  // const [error, setError] = useState()
  const [showModalOtp, setShowModalOtp] = useState(false);

  const phoneRef = useRef();

  function handleSendCodeVerfication(loginDetails) {
    sendPhoneVerificationCode(loginDetails.phone);

    console.log("handleSendCodeVerfication");
    setShowModalOtp(true);

    setShowModalOtp(true);
    console.log("loginOtp - handleSendCodeVerfication");
  }

  return (
    <div className="main" style={{ margin: "3%" }}>
      <Form onFinish={handleSendCodeVerfication}>
        <Form.Item
          name="phone"
          label="מה מספר הנייד שלך?"
          tooltip="מספר טלפון שאיתו נרשמת למערכת"
          rules={[
            { required: true, message: "הכנס מספר טלפון", whitespace: true },
            { min: 10, message: "מינימום 10 ספרות יש להקיש" },
            { max: 10, message: "אופס! יותר מדי ספרות" },
          ]}
        >
          <Input type="number" ref={phoneRef} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            שלחו לי קוד
          </Button>
        </Form.Item>
      </Form>
      {showModalOtp && (
        <OtpModal phone={phoneRef.current.input.value}></OtpModal>
      )}
    </div>
  );
};
