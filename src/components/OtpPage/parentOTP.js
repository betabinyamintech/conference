
import React, { useState , useContext} from 'react'
import BookingRequestDetails from '../BookingRequestDetails/BookingRequestDetails'
import OTP from './OTP'
import { UserContext } from "../../context/user";




export const ParentOTP = () => {
const [isOtpPasswordOk,setIsOtpPasswordOk]=useState(false)

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
        
        {(isOtpPasswordOk?<BookingRequestDetails></BookingRequestDetails>:
    <OTP phone={userState.phone}  changeIsOtpPasswordOk={()=>changeIsOtpPasswordOk()}></OTP>)}
      
    </div>
    )
}
