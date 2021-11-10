import React, { useState } from 'react';
import { Modal, Button, footer } from 'antd';
import BookingAltenativeRoom from './BookingAlternativeRoom';
import { useNavigate } from 'react-router-dom';


const BookingAlternatives = ({ book, alternatives }) => {

    const navigate = useNavigate()

    const bookingsOptions = [{ name: "שופר", maxparticipant: "6", mydate: "שני", startTime: "9:00", endTime: "11:00", roomValue: "15" },
    { name: "חליל", maxparticipant: "10", mydate: "שני", startTime: "9:30", endTime: "11:15", roomValue: "45" },
    { name: "מחול", maxparticipant: "20", mydate: "שני", startTime: "10:00", endTime: "12:30", roomValue: "50" }
    ]

    return (
        <Modal centered title={
            <div>
                <h2 style={{ textAlign: "right" }}> אממ... אין לנו את מה שחיפשת</h2>
                <h3 style={{ textAlign: "right" }}>אולי אחת מהחלופות האלה תתאים לך?</h3>
            </div>
        }
            visible="true"
            footer={
                <Button align="center" type="primary" onClick={() => { navigate("/bookrequest") }}>עדיף שאחפש בעצמי</Button>
            } >
            {bookingsOptions.map(Item =>
                <BookingAltenativeRoom book={book} booking={Item} />
            )}
        </Modal>

    )

}

export default BookingAlternatives;

