import { Modal, Button } from "antd";
import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user";
var moment = require('moment'); // require



const BookingDetails = ({ book, details, setBookingRequestResponse }) => {
  console.log("in the modal: ", details)
  let { date, fromTime, toTime, roomFound } = details
  const { userState } = useContext(UserContext)
  const userId = userState._id
  console.log(
    "user", userState
  )
  let stringDate = moment(date).format('l')
  let day = moment(date).format('dddd')
  const fromTimeHour = Math.floor(fromTime / 60)
  const fromTimeMin = fromTime % 60
  const toTimeHour = Math.floor(toTime / 60)
  const toTimeMin = toTime % 60
  let fromTimeString=""
  let toTimeString=""
  if (fromTimeMin < 10) {
     fromTimeString = fromTimeHour + ":0" + fromTimeMin
  }
  else {
     fromTimeString = fromTimeHour + ":" + fromTimeMin
  }
  if (toTimeMin < 10) {
     toTimeString = toTimeHour + ":0" + toTimeMin
  }
  else {
     toTimeString = toTimeHour + ":" + toTimeMin
  }
  const [loading, setLoading] = useState(false)
  const cancel = () => {
    //חזרה לדף של בחירת האופציה
    setBookingRequestResponse(false)
  }

  return (
    <>
      <Modal centered visible title="מצאנו חדר בדיוק בשבילך!"
        footer={[
          <Button key="back" onClick={cancel}>
            ביטול
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={() => {
            const details = {
              logDate:Date.now(),
              roomId:roomFound._id,
              endTime:toTime,
              startTime:fromTime,
              owner:userId,
              meetingDate:date
          }
          console.log("in butten ", details)
            book(details)
          }}>
        ברור
      </Button>,
        ]}
      >
      <div >{roomFound.name} - חדר עד {roomFound.maxOfPeople} משתתפים</div>
      <div>
        <span> {stringDate} ,
          {day}   ליום

          <br />
          לשעה {toTimeString} - {fromTimeString}
        </span>
      </div>
      <br />
      <div>
        <span>לשמור לך אותו תמורת {roomFound.value} אסימונים?</span>
      </div>
    </Modal>
    </>
  )
}

export default BookingDetails;