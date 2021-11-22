// import react, { useEffect } from "react";
import React, { useState, useEffect, useCallback } from "react";
import { Modal, Button, Alert } from "antd";
import { getUserDetails, loginOtp } from '../../actions/auth';
import { Switch, useNavigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../context/user';

import OtpInput from "react-otp-input";

import { sendPhoneVerificationCode, verifyCode } from '../../actions/otp';
import './otpModal.css'

export default function OtpModal({ phone }) {
  const [error, setError] = useState()
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()
  const loginToken = useContext(UserContext).loginToken
  // const [showPopUp, setShowPopUp] = useState(false);
  function handleSendCodeVerfication() {
    sendPhoneVerificationCode(phone)
  }

  return (
    <Modal
      size="lg"
      // show={lgShow}
      // onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"

      style={{ textAlign: "center" }}

      // visible 
      centered
      visible title="אימות הרשמה"

      footer={<></>}
    >
      <div style={{
        backgroundColor: '#00aaaf',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        marginTop: 0,
        zIndex: 1,
        overflow: 'hidden',
      }}>
        <div style={{
          width: '400px',
          margin: '3em auto',
          direction: 'rtl',
          color: 'white',
          textAlign: 'center',
          alignItems: "center", justify: 'center',
        }}>

          <p>נא להזין את קוד האימות שנשלח אליך לטלפון מספר: {phone}</p>

          <OtpInput
            value={otp}
            onChange={async (otp) => {
              console.info(otp);
              setOtp(otp);

              if (otp.length >= 4) {

                setError(null)
                const details = { phone: phone, code: otp }
                const response = await loginOtp(details)
                if (!response.ok) {
                  const text = await response.text()
                  setError(text)
                } else {
                  console.log('loginOtp success')
                  //save user at UserContext
                  await loginToken()
                  navigate("/bookrequest")
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
              backgroundColor: '#00aaaf',
              color: 'white',
            }}
            containerStyle={{
              margin: "20px auto",
              padding: "10px",
              direction: 'ltr',
              justifyContent: 'center'
            }}
            isInputNum={true}
            shouldAutoFocus
          />

          {error && <Alert type="error">{error}</Alert>}
          <p>לא קיבלת את הקוד?</p>
          <a onClick={() => {
            handleSendCodeVerfication();
          }} >לקבלת קוד חדש</a>




        </div>
      </div>
    </Modal>

    // </div>
  )
}
