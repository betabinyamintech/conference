import { useState, useContext } from "react";
import BookingAlternatives from "./BookingAlternatives";
import BookingResponse from "./BookingResponse";
import BookingDetails from "./BookingDetails";
import { bookCommit, IfSubscriberPay } from "../../actions/booking";
import { useNavigate } from "react-router-dom";
import { googleCalendarEventUrl } from "google-calendar-url";
import { UserContext } from "../../context/user";
var moment = require("moment");

const BookingRequestResponse = ({
  bookingRequestResponse,
  setBookingRequestResponse,
}) => {
  console.log("bookingRequestResponse", bookingRequestResponse);
  const { exact, alternatives } = bookingRequestResponse;
  const [bookingResponse, setBookingResponse] = useState();
  const navigate = useNavigate();
  const { userState, setUserState } = useContext(UserContext);
  // const [newValue, setNewValue] = useState(0)

  const book = async (bookingDetails) => {
    console.log("bookingDetails ", bookingDetails);
    let fromTime = new Date(bookingDetails.startTime)
      .toTimeString()
      .split(" ")[0]
      .replaceAll(":", "");
    let toTime = new Date(bookingDetails.endTime)
      .toTimeString()
      .split(" ")[0]
      .replaceAll(":", "");
    const url = googleCalendarEventUrl({
      start: +bookingDetails.meetingDate + "T" + fromTime + "Z",
      end: +bookingDetails.meetingDate + "T" + toTime + "Z",
      title: "פגישה בבנימין טק",
      details: "פגישה בבנימין טק",
      location: " בחדר " + bookingDetails.roomDetails.name,
    });
    delete bookingDetails.roomDetails;
    bookingDetails = { ...bookingDetails, url };
    const checkIfSubscriber = await IfSubscriberPay({ bookingDetails });
    console.log(checkIfSubscriber);
    if (checkIfSubscriber == -1) navigate("/pay");
    else {
      let { payedFromPurchased, payedFromMonthly, payedFromCreditcard } =
        checkIfSubscriber;
      console.log("checkIfSubscriber", checkIfSubscriber);
      const bookCommit1 = await bookCommit({
        ...bookingDetails,
        payedFrom: {
          purchased: payedFromPurchased,
          monthly: payedFromMonthly,
          creditCard: payedFromCreditcard,
        },
      });
      setBookingResponse(bookCommit1);
      setUserState({
        ...userState,
        subscription: { balance: checkIfSubscriber.coinsBalance },
      });
      console.log(
        "checkIfSubscriber.coinsBalance after",
        checkIfSubscriber.coinsBalance
      );
    }
  };

  if (bookingResponse)
    return (
      <BookingResponse
        bookingResponse={bookingResponse}
        setBookingRequestResponse={setBookingRequestResponse}
      />
    );
  if (alternatives)
    return (
      <BookingAlternatives
        book={book}
        alternatives={alternatives}
        setBookingRequestResponse={setBookingRequestResponse}
      />
    );
  else if (exact)
    return (
      <BookingDetails
        book={book}
        details={exact}
        setBookingRequestResponse={setBookingRequestResponse}
      />
    );
};
export default BookingRequestResponse;
