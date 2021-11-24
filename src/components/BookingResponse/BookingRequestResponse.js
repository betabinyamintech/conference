import { useState } from "react"
import BookingAlternatives from "./BookingAlternatives"
import BookingResponse from "./BookingResponse"
import BookingDetails from "./BookingDetails"
import { bookCommit, IfSubscriberPay } from "../../actions/booking"
import { useNavigate } from "react-router-dom"
import { googleCalendarEventUrl } from 'google-calendar-url';
var moment = require('moment');

const BookingRequestResponse = ({ bookingRequestResponse, setBookingRequestResponse }) => {

    console.log("bookingRequestResponse", bookingRequestResponse)
    const { exact, alternatives } = bookingRequestResponse
    const [bookingResponse, setBookingResponse] = useState()
    const navigate = useNavigate()

    const book = async (bookingDetails) => {
        console.log("bookingDetails ", bookingDetails)
        let fromTime=moment.unix(bookingDetails.startTime).format('HHmmss')
        let toTime=moment.unix(bookingDetails.endTime).format('HHmmss')
        const url = googleCalendarEventUrl({
            start: bookingDetails.meetingDate + "T" + fromTime+"Z",
            end: bookingDetails.meetingDate + "T" + toTime+"Z",
            title: 'פגישה בבנימין טק',
            details:'פגישה בבנימין טק',
            location: ' בחדר ' + bookingDetails.roomDetails.name,
        });
        delete bookingDetails.roomDetails
        bookingDetails={...bookingDetails, url}
        const checkIfSubscriber = await IfSubscriberPay({ bookingDetails })
        if (checkIfSubscriber === -1)
            navigate("/pay")
        else {
            const bookCommit1 = await bookCommit(bookingDetails)
            setBookingResponse(bookCommit1)
        }
    }

    if (bookingResponse) return <BookingResponse bookingResponse={bookingResponse} setBookingRequestResponse={setBookingRequestResponse} />
    if (alternatives) return <BookingAlternatives book={book} alternatives={alternatives} setBookingRequestResponse={setBookingRequestResponse} />
    else if (exact) return <BookingDetails book={book} details={exact} setBookingRequestResponse={setBookingRequestResponse} />

}
export default BookingRequestResponse;