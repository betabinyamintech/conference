import react, { useEffect } from "react";
import reactDom from "react-dom";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import BookingRequestDetails from "../BookingRequestDetails/BookingRequestDetails";
import { enumDeclaration } from "@babel/types";
import ResendCode from "../VerificationResendCode/ResendCode";
import {  sendPhoneVerificationCode, verifyCode } from '../../actions/otp';


export default function OTP(props) {
  const { phone, changeIsOtpPasswordOk } = props;
  const [otp, setOtp] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [error, setError] = useState()

  async function sendSmsPassword() {
    alert("components - OtpPage - OTP -  sendSmsPassword to phone :" + phone)

    setError(null)
    const myPhone = { phone: phone}
    //לא שולח כאן את הפלאפון התקין
    //משום מה הוא לא שולח פה את הפאלפון מה יוזר קונטקס
    const response = await sendPhoneVerificationCode(myPhone)


    if (!response.ok) {
      const text = await response.text()
      setError(text)
    }
  }

  useEffect(() => { sendSmsPassword() }, [])

  return (
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
        <h2 style={{ color: 'white', }}>אימות הרשמה</h2>
        <p>נא להזין את קוד האימות שנשלח אליך לטלפון מספר: {phone}</p>

        <OtpInput
          value={otp}
          onChange={async (otp) => {
            console.info(otp);
            setOtp(otp);

            if (otp.length >= 4) 
            {
              // change!!
              const obj = { phone: phone, code: otp }
              const response = await verifyCode(obj)
              console.log("components - OtpPage - OTP - OtpInput - onChange response: ", response)

              if (response == true)
              {

                changeIsOtpPasswordOk();
              }
              else 
              {
                alert("the password is wrong!")
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


        <p>לא קיבלת את הקוד?</p>
        <a onClick={() => { sendSmsPassword(); setShowPopUp(true); }} >לקבלת קוד חדש</a>
        {showPopUp && <ResendCode></ResendCode>}



      </div>
    </div>
  );
}