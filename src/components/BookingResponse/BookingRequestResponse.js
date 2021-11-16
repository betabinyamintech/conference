import { useState } from "react"
import BookingAlternatives from "./BookingAlternatives"
import BookingResponse from "./BookingResponse"
import BookingDetails from "./BookingDetails"
import {bookCommit} from "../../actions/booking"


const BookingRequestResponse = ({ bookingRequestResponse, setBookingRequestResponse }) => {

    console.log("bookingRequestResponse",bookingRequestResponse)
    const { exact, alternatives } = bookingRequestResponse
    const [bookingResponse, setBookingResponse] = useState()

    const book=async (bookingDetails)=>{
        const bookCommit1= await bookCommit({bookingDetails})
        setBookingResponse( bookCommit1)
    }


    if (bookingResponse) return <BookingResponse bookingResponse={bookingResponse} setBookingRequestResponse={setBookingRequestResponse}/>
    if (alternatives ) return  <BookingAlternatives book={book} alternatives={alternatives} />
    else if(exact ) return  <BookingDetails book={book}  details={exact}/>

}
export default BookingRequestResponse;