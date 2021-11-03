import BookingAlternatives from "./BookingAlternatives"
import BookingRoomFound from "./BookingRoomFound"

const BookingResponse = ({bookingRequestResponse})=>(
    <div>
        {bookingRequestResponse.requestAccepted && <BookingRoomFound requestAccepted={requestAccepted} /> }
        {bookingRequestResponse.alternatives && <BookingAlternatives alternatives={alternatives}   />}
    </div>
)
export default BookingResponse;