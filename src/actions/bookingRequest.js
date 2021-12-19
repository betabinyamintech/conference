import { baseUrl } from ".";

export async function fetchBookingRequest(details) {

    console.log("details: ", details)
    const response = await fetch(baseUrl + '/booking/getAvailableBookings', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'        },
        cors: 'cors',
        body: JSON.stringify(details)
    })

    return await response.json()
}