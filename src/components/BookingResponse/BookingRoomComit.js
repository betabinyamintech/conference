import { Modal, Button } from "antd";
import React,{ useState } from "react";

const BookingRoomComit =({BookingRoomFinal})=>{
    
const [isModalVisible,setIsModalVisible]=useState(true)

const InvitationParticipants=()=>{
    //העברה לקומפוננטה של הזמנת משתתפים
    setIsModalVisible(false)
}
const AddToCcalendar=()=>{
    //העברה לקומפוננטה של הוספת הפגישה ליומן אישי
    setIsModalVisible(false)
}


    return(
        <>
            <Modal title='מצאנו חדש בדיוק בשבילך!' visible={isModalVisible} onOk={confirm} onCancel={cancel}>
                <div>{requestAccepted.room.roomName} - חדר עד {requestAccepted.room.maximumParticipants}</div>
                <div>ליום {requestAccepted.bookingDetails.date.day}, {requestAccepted.bookingDetails.date} לשעה {requestAccepted.bookingDetails.hourStart} - {requestAccepted.bookingDetails.hourEnd}</div>
                <div>
                    <span>לשמור לך אותו תמורת {requestAccepted.room.price} אסימונים?</span>
                </div>
            </Modal>

       

        </>
    )
}

export default BookingRoomComit;