import React from "react";
import { Card, Divider } from "antd";
import { booksExample } from "../context/mock";
import { DeleteTwoTone } from "@ant-design/icons"
import { useEffect } from "react/cjs/react.development";
import { getRooms } from '../actions/booking';
var moment = require('moment')




export const BookByDate = ({ flag, book }) => {
    let stringDate = moment(book.meetingDate, 'YYYYMMDD').format("dddd, MMMM Do YYYY");
    let stringLogDate = moment(book.logDate).format("D.M.YYYY");
    let stringLogTime = moment(book.logDate).format("HH:mm");
    console.log("stringLogDate", stringLogDate)
    let day = moment(book.meetingDate, 'YYYYMMDD').format('dddd')
    let fromTime = moment.unix(book.startTime).format('HHmm')
    let toTime = moment.unix(book.endTime).format('HHmm')
    let toTimeString = toTime.slice(0, 2) + ":" + toTime.slice(2);
    let fromTimeString = fromTime.slice(0, 2) + ":" + fromTime.slice(2);
    let roomName, roomParticipants
    let i = 0
    useEffect(() => {
        async function getRoomDEtails() {
            const allRooms = await getRooms()
            console.log("allRooms", allRooms[0])
            while (!roomName) {
                if (book.roomId === allRooms[i]._id) {
                    roomName = allRooms[i].name
                    roomParticipants = allRooms[i].maxOfPeople
                }
                i++
            }
            console.log("roomName", roomName)
            console.log("roomParticipants", roomParticipants)
        }
        getRoomDEtails()
    }, [])

    console.log('book', book)
    return (

        <>
            {/* <Card type="inner" style={{ marginTop: 16 }} > */}
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}>  {fromTimeString}- {toTimeString} | {stringDate} יום  </p>
            <p style={{ textAlign: "right" }}> חדר עד {roomParticipants} משתתפים{roomName}</p>
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            <p class="alignright" style={{ display: "inlineBlock" }}>{book.bookValue} אסימונים נוצלו </p>
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            {flag ? <DeleteTwoTone class="alignleft" type='text' style={{ color: "blue" }} /> : <p class="alignleft" style={{ color: "gray" }}>{stringLogTime}:{stringLogDate} הוזמן ב  </p>}
            <Divider />
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
            {/* </Card>  */}
        </>

    )
}


