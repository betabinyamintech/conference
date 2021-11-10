import { useState } from "react";
import { baseUrl } from ".";
import BookingResponse from "../components/BookingResponse/BookingResponse";

export async function  BookingRequestToServer(details){
    // const [bookingRequestResponse, setBookingRequestResponse]= useState({})

    console.log("details: ", details)
    const response = await fetch(baseUrl + '/auth/bookingRequestToServer', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(details)
    })
    // const room = {
    //     name: "שופר",
    //     value: 15,
    //     maxOfParticipants: 8
    // }
    // const res=await response.json()
    // console.log(res)
    // setBookingRequestResponse(res)
    return (
        <>
        {/* {bookingRequestResponse&& <BookingResponse bookingRequestResponse={res}
                setBookingCurrentResponse={setBookingRequestResponse} />} */}
        </>
    )   

}