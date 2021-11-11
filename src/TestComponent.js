import BookingRequestDetails from "./components/BookingRequestDetails/BookingRequestDetails";
import React from 'react'
import BookingAlternatives from "./components/BookingResponse/BookingAlternatives";
import { BookingMenu } from "./components/BookingMenu";
import { BookByDate } from "./components/BookByDate";


export const TestComponent = () => {
    return(
    <div>
        {/* <BookingAlternatives/> */}
        <BookingMenu/>
        {/* <BookByDate/> */}
        
    </div>
    )
}
