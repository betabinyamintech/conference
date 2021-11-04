import { Modal, Button } from "antd";
import React, { useState } from "react";

const BookingRoomComit = ({ BookingRoomFinal, setFoundVisible, setBookingCurrentResponse }) => {

    //const [isModalVisible, setIsModalVisible] = useState(visible)
    const [loading, setLoading] = useState(false)

    const InvitationParticipants = () => {
        //העברה לקומפוננטה של הזמנת משתתפים
        //setIsModalVisible(false)
        setBookingCurrentResponse(null)
    }
    const AddToCcalendar = () => {
        //העברה לקומפוננטה של הוספת הפגישה ליומן אישי
        //setIsModalVisible(false)
        setBookingCurrentResponse(null)
    }


    return (
        <>
            <Modal width="10cm" centered
                visible title="תענוג, החדר כולו שלך!"
                footer={[
                    
                    <Button  type='text' key="submit" loading={loading} onClick={InvitationParticipants}>
                        אין צורך
                    </Button>,
                    <span >|</span>,
                    <Button  type='text' key="back" loading={loading} onClick={AddToCcalendar}>
                        הוספה ליומן שלי
                    </Button>,


                ]}
            >
                <br />
                <div>
                    <span>תזכורת עם כל הפרטים כבר בדרך לתיבת המייל שלך</span>
                </div>
                <br />
            </Modal>

        </>
    )
}

export default BookingRoomComit;