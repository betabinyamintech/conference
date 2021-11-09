import { useState } from "react";
import { baseUrl } from ".";
import BookingResponse from "../components/BookingResponse/BookingResponse";

export default  BookingRequestToServer=(details) =>{
    console.log("details: ", details)
    // const response = await fetch(baseUrl + '/booking/bookingRequestToServer', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     cors: 'cors',
    //     body: JSON.stringify(details)
    // })
    const room = {
        name: "שופר",
        value: 15,
        maxOfParticipants: 8
    }
    console.log(room)
    const [bookingRequestResponse, setBookingRequestResponse]= useState({room})
    return (
        <>
        {bookingRequestResponse&& <BookingResponse bookingRequestResponse={bookingRequestResponse}
                setBookingCurrentResponse={setBookingRequestResponse} />}
        </>
    )

}