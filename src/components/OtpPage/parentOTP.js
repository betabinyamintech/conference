
import React, { useState , useContext} from 'react'
import BookingRequestDetails from '../BookingRequestDetails/BookingRequestDetails'
import OTP from './OTP'
import { UserContext } from "../../context/user";
import { login } from '../../actions/auth';
import { Login } from '../Authentication/Login';
import OtpModal from './otpModal';
import SmsWrong from '../VerificationResendCode/SmsWrong';




export const ParentOTP = () => {
const [isOtpPasswordOk,setIsOtpPasswordOk]=useState(false)
const [showPopUp,setShowPopUp]=useState(false)

// we take first value of the context(second is setUserState)
const { userState } = useContext(UserContext)

function changeIsOtpPasswordOk() {  
    console.log(isOtpPasswordOk);
    setIsOtpPasswordOk(true);
   }

    return(
        
    <div>
         {/* we use the state in the page */}
      {/* <span>{userState.phone}</span> */}
        
        {/* {(isOtpPasswordOk?<BookingRequestDetails></BookingRequestDetails>:
    <OtpModal show="true" phone={userState.phone}  changeIsOtpPasswordOk={()=>changeIsOtpPasswordOk()}></OtpModal>)} */}

     {/* {(isOtpPasswordOk?<BookingRequestDetails></BookingRequestDetails>:
    <OTP show="true" phone={userState.phone}  changeIsOtpPasswordOk={()=>changeIsOtpPasswordOk()}></OTP>)} */}

   

         <OtpModal phone={userState.phone}  ></OtpModal>
  
      
    </div>
    )
}
