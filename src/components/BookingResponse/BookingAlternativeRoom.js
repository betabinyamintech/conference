import React from "react"
import { Modal, Button, footer, Card, action } from 'antd';
import './BookingAlternativeRoom.css'

export const BookingAltenativeRoom = ({ book, booking }) => {

    return (
        <Card type="inner" style={{ marginTop: 16 }} >
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}> {booking.name} חדר עד {booking.maxparticipant} משתתפים</p>
            <p style={{ textAlign: "right" }}>ליום {booking.mydate}, בין השעות {booking.endTime} -{booking.startTime}</p>
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            <p class="alignright" style={{ display: "inlineBlock" }}>בעבור {booking.roomValue} אסימונים</p>
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            <Button class="alignleft" type='text'  style={{ color: "blue" }} onClick={() => { book(booking) }}> גם טוב</Button>
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
        </Card>
    )
}
export default BookingAltenativeRoom