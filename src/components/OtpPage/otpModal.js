// import react, { useEffect } from "react";
import React, { useState } from "react";
import { Modal, Alert } from "antd";
import { loginOtp } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../context/user";

import OtpInput from "react-otp-input";

import { sendPhoneVerificationCode } from "../../actions/otp";
import "./otpModal.css";

export default function OtpModal({ phone }) {
  const [error, setError] = useState();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { loginToken } = useContext(UserContext);
  // const [showPopUp, setShowPopUp] = useState(false);
  function handleSendCodeVerfication() {
    sendPhoneVerificationCode(phone);
  }

  return (
    <Modal
      // closable="true"
      size="lg"
      // show={lgShow}
      // onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      style={{ textAlign: "center" }}
      // visible
      centered
      visible
      title="אימות הרשמה"
      footer={<></>}
    >
      <div
        style={{
          backgroundColor: "#00aaaf",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          marginTop: 0,
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "400px",
            margin: "3em auto",
            direction: "rtl",
            color: "white",
            textAlign: "center",
            alignItems: "center",
            justify: "center",
          }}
        >
          <p>נא להזין את קוד האימות שנשלח אליך לטלפון מספר: {phone}</p>

          <OtpInput
            value={otp}
            onChange={async (otp) => {
              console.info(otp);
              setOtp(otp);

              if (otp.length >= 4) {
                setError(null);
                const details = { phone: phone, code: otp };
                const response = await loginOtp(details);
                if (response.ok) {
                  //save user at UserContext
                  await loginToken();
                  navigate("/bookrequest");
                } else {
                  const text = await response.text();
                  setError(text);
                }
              }
            }}
            numInputs={4}
            inputStyle={{
              fontSize: "24px",
              width: "36px",
              height: "36px",
              margin: "4px",
              borderTop: "0px",
              borderLeft: "0px",
              borderRight: "0px",
              outline: "none",
              borderColor: "white",
              backgroundColor: "#00aaaf",
              color: "white",
            }}
            containerStyle={{
              margin: "20px auto",
              padding: "10px",
              direction: "ltr",
              justifyContent: "center",
            }}
            isInputNum={true}
            shouldAutoFocus
          />

          {error && <Alert type="error">{error}</Alert>}
          <p>עדיין מחכה לקוד?</p>
          <a
            onClick={() => {
              handleSendCodeVerfication();
            }}
          >
            שלח שוב
          </a>
        </div>
      </div>
    </Modal>

    // </div>
  );
}
