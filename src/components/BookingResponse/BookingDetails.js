import { Modal, Button } from "antd";
import React, { useState } from "react";
var moment = require('moment'); // require



const BookingDetails = ({ book, details, setBookingRequestResponse }) => {
  console.log("in the modal: ", details)
  let { meetingDate, startTime, endTime, roomDetails } = details
  let fromTime=moment.unix(startTime)
  let toTime=moment.unix(endTime)
  let bookValue=roomDetails.value*(toTime.diff(fromTime, 'hours'))
  let stringDate = moment(meetingDate, 'YYYYMMDD').format('l')
  let day = moment(meetingDate, 'YYYYMMDD').format('dddd')
  let toTimeString=toTime.format('HHmm').slice(0, 2) + ":" + toTime.format('HHmm').slice(2);
  let fromTimeString=fromTime.format('HHmm').slice(0, 2) + ":" + fromTime.format('HHmm').slice(2);
  const [loading, setLoading] = useState(false)
  const cancel = () => {
    //חזרה לדף של בחירת האופציה
    setBookingRequestResponse(false)
  }

  return (
    <>
      <Modal maskClosable centered visible title="מצאנו חדר בדיוק בשבילך!"
        onCancel={cancel}
        footer={[
          <Button key="back" onClick={cancel}>
            ביטול
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={() => {details={...details,bookValue}; book(details)}}>
        ברור
      </Button>,
        ]}
      >
      <div >{roomDetails.name} - חדר עד {roomDetails.maxOfPeople} משתתפים</div>
      <div>
        <span> {stringDate} ,
          {day}   ליום

          <br />
          לשעה {toTimeString} - {fromTimeString}
        </span>
      </div>
      <br />
      <div>
        <span>לשמור לך אותו תמורת {bookValue} אסימונים?</span>
      </div>
    </Modal>
    </>
  )
}

export default BookingDetails;