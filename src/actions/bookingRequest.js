import { baseUrl } from ".";

export async function fetchBookingRequest(details) {

    // console.log("details: ", details)
    // const response = await fetch(baseUrl + '/auth/bookingRequestToServer', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     cors: 'cors',
    //     body: JSON.stringify(details)
    // })
    const mockResponse = {
        exact: {
            room:{
                roomName:"שופר",
            value:15,
            maximumParticipants: 6
            },
            bookingDetails:{
                hourEnd:"7:00",
                hourStart:"10:00",
                date:"23/12/2021"
            }
            
        }
    }
    console.log("mockResponse",mockResponse)
    return mockResponse
}