import { useState } from "react"
import BookingAlternatives from "./BookingAlternatives"
import BookingRoomComit from "./BookingRoomComit"
import BookingRoomFound from "./BookingRoomFound"

//זה מה שהיה בטסט
// const [currentResponse, setCurrentResponse] = useState(responseFromServer);
//     return(
//     <>
//         {currentResponse && <BookingResponse bookingRequestResponse={currentResponse}
//             setBookingCurrentResponse={setCurrentResponse} />}
//     </>
//  )

// const responseFromServer = {
//     requestAccepted: {
//         room: {
//             "roomName": 'שופר - חדר עד 6 משתתפים',
//             "maximumParticipants": 15,
//             "pricePerHour": 100

//         },
//         bookingDetails: {
//             "date": '05/13/2021',
//             "hourStart": '9:00',
//             "hourEnd": '15:00'
//         }
//     }
// }

const BookingResponse = ({ bookingRequestResponse, setBookingCurrentResponse }) => {

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