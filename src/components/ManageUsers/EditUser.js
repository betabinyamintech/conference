import { Form, Input, Button, Table, Space } from "antd";
// import ProgramsTags from "./ProgramsTags";
// import { tagsData } from "./mock";
import { useEffect, useState } from "react";
import { updateUserDetails } from "../../actions/manage";

const EditUser = ({ data, updateRecord }) => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalRecoed, setModalRecord] = useState(false);
  let { name, email, phone, isRegistered, isSubscribed, _id } = data;
  let showModal = (record) => {
    setModalRecord(record);
  };

  let updateUser = async () => {
    console.log("me again");
    console.log("data", updatedDetails);
    let req = updateUserDetails(updatedDetails, _id);
    let res = await req;
    if (res.status === 200) {
      console.log("200!");
      setError(false);
      setSuccess("המידע עודכן!");
      setTimeout(() => {
        // window.location.reload("/");
      }, 400);
      console.log(await res.json());
    } else {
      setError("היתה בעיה! המידע לא עודכן");
      setSuccess(false);
    }
  };
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
      firstName: data.name,
      lastName: data.name,
      purchasedCoins: data.purchasedCoins ? data.purchasedCoins : 0,
      monthlyCoins: data.monthlyCoins ? data.monthlyCoins : 0,
      name: data.name,
      email: data.email,
      phone: data.phone,
      isRegistered: data.isRegistered,
      isSubscribed: data.isSubscribed,
    });
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
        <Form.Item label=" שם פרטי " name="firstName">
          <Input
            defaultValue={data.firstName ? data.firstName : "שם פרטי גנרי"}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                firstName: e.target.value,
              });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="שם משפחה" name="lastName">
          <Input
            defaultValue={data.lastName ? data.lastName : "שם משפחה גנרי"}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                lastName: e.target.value,
              });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="מייל" name="email">
          <Input
            defaultValue={email}
            type="text"
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                email: e.target.value,
              });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="טלפון" name="phone">
          <Input
            defaultValue={data.phone}
            type="text"
            onChange={(e) => {
              setUpdatedDetails({ ...updatedDetails, phone: +e.target.value });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="מנוי" name="isSubscribed">
          <Input
            defaultValue={data.phone}
            type="checkbox"
            checked={updatedDetails.isSubscribed}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                isSubscribed: e.target.checked,
              });
              console.log(updatedDetails);
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="אסימונים שנרכשו" name="purchasedCoins">
          <div
            defaultValue={data.purchasedCoins ? data.purchasedCoins : 0}
            type="number"
            // checked={data.isRegistered}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                purchasedCoins: +e.target.checked,
              });
            }}
          >
            {data.purchasedCoins ? data.purchasedCoins : 0}
          </div>
        </Form.Item>
        <Form.Item label=" הוסף אסימונים שנרכשו" name="addPurchasedCoins">
          <Input
            type="number"
            // checked={data.isRegistered}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                purchasedCoins:
                  updatedDetails.purchasedCoins + parseInt(e.target.value),
              });
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="אסימונים חודשיים" name="monthlyCoins">
          <div
            defaultValue={data.monthlyCoins ? data.monthlyCoins : 0}
            type="number"
            // checked={data.isRegistered}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                monthlyCoins: +e.target.checked,
              });
            }}
          >
            {data.monthlyCoins ? data.monthlyCoins : 0}
          </div>
        </Form.Item>
        <Form.Item label=" הוסף אסימונים חודשיים" name="addMonthlyCoins">
          <Input
            type="number"
            // checked={data.isRegistered}
            onChange={(e) => {
              setUpdatedDetails({
                ...updatedDetails,
                monthlyCoins:
                  updatedDetails.monthlyCoins + parseInt(e.target.value),
              });
            }}
          ></Input>
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
      <Button type="primary" onClick={updateUser}>
        עדכן
      </Button>
      <Button
        type="primary"
        onClick={updateUser}
        style={{
          marginRight: "80%",
          height: "20px",
          width: "60px",
          fontSize: "10px",
          background: "red",
        }}
      >
        מחק
      </Button>
    </>
  );
};

export default EditUser;
