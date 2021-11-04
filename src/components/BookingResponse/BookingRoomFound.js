import { Modal, Button } from "antd";
import React, { useState, useCallback } from "react";
import BookingRoomComit from "./BookingRoomComit";

const BookingRoomFound = ({ requestAccepted, setFoundVisible, setBookingCurrentResponse }) => {

  const [loading, setLoading] = useState(false)


  const confirm = () => {
    //מעבר לקומפוננטה של אישור חדר
    setLoading(true)
    setFoundVisible(false)

  }
  const cancel = () => {
    //חזרה לדף של בחירת האופציה
    setBookingCurrentResponse(null)
  }


  return (
    <>
      <Modal centered visible title="מצאנו חדר בדיוק בשבילך!"
        footer={[
          <Button key="back" onClick={cancel}>
            ביטול
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={confirm}>
            ברור
          </Button>,
        ]}
      >
        <div >{requestAccepted.room.roomName} - חדר עד {requestAccepted.room.maximumParticipants}</div>
        <div>
          <span>
            ליום שני {requestAccepted.bookingDetails.date.day},
            {requestAccepted.bookingDetails.date} לשעה {requestAccepted.bookingDetails.hourStart} - {requestAccepted.bookingDetails.hourEnd}
          </span>
        </div>
        <br />
        <div>
          <span>לשמור לך אותו תמורת {requestAccepted.room.pricePerHour} אסימונים?</span>
        </div>
      </Modal>
    </>
  )
}

export default BookingRoomFound;