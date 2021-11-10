import { Modal, Button } from "antd";
import React, { useState } from "react";

const BookingResponse = ({ bookingResponse }) => {

    const [loading, setLoading] = useState(false)

    const InvitationParticipants = () => {
        //העברה לקומפוננטה של הזמנת משתתפים
        //bookingResponse=false
    }
    const AddToCcalendar = () => {
        //העברה לקומפוננטה של הוספת הפגישה ליומן אישי
        //bookingResponse=false
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

export default BookingResponse;