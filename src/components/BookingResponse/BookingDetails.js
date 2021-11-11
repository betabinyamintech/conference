import { Modal, Button } from "antd";
import React, { useState } from "react";

const BookingDetails = ({ book, details }) => {
 const {date, maxOfPeople, value, name, fromTime, toTime }=details
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
        <div >{name} - חדר עד {maxOfPeople}</div>
        <div>
          <span>
            ליום שני {date},
            {date} לשעה {fromTime} - {toTime}
          </span>
        </div>
        <br />
        <div>
          <span>לשמור לך אותו תמורת {value} אסימונים?</span>
        </div>
      </Modal>
    </>
  )
}

export default BookingDetails;