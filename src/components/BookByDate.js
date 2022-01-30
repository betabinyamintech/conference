import React from "react";
import "./BookByDate.css";
import { Card, Divider } from "antd";
import { booksExample } from "../context/mock";
import { DeleteTwoTone } from "@ant-design/icons";
import { useEffect, useState, useContext } from "react/cjs/react.development";
import { Button } from "antd";
import { deleteMeetingRequest } from "../actions/booking";
import { UserContext } from "../context/user";
var moment = require("moment");

export const BookByDate = ({ flag, book, allRooms, setMeetingChange }) => {
  let stringDate = moment(book.meetingDate, "YYYYMMDD").format(
    "dddd, MMMM Do YYYY"
  );
  let meetingDate = new Date(book.logDate).toLocaleDateString();
  let meetingStartTime = new Date(book.logDate).toLocaleTimeString();
  let meetingEndTime = new Date(book.endTime).toLocaleTimeString();
  // console.log(new Date(book.startTime).toLocaleDateString());
  // console.log(new Date(book.endTime).toLocaleTimeString());
  let stringLogDate = moment(book.logDate).format("D.M.YYYY");
  let stringLogTime = moment(book.logDate).format("HH:mm");
  let day = moment(book.meetingDate, "YYYYMMDD").format("dddd");
  let fromTime = moment.unix(book.startTime).format("HHmm");
  let toTime = moment.unix(book.endTime).format("HHmm");
  let toTimeString = toTime.slice(0, 2) + ":" + toTime.slice(2);
  let fromTimeString = fromTime.slice(0, 2) + ":" + fromTime.slice(2);
  const [roomDetails, serRoomDetails] = useState({});
  const { userState, setUserState } = useContext(UserContext);
  let i = 0;
  useEffect(() => {
    function getRoomDEtails() {
      // console.log("allRoomsindate", allRooms);
      while (i < allRooms.length) {
        if (book.roomId === allRooms[i]._id) {
          serRoomDetails({
            roomName: allRooms[i].name,
            roomParticipants: allRooms[i].maxOfPeople,
            roomValue: allRooms[i].value,
          });
        }
        i++;
      }
    }
    getRoomDEtails();
  }, []);

  const deleteMeeting = async () => {
    try {
      const deleted = await deleteMeetingRequest({ bookId: book._id });
      console.log("deleted", deleted);

      if (deleted) {
        setUserState({
          ...userState,
          subscription: { balance: deleted.coinsBalance },
        });
        setMeetingChange((currentState) => !currentState);
      }
    } catch (err) {
      console.log("oops... an error", err.message);
    }
  };
  const { roomValue, roomName, roomParticipants } = roomDetails;
  return (
    <>
      <div className=" container">
        <div id="meetingTime" className="field">
          <div className="fieldTitle">תאריך:</div>
          <div className="fieldContent">{meetingDate}</div>
        </div>
        <div id="meetingTime" className="field">
          <div className="fieldTitle">שעה:</div>
          <div className="fieldContent">
            {meetingStartTime.slice(0, 5)}-{meetingEndTime.slice(0, 4)}
          </div>
        </div>
        <div id="room" className="field">
          <div className="fieldTitle">חדר:</div>
          <div className="fieldContent">
            {roomName}, חדר עד {roomParticipants} משתתפים
          </div>
        </div>
        <div id="bookingTime" className="field">
          <div className="fieldTitle">הוזמן ב:</div>
          <div className="fieldContent">{stringLogDate}</div>
        </div>
        <div id="creditsUsed" className="field">
          <div className="fieldTitle"> קרדיטים שנוצלו:</div>
          <div className="fieldContent">{roomValue ? roomValue : 212}</div>{" "}
        </div>

        {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
        {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
        {/* {flag ? (
          <Button
            type="icon"
            ghost="true"
            className="alignleft"
            onClick={deleteMeeting}
          >
            <DeleteTwoTone type="text" style={{ color: "blue" }} />
          </Button>
        ) : (
          <p style={{ color: "gray" }}></p>
        )} */}
      </div>
    </>
  );
};
