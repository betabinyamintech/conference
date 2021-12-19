import { Modal, Button } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingResponse = ({ bookingResponse, setBookingRequestResponse }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log("bookingResponse", bookingResponse);
  const goBackHome = () => {
    setBookingRequestResponse(false);
  };

  const cancelModal = () => {
    navigate("/");
  };

  return (
    <>
      <Modal
        width="10cm"
        centered
        visible
        title="אנחנו מחכים לך!"
        footer={[
          <Link to="/">
            <Button
              type="text"
              key="submit"
              loading={loading}
              onClick={goBackHome}
            >
              איזה כיף! תודה
            </Button>{" "}
          </Link>,
          <span>|</span>,
          <a href={bookingResponse}>
            <Button
              type="text"
              key="back"
              loading={loading}
              onClick={goBackHome}
            >
              יצירת זימון פגישה ביומן.
            </Button>
          </a>,
        ]}
        onCancel={cancelModal}
      >
        <br />
        <div>
          <span>שולחים לך את פרטי הפגישה למייל</span>
        </div>
        <br />
      </Modal>
    </>
  );
};

export default BookingResponse;
