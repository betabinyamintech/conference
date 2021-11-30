import React from "react";
import { Modal, Button } from "antd";
import BookingAltenativeRoom from "./BookingAlternativeRoom";
//import { useNavigate } from 'react-router-dom';

const BookingAlternatives = ({
  book,
  alternatives,
  setBookingRequestResponse,
}) => {
  //const navigate = useNavigate()
  const bookingsOptions = alternatives;

  console.log("bookingsOptions: ", bookingsOptions);

  const goBackHome = () => {
    //העברה לקומפוננטה של הזמנת משתתפים
    //bookingResponse=false
    setBookingRequestResponse(false);
  };
  return (
    <Modal
      centered
      maskClosable
      onCancel={goBackHome}
      title={
        <h2 style={{ textAlign: "right" }}>החדר המתאים תפוס בזמן שביקשת</h2>
      }
      visible="true"
      footer={
        <Button align="center" type="primary" onClick={goBackHome}>
          נפגש בפעם אחרת{" "}
        </Button>
      }
    >
      {bookingsOptions.length == 0 ? (
        <h3 style={{ textAlign: "right" }}>נשמח לארח אותך בפעם אחרת</h3>
      ) : (
        <h3 style={{ textAlign: "right" }}>
          בא לך להתגמש? נשמח לארח אותך בזמן אחר או בחדר גדול יותר.
        </h3>
      )}
      {bookingsOptions.map((Item) => (
        <BookingAltenativeRoom book={book} booking={Item} />
      ))}
    </Modal>
  );
};

export default BookingAlternatives;
