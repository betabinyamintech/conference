import React from "react";
import {useState} from "react";
import { Form, DatePicker, TimePicker, Button, Calendar, Select } from 'antd';
import { continueStatement } from "@babel/types";
const { RangePicker } = DatePicker;

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

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


const BookingRequestDetails = ({ user }) => {
    const onFinish = (fieldsValue) => {console.log(fieldsValue)}
    const { Option } = Select;
  return (
    <Form
    name="booking_request_details" {...formItemLayout}
    onFinish={onFinish}
    style={{
        width:'400px',
        margin:'3em auto',
        direction:'rtl'
        }}>
        <span>שלום </span>
        <span>user.userName</span>
        <div>ברוכים הבאים למערכת זימון החדרים של בנימין טק. למתי לשריין את החדר?</div>
      <Form.Item name="my_calander" label="calendar" {...config}>
          <div>
              <br/>
              <br/>
          <Calendar fullscreen={false}/>
          </div>
      </Form.Item>
      <Form.Item name="from_time" label="משעה" {...config}>
        <TimePicker
            minuteStep={15}
            format='HH:mm'
            placeholder="בחר שעה" />
      </Form.Item>
      <Form.Item name="to_time" label="משעה" {...config}>
        <TimePicker
            minuteStep={15}
            format='HH:mm'
            placeholder="בחר שעה" />
      </Form.Item>
      <Form.Item name="num" label="עבור" {...config}>
        <Select defaultValue="2" style={{ width: 80 }} bordered={false}>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
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
        <Button type="primary" htmlType="מתאים לי בדיוק">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookingRequestDetails