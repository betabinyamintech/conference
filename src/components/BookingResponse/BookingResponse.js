import BookingAlternatives from "./BookingAlternatives"
import BookingRoomFound from "./BookingRoomFound"

const BookingResponse = ({bookingRequestResponse})=> {
    const { requestAccepted, alternatives } = bookingRequestResponse
    return <div>
        
        {requestAccepted && 
        <BookingRoomFound requestAccepted={requestAccepted} /> }
        {alternatives && <BookingAlternatives alternatives={alternatives}   />}
    </div>
}
export default BookingResponse;