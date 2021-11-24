import React from "react"
import { Button, Card } from 'antd';
import './BookingAlternativeRoom.css'
var moment = require('moment'); // require


export const BookingAltenativeRoom = ({ book, booking }) => {
    let { meetingDate, startTime, endTime, roomDetails } = booking
    // const details = {
    //     logDate:Date.now(),
    //     roomId:roomFound._id,
    //     endTime:toTime,
    //     startTime:fromTime,
    //     owner:userId,
    //     meetingDate:date
    // }
    const { value, name, maxOfPeople } = roomDetails

    let stringDate = moment(meetingDate, 'YYYYMMDD').format('l')
    let day = moment(meetingDate, 'YYYYMMDD').format('dddd')
    let fromTime=moment.unix(startTime).format('HHmm')
    let toTime=moment.unix(endTime).format('HHmm')
    let toTimeString=toTime.slice(0, 2) + ":" + toTime.slice(2);
    let fromTimeString=fromTime.slice(0, 2) + ":" + fromTime.slice(2);

    return (
        <Card type="inner" style={{ marginTop: 16 }} >
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}> {name} חדר עד {maxOfPeople} משתתפים</p>
            {/* <p style={{ textAlign: "right" }}> בין השעות {toTimeString} - {fromTimeString} ליום {day}, {stringDate}</p> */}
            <p style={{ textAlign: "right" }}>{stringDate}  , {day} ליום  </p>
            <p style={{ textAlign: "right" }}>בין השעות  {toTimeString} - {fromTimeString}</p>
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            <p class="alignright" style={{ display: "inlineBlock" }}>בעבור {value} אסימונים</p>
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            <Button class="alignleft" type='text' style={{ color: "blue" }} onClick={() => { book(booking) }}> מעולה לי</Button>
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
        </Card>
    )
}
export default BookingAltenativeRoom