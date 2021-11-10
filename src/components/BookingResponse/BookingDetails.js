import { Modal, Button } from "antd";
import React, { useState } from "react";

const BookingDetails = ({ book, details }) => {

  const [loading, setLoading] = useState(false)
  const cancel = () => {
    //חזרה לדף של בחירת האופציה
    
  }

  return (
    <>
      <Modal centered visible title="מצאנו חדר בדיוק בשבילך!"
        footer={[
          <Button key="back" onClick={cancel}>
            ביטול
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={()=>book(details)}>
            ברור
          </Button>,
        ]}
      >
        <div >{details.room.roomName} - חדר עד {details.room.maximumParticipants}</div>
        <div>
          <span>
            ליום שני {details.bookingDetails.date.day},
            {details.bookingDetails.date} לשעה {details.bookingDetails.hourStart} - {details.bookingDetails.hourEnd}
          </span>
        </div>
        <br />
        <div>
          <span>לשמור לך אותו תמורת {details.room.value} אסימונים?</span>
        </div>
      </Modal>
    </>
  )
}

export default BookingDetails;