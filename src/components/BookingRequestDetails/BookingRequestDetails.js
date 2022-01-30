import React, { useContext, useState } from "react";
import { Form, TimePicker, Button, Select, DatePicker } from "antd";
import { UserContext } from "../../context/user";
import { fetchBookingRequest } from "../../actions/bookingRequest";
import BookingRequestResponse from "../BookingResponse/BookingRequestResponse";
import ProfileHeader from "../UserProfile/ProfileHeader";
import { Link } from "react-router-dom";
var moment = require("moment");

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "נא לבחור זמן",
    },
  ],
};
let formItemStyle = {
  display: "flex",
  justifyContent: "space-between",
};
let elementsStyle = {
  width: "75%",
};
const BookingRequestDetails = ({ user }) => {
  const [bookingRequestResponse, setBookingRequestResponse] = useState();
  let minParticipants = 2;
  const handleBookingRequest = async (fieldsValue) => {
    console.log(fieldsValue);
    console.log(fieldsValue.date);

    const response = await fetchBookingRequest({
      ...fieldsValue,
      meetingDate: fieldsValue.date.format("YYYYMMDD"),
      fromTime: fieldsValue.fromTime.format("HHHHMM"),
      toTime: fieldsValue.toTime.format("HHmm"),
    });
    console.log("res in the form", response);
    setBookingRequestResponse(response);
  };

  const { Option } = Select;
  const num = 26;
  const numbers = [];
  for (let i = 2; i < num; i++) {
    numbers.push(i);
  }
  const listItems = numbers.map((number) => (
    <Option value={number}>{number}</Option>
  ));
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().startOf("day");
  }

  // we take first value of the context(second is setUserState)
  const { userState } = useContext(UserContext);
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        padding: "5px",
        marginLeft: "25%",
        marginTop: "3%",
      }}
    >
      <div className="container">
        <p className="main" style={{ fontSize: "15px" }}>
          <Link to="/">ראשי</Link>&gt;&gt; הזמנה חדשה
        </p>
        <Form
          name="booking_request_details"
          {...formItemLayout}
          onFinish={handleBookingRequest}
          style={{
            width: "400px",
            margin: "3em auto",
            direction: "rtl",
          }}
        >
          <span>אהלן </span>
          {/* we use the state in the page */}
          <span>{userState.name}</span>
          <div>נשמח לארח אותך באחד מחדרי הישיבות המפנקים שלנו. </div>
          <div>מתי תכננת לקיים את הפגישה שלך?</div>
          <br />
          <Form.Item
            name="date"
            label=" תאריך"
            {...config}
            style={formItemStyle}
          >
            <DatePicker disabledDate={disabledDate} style={elementsStyle} />
          </Form.Item>
          <Form.Item
            name="fromTime"
            label="משעה"
            {...config}
            style={formItemStyle}
          >
            <TimePicker
              minuteStep={15}
              format="HH:mm"
              placeholder="בחר שעה"
              style={elementsStyle}
            />
          </Form.Item>
          <Form.Item
            name="toTime"
            label="עד שעה"
            {...config}
            style={formItemStyle}
          >
            <TimePicker
              minuteStep={15}
              format="HH:mm"
              placeholder="בחר שעה"
              style={elementsStyle}
            />
          </Form.Item>
          {/* {...config} */}
          <Form.Item
            name="numberOfParticipants"
            label="כמה אנשים תהיו"
            rules={[{ required: true, message: "נא לבחור כמות משתתפים" }]}
          >
            <Select
              style={elementsStyle}
              bordered={true}
              defaultValue={minParticipants}
            >
              {listItems}
            </Select>
          </Form.Item>
          <Form.Item
            style={formItemStyle}
            wrapperCol={{
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            }}
          >
            <Button type="primary" htmlType="submit">
              חפשו לי חדר מתאים{" "}
            </Button>
          </Form.Item>
        </Form>
        {bookingRequestResponse && (
          <BookingRequestResponse
            bookingRequestResponse={bookingRequestResponse}
            setBookingRequestResponse={setBookingRequestResponse}
          />
        )}
      </div>
    </div>
  );
};

export default BookingRequestDetails;
