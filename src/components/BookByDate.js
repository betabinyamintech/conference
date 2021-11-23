import React from "react";
import { Card, Divider } from "antd";
import { booksExample } from "../context/mock";
import { DeleteTwoTone  } from "@ant-design/icons"
var moment=require('moment')



export const  BookByDate = ({ flag, book }) => {
    let stringDate = moment(book.meetingDate, 'YYYYMMDD').format("dddd, MMMM Do YYYY");
    let stringLogDate = moment(book.logDate).format("D.M.YYYY");
    let stringLogTime = moment(book.logDate).format("HH:mm");
    console.log("stringLogDate",stringLogDate)
    let day = moment(book.meetingDate, 'YYYYMMDD').format('dddd')
    let fromTime=moment.unix(book.startTime).format('HHmm')
    let toTime=moment.unix(book.endTime).format('HHmm')
    let toTimeString=toTime.slice(0, 2) + ":" + toTime.slice(2);
    let fromTimeString=fromTime.slice(0, 2) + ":" + fromTime.slice(2);
    // const room=  getRoomBookingDetails(book.roomId)
    console.log('book', book)
    return (

        <>
            {/* <Card type="inner" style={{ marginTop: 16 }} > */}
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}>  {fromTimeString}- {toTimeString} | {stringDate} יום  </p>
            <p style={{ textAlign: "right" }}> חדר עד {book.paticipants} משתתפים{book.name}</p>
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            <p class="alignright" style={{ display: "inlineBlock" }}> אסימונים נוצלו {book.value}</p>
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            {flag ? <DeleteTwoTone class="alignleft" type='text' style={{ color: "blue" }} /> : <p class="alignleft" style={{ color: "gray" }}>{stringLogTime}:{stringLogDate} הוזמן ב  </p>}
            <Divider />
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
            {/* </Card>  */}
        </>

    )
}


