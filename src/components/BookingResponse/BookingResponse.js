import { Modal, Button } from "antd";
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";



const BookingResponse = ({ bookingResponse, setBookingRequestResponse }) => {

    const [loading, setLoading] = useState(false)
    const navigate= useNavigate();
    const goBackHome = () => {
        //העברה לקומפוננטה של הזמנת משתתפים
        //bookingResponse=false
        setBookingRequestResponse(false)
    }
    const AddToCcalendar = () => {
        //העברה לקומפוננטה של הוספת הפגישה ליומן אישי
        //bookingResponse=false
    }

    const cancelModal= ()=>{
        navigate("/home")
    }


    return (
        <>
            <Modal width="10cm" centered 
                visible title="תענוג, החדר כולו שלך!"
                footer={[
                    <Link to='/home'>
                    <Button  type='text' key="submit" loading={loading} onClick={goBackHome}>
                       תודה! סיימתי
                    </Button> </Link>,
                    <span >|</span>,
                    <Button  type='text' key="back" loading={loading} onClick={goBackHome}>
                        הוספה ליומן שלי
                    </Button>,
                ]}
                onCancel={cancelModal}
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