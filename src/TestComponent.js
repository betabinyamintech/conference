import BookingRequestDetails from './components/BookingRequestDetails/BookingRequestDetails.js'
//import { user } from './components/TimeSelection/mock.js'

const response = {
    requestAccepted: {
        room: {},
        bookingDetails: {

        }
    }
}

const response2 = {
    alternatives: [

    ]
}

const BookingRoomFound = ({ requestAccepted }) => (
    <div>
        Requst Accepted
    </div>
)

const BookingAlternatives = ({ alternatives }) => (
    <div>
        alternatives
    </div>

)

const BookingResponse = ({ bookingRequestResponse }) => {
    const { alternatives, requestAccepted } = bookingRequestResponse
    if (alternatives) {
        return <BookingAlternatives alternatives={alternatives} />
    }
    if (requestAccepted) {
        return <BookingRoomFound requestAccepted={requestAccepted} />
    }
}
// <div>
//     {bookingRequestResponse.requestAccepted && }
//     {bookingRequestResponse.alternatives &&  />}
// </div>


export const TestComponent = ({ bookingRequestResponse }) => (
    <>
        <BookingRequestDetails/>
    </>
)