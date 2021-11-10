import React, { useContext, useState } from "react";
import { Form, TimePicker, Button, Calendar, Select, DatePicker } from 'antd';
import { UserContext } from "../../context/user";
import BookingResponse from "../BookingResponse/BookingResponse";
import { useNavigate } from "react-router";
import {BookingRequestToServer} from "../../actions/bookingRequest"

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
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const room = {
  name: "שופר",
  value: 15,
  max: 8
}

const BookingRequestDetails = ({ user }) => {
  const [roomResponseState, setRoomResponseState] = useState(room)
  const navigate = useNavigate()

  const sendRequest = (fieldsValue) => {
    console.log("sendRequest: ", fieldsValue)
    BookingRequestToServer(fieldsValue)
    return (
      <>
        {room && <BookingResponse bookingRequestResponse={roomResponseState}
          setBookingCurrentResponse={setRoomResponseState} />}
      </>
    )
  }
  const { Option } = Select;
  const num = 26;
  const numbers = [];
  for (let i = 2; i < num; i++) {
    numbers.push(i);
  }
  const listItems = numbers.map((number) =>
    <Option value={number}>{number}</Option>
  );

  // we take first value of the context(second is setUserState)
  const { userState } = useContext(UserContext)
  return (
    <Form
      name="booking_request_details" {...formItemLayout}
      onFinish={sendRequest}
      style={{
        width: '400px',
        margin: '3em auto',
        direction: 'rtl'
      }}>
      <span>שלום </span>
      {/* we use the state in the page */}
      <span>{userState.name}</span>
      <div>ברוכים הבאים למערכת זימון החדרים של בנימין טק. למתי לשריין את החדר?</div>
      <Form.Item name="date" label="בחר תאריך" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="fromTime" label="משעה" {...config}>
        <TimePicker
          minuteStep={15}
          format='HH:mm'
          placeholder="בחר שעה" />
      </Form.Item>
      <Form.Item name="toTime" label="עד שעה" {...config} >
        <TimePicker
          minuteStep={15}
          format='HH:mm'
          placeholder="בחר שעה" />
      </Form.Item>
      {/* {...config} */}
      <Form.Item name="numberOfParticipants" label="עבור" >
        <Select style={{ width: 80 }} bordered={false} {...config}>
          {listItems}
        </Select>
      </Form.Item>
      <Form.Item
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
          מתאים לי בדיוק
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookingRequestDetails