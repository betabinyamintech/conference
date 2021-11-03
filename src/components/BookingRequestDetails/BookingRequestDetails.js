import React from "react";
import {useState} from "react";
import { Form, DatePicker, TimePicker, Button, Calendar } from 'antd';



function onPanelChange(value, mode) {
    console.log(value, mode);
  }
//   date_room,hourStart,hourEnd
function sendDateMeeting(){

  }
  const BookingRequestDetails = ({ user }) =>{
    const { RangePicker } = DatePicker;
    
  }
  

// const BookingRequestDetails = ({ user }) => {
//     const [bookingRequestDetails, setBookingRequestDetails ]= useState({})
    

//     return (
//         <div style={{
//             width:'400px',
//             margin:'3em auto',
//             direction:'rtl'
//         }}>
//             <span>שלום </span>
//             <span>user.userName</span>
//             <div>ברוכים הבאים למערכת זימון החדרים של בנימין טק. למתי לשריין את החדר?</div>
//             <div className="site-calendar-demo-card">
//                 <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
//             </div>
//             <div>
//                 <div>משעה</div>
//                 <TimePicker
//                     minuteStep={15}
//                     format='HH:mm'
//                     placeholder="בחר שעה" 
//                     value={hourStart}
//                     onChange={(e)=>(setBookingRequestDetails({...bookingRequestDetails,fromTime: e}))}/>
//             </div>
//             <div>
//                 <div>עד שעה</div>
//                 <TimePicker minuteStep={15} format='HH:mm' placeholder="בחר שעה" />
//             </div>
//             <input name="ok" type="submit" value="מתאים לי בדיוק" onClick={()=>{alert("הייי")}}/>
//         </div>
//     );
// }

export default BookingRequestDetails