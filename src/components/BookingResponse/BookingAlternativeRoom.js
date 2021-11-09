import React from "react"
import { Modal, Button, footer, Card, action } from 'antd';
import { Link } from "react-router-dom";
import { bookCommit } from "../../actions/booking";
import './BookingAlternativeRoom.css'

export const BookingAltenativeRoom = ({ booking }) => {
    const createBooking = () => {
        // alert("in create")
        bookCommit(booking)
    }
    return (
        <Card type="inner" style={{ marginTop: 16 }} >
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}> {booking.name} חדר עד {booking.maxparticipant} משתתפים</p>
            <p style={{ textAlign: "right" }}>ליום {booking.mydate}, בין השעות {booking.endTime} -{booking.startTime}</p>
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            <p class="alignright" style={{ display: "inlineBlock" }}>בעבור {booking.roomValue} אסימונים</p>
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            <Button class="alignleft" type='text' key="submit" style={{ color: "lightblue" }} onClick={() => { createBooking() }}> גם טוב</Button>
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
        </Card>
    )
}
export default BookingAltenativeRoom