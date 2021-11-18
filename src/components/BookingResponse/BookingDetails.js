import { Modal, Button } from "antd";
import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user";
var moment = require('moment'); // require



const BookingDetails = ({ book, details, setBookingRequestResponse }) => {
  console.log("in the modal: ", details)
  let { date, startTime, endTime, roomDetails } = details
  const { userState } = useContext(UserContext)
  const userId = userState._id
  console.log(
    "startTime: ", startTime,
    " startTimeMoment: ",moment.unix(startTime),
    " startTimeMomentAndFormat: ",moment.unix(startTime).format('HHmm'),
  )
  let stringDate = moment(date, 'YYYYMMDD').format('l')
  let day = moment(date, 'YYYYMMDD').format('dddd')
  let fromTime=moment.unix(startTime).format('HHmm')
  let toTime=moment.unix(endTime).format('HHmm')
  let toTimeString=toTime.slice(0, 2) + ":" + toTime.slice(2);
  let fromTimeString=fromTime.slice(0, 2) + ":" + fromTime.slice(2);
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
          <Button key="submit" type="primary" loading={loading} onClick={() => {book(details)}}>
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
        <span>לשמור לך אותו תמורת {roomDetails.value} אסימונים?</span>
      </div>
    </Modal>
    </>
  )
}

export default BookingDetails;