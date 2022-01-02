import { Form, Input, Button } from "antd";
import ProgramsTags from "./ProgramsTags";
import { tagsData } from "./mock";
import { useEffect, useState } from "react";
import updateRoomDetails from "../../actions/manage";

const MeetingRoomEdit = ({ data, updateRecord }) => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  let { id, name, value, maxOfPeople, _id } = data;
  let updateRoom = async () => {
    console.log("me again");
    console.log("data", updatedDetails);
    let req = updateRoomDetails(updatedDetails, _id);
    let res = await req;
    if (res.status === 200) {
      console.log("200!");
      setError(false);
      setSuccess("המידע עודכן!");
      setTimeout(() => {
        window.location.reload("/");
      }, 400);
      console.log(await res.json());
    } else {
      setError("היתה בעיה! המידע לא עודכן");
      setSuccess(false);
    }
  };
  console.log(data);
  // console.log(data.roomName);
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
  useEffect(() => {
    console.log("data in effect", data);
    setUpdatedDetails({
      name: data.name,
      value: data.value,
      maxOfPeople: data.maxOfPeople,
    });
    console.log("updated after effect", updatedDetails);
  }, []);
  return (
    <>
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
          <Input
            defaultValue={name}
            onChange={(e) => {
              setUpdatedDetails({ ...updatedDetails, name: e.target.value });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="?לכמה משתתפים החדר מתאים" name="maximumParticipants">
          <Input
            defaultValue={maxOfPeople}
            type="number"
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                maxOfPeople: +e.target.value,
              });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="מחיר לשעת שימוש" name="pricePerHour">
          <Input
            defaultValue={value}
            type="number"
            onChange={(e) => {
              setUpdatedDetails({ ...updatedDetails, value: +e.target.value });
            }}
          ></Input>
        </Form.Item>

        <Form.Item label="תוכניות תשלום" name="Programs">
          <ProgramsTags tagsData={tagsData} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>
      </Form>
      {success && (
        <div style={{ color: "green", fontSize: "20px" }}>{success}</div>
      )}
      {error && <div style={{ color: "green", fontSize: "20px" }}>{error}</div>}
      <Button
        type="primary"
        onClick={() => {
          updateRoom();
        }}
      >
        עדכן
      </Button>
    </>
  );
};

export default MeetingRoomEdit;
