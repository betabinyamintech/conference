import { useState } from "react"
import BookingAlternatives from "./BookingAlternatives"
import BookingResponse from "./BookingResponse"
import BookingDetails from "./BookingDetails"
import { bookCommit, IfSubscriberPay } from "../../actions/booking"
import { Navigate } from "react-router"
import { useNavigate } from "react-router-dom"


const BookingRequestResponse = ({ bookingRequestResponse, setBookingRequestResponse }) => {

    console.log("bookingRequestResponse", bookingRequestResponse)
    const { exact, alternatives } = bookingRequestResponse
    const [bookingResponse, setBookingResponse] = useState()
    const navigate = useNavigate()

    const book = async (bookingDetails) => {
        console.log("in book (:")
        const checkIfSubscriber = await IfSubscriberPay({ bookingDetails })
        console.log("checkIfSubscriber",checkIfSubscriber)
        if (checkIfSubscriber == -1)
            navigate("/pay")
        else {
            const bookCommit1 = await bookCommit({ bookingDetails })
            setBookingResponse(bookCommit1)
        }
    }


    if (bookingResponse) return <BookingResponse bookingResponse={bookingResponse} setBookingRequestResponse={setBookingRequestResponse} />
    if (alternatives) return <BookingAlternatives book={book} alternatives={alternatives} setBookingRequestResponse={setBookingRequestResponse} />
    else if (exact) return <BookingDetails book={book} details={exact} setBookingRequestResponse={setBookingRequestResponse} />

}
export default BookingRequestResponse;