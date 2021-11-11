import { Modal, Button } from "antd";
import React, { useState } from "react";


const BookingResponse = ({ bookingResponse, setBookingRequestResponse }) => {

    const [loading, setLoading] = useState(false)

    const goBackHome = () => {
        //העברה לקומפוננטה של הזמנת משתתפים
        //bookingResponse=false
        setBookingRequestResponse(false)
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
                    <Button  type='text' key="submit" loading={loading} onClick={goBackHome}>
                        אין צורך
                    </Button>,
                    <span >|</span>,
                    <Button  type='text' key="back" loading={loading} onClick={goBackHome}>
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