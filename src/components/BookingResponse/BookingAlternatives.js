import React, { useState } from 'react';
import { Modal, Button, footer } from 'antd';
import BookingAltenativeRoom from './BookingAlternativeRoom';
//import { useNavigate } from 'react-router-dom';


const BookingAlternatives = ({ book, alternatives , setBookingRequestResponse}) => {

    //const navigate = useNavigate()
    const bookingsOptions =alternatives

    console.log("bookingsOptions: ",bookingsOptions)

    const goBackHome = () => {
        //העברה לקומפוננטה של הזמנת משתתפים
        //bookingResponse=false
        setBookingRequestResponse(false)
    }
    return (
        <Modal centered maskClosable title={
            <div>
                <h2 style={{ textAlign: "right" }}> אממ... אין לנו את מה שחיפשת</h2>
                <h3 style={{ textAlign: "right" }}>אולי אחת מהחלופות האלה תתאים לך?</h3>
            </div>
        }
            visible="true"
            footer={
                <Button align="center" type="primary" onClick={goBackHome }>עדיף שאחפש בעצמי</Button>
            } >
            {bookingsOptions.map(Item =>
                <BookingAltenativeRoom book={book} booking={Item} />
            )}
            onCancel={goBackHome}
        </Modal>

    )

}

export default BookingAlternatives;

