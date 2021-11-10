import { useState } from "react"
import BookingAlternatives from "./BookingAlternatives"
import BookingResponse from "./BookingResponse"
import BookingDetails from "./BookingDetails"
import {bookCommit} from "../../actions/booking"


const BookingRequestResponse = ({ bookingRequestResponse }) => {

    const { exact, alternatives } = bookingRequestResponse
    const [bookingResponse, setBookingResponse] = useState()
    const book=(bookingDetails)=>{
        const bookCommit1=  bookCommit(bookingDetails)
        setBookingResponse( bookCommit1)
    }


    if (bookingResponse) return <BookingResponse bookingResponse={bookingResponse}/>
    if (alternatives) return  <BookingAlternatives book={book} alternatives={alternatives} />
    else return  <BookingDetails book={book}  details={exact}/>


}
export default BookingRequestResponse;