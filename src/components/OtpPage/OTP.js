import react, { useEffect } from "react";
import reactDom from "react-dom";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import BookingRequestDetails from "../BookingRequestDetails/BookingRequestDetails";
import { enumDeclaration } from "@babel/types";


export default function OTP(props) {
  const { phone, messegePassword } = props;
  const [otp, setOtp] = useState("");

  function sendSmsPassword() {
    alert("אמור לשלוח סיסמה לפאלפון")
  }

  useEffect(() => { sendSmsPassword() }, [])
  const user={
    name:"aaa",
    phone:"0565656566"
  }
  const getCodeNow=()=>{
    
   }

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
          onChange={(otp) => {
            console.info(otp);
            setOtp(otp);
            if (otp.length >= 4 && otp == messegePassword)
              getCodeNow()   
            
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
            // direction: 'ltr',
          }}
          containerStyle={{
            margin: "20px auto",
            padding: "10px",
            direction: 'ltr',
            justifyContent: 'center'
            // direction:'center'
            // textAlign:'justify'
            // justify: 'center',


          }}
          isInputNum
        />






      </div>
    </div>
  );
}