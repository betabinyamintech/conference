import react, { useEffect } from "react";
import reactDom from "react-dom";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import BookingRequestDetails from "../BookingRequestDetails/BookingRequestDetails";
import { enumDeclaration } from "@babel/types";
import ResendCode from "../VerificationResendCode/ResendCode";


export default function OTP(props) {
  const { phone ,changeIsOtpPasswordOk } = props;
  const [otp, setOtp] = useState("");
  const [messegePassword,setMessegePassword]=useState();
  const [showPopUp,setShowPopUp]=useState(false);

  function sendSmsPassword() {
    alert("אמור לשלוח סיסמה לפאלפון")
    setMessegePassword("1234");
  }

  useEffect(() => { sendSmsPassword() }, [])
  // const user={
  //   name:"aaa",
  //   phone:"0565656566"
  // }
  // const getCodeNow=()=>{
    
  //  }

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
             changeIsOtpPasswordOk();  
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
          isInputNum={true}
          shouldAutoFocus
        />


<p>לא קיבלת את הקוד?</p>
<a onClick={()=>{sendSmsPassword();setShowPopUp(true);}} >לקבלת קוד חדש</a>
{showPopUp && <ResendCode></ResendCode>}



      </div>
    </div>
  );
}