import React from "react";
import { Card, Divider } from "antd";
import { booksExample } from "../context/mock";
import { DeleteTwoTone } from "@ant-design/icons"
import { useEffect, useState, useContext } from "react/cjs/react.development";
import { Button } from "antd";
import { deleteMeetingRequest } from '../actions/booking'
import { UserContext } from "../context/user"
var moment = require('moment')




export const BookByDate = ({ flag, book, allRooms }) => {
    let stringDate = moment(book.meetingDate, 'YYYYMMDD').format("dddd, MMMM Do YYYY");
    let stringLogDate = moment(book.logDate).format("D.M.YYYY");
    let stringLogTime = moment(book.logDate).format("HH:mm");
    console.log("stringLogDate", stringLogDate)
    let day = moment(book.meetingDate, 'YYYYMMDD').format('dddd')
    let fromTime = moment.unix(book.startTime).format('HHmm')
    let toTime = moment.unix(book.endTime).format('HHmm')
    let toTimeString = toTime.slice(0, 2) + ":" + toTime.slice(2);
    let fromTimeString = fromTime.slice(0, 2) + ":" + fromTime.slice(2);
    const [roomDetails, serRoomDetails] = useState({})
    const { userState, setUserState } = useContext(UserContext);
    let i = 0
    useEffect(() => {
        function getRoomDEtails() {
            console.log("allRoomsindate", allRooms)
            while (i < allRooms.length) {
                if (book.roomId === allRooms[i]._id) {
                    serRoomDetails({
                        roomName: allRooms[i].name,
                        roomParticipants: allRooms[i].maxOfPeople
                    })
                }
                i++
            }

        }
        getRoomDEtails()

    }, [])

    const deleteMeeting = async () => {
        try {
            const deleted = await deleteMeetingRequest({ "bookId": book._id })
            console.log("deleted", deleted)
            console.log("userBalance", userState.subscription.balance)
            let newBalance = userState.subscription.balance + book.bookValue
            console.log("userBalance+book", newBalance)
            setUserState({ ...userState, subscription: { balance: newBalance } })
            console.log("userState", userState)
        }
        catch (err) {
            console.log("oops... an error", err.message)
        }
    }

    const { roomName, roomParticipants } = roomDetails
    return (

        <>
            {/* <Card type="inner" style={{ marginTop: 16 }} > */}
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}>  {fromTimeString}- {toTimeString} | {stringDate} יום  </p>
            <p style={{ textAlign: "right" }}> {roomName} חדר עד {roomParticipants} משתתפים </p>
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            <p className="alignright" style={{ display: "inlineBlock" }}> {book.bookValue} קרדיטים נוצלו </p>
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            {flag ? <Button type="icon" ghost="true" className="alignleft" onClick={deleteMeeting}><DeleteTwoTone type='text' style={{ color: "blue" }} /></Button> : <p class="alignleft" style={{ color: "gray" }}> הוזמן ב {stringLogTime} : {stringLogDate}  </p>}
            <Divider />
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
            {/* </Card>  */}
        </>

    )
}


