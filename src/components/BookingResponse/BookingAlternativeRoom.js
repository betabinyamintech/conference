import React from "react";
import { Button, Card } from "antd";
import "./BookingAlternativeRoom.css";
var moment = require("moment"); // require

export const BookingAltenativeRoom = ({ book, booking }) => {
  let { meetingDate, startTime, endTime, roomDetails } = booking;
  console.log("start time", new Date(startTime));
  console.log("booking in alternatives", booking);
  // let fromTime = moment.unix(startTime);
  // let toTime = moment.unix(endTime);
  const { value, name, maxOfPeople } = roomDetails;
  let stringDate = moment(meetingDate, "YYYYMMDD").format("l");
  let day = moment(meetingDate, "YYYYMMDD").format("dddd");
  let fromTime = moment.unix(startTime);
  let toTime = moment.unix(endTime);
  let toTimeString =
    toTime.format("HHmm").slice(0, 2) + ":" + toTime.format("HHmm").slice(2);
  let fromTimeString =
    fromTime.format("HHmm").slice(0, 2) +
    ":" +
    fromTime.format("HHmm").slice(2);
  let bookValue = roomDetails.value * toTime.diff(fromTime, "hours");

  return (
    <Card type="inner" style={{ marginTop: 16 }}>
      {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
      <p style={{ textAlign: "right" }}>
        חדר {name}: מיועד ל {maxOfPeople} משתתפים
      </p>
      {/* <p style={{ textAlign: "right" }}> בין השעות {toTimeString} - {fromTimeString} ליום {day}, {stringDate}</p> */}
      <p style={{ textAlign: "right" }}>
        {stringDate} , {day} ליום{" "}
      </p>
      <p style={{ textAlign: "right" }}>
        בין השעות {toTimeString} - {fromTimeString}
      </p>
      {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
      <p className="alignright" style={{ display: "inlineBlock" }}>
        בעבור {bookValue} קרדיטים
      </p>
      {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
      <Button
        className="alignleft"
        type="text"
        style={{ color: "blue" }}
        onClick={() => {
          booking = { ...booking, bookValue };
          book(booking);
        }}
      >
        {" "}
        מעולה לי
      </Button>
      {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
    </Card>
  );
};
export default BookingAltenativeRoom;
