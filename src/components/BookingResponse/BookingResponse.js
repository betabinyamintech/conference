import { useState } from "react"
import BookingAlternatives from "./BookingAlternatives"
import BookingRoomComit from "./BookingRoomComit"
import BookingRoomFound from "./BookingRoomFound"



const BookingResponse = ({ bookingRequestResponse, setBookingCurrentResponse }) => {
    console.log("bookingRequestResponse", bookingRequestResponse)
    const [foundVisible, setFoundVisible] = useState(true)
    const { requestAccepted, alternatives } = bookingRequestResponse
    return <div>
        {requestAccepted && (foundVisible ? <BookingRoomFound requestAccepted={requestAccepted}
            setFoundVisible={setFoundVisible} setBookingCurrentResponse={setBookingCurrentResponse} /> :
            <BookingRoomComit setFoundVisible={setFoundVisible} setBookingCurrentResponse={setBookingCurrentResponse} />)}
        {alternatives && <BookingAlternatives alternatives={alternatives} setBookingCurrentResponse={setBookingCurrentResponse} />}
    </div>
}
export default BookingResponse;