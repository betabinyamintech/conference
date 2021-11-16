import React from "react"
import { Modal, Button, footer, Card, action } from 'antd';
import './BookingAlternativeRoom.css'
var moment = require('moment'); // require

export const BookingAltenativeRoom = ({ book, booking }) => {
    const { roomFound, optionToTime, optionFromTime, date } = booking
    const { value, name, maxOfPeople } = roomFound

    let stringDate = moment(date).format('l')
    let day = moment(date).format('dddd')
    const fromTimeHour = Math.floor(optionFromTime / 60)
    const fromTimeMin = optionFromTime % 60
    const toTimeHour = Math.floor(optionToTime / 60)
    const toTimeMin = optionToTime % 60
    let fromTimeString = ""
    let toTimeString = ""
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