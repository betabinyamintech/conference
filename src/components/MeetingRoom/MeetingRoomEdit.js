import { Form, Input, Button, Tag } from "antd";
import ProgramsTags from "./ProgramsTags";
import { tagsData } from "./mock";

const MeetingRoomEdit = ({ data, updateRecord }) => {
  console.log(data.roomName);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  // const onFinish = (values) => {
  //   updateRecord(values);
  //   // onUpdate(values);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="שם החדר" name="roomName">
        <Input defaultValue={data.roomName}></Input>
      </Form.Item>
      <Form.Item label="?לכמה משתתפים החדר מתאים" name="maximumParticipants">
        <Input defaultValue={data.maximumParticipants}></Input>
      </Form.Item>
      <Form.Item label="מחיר לשעת שימוש" name="pricePerHour">
        <Input defaultValue={data.pricePerHour}></Input>
      </Form.Item>

      <Form.Item label="תוכניות תשלום" name="Programs">
        <ProgramsTags tagsData={tagsData} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          עדכן
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MeetingRoomEdit;
