import { Button } from "antd";
import React, { useState, useContext } from "react";
import { PlusOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Carousel, Tabs, Modal } from "antd";
import english from "../img/english.jpg";
import ProfileHeader from "./UserProfile/ProfileHeader";
import "../components/Home.css";
import { UserContext } from "../context/user";
import { Register } from "./Authentication/Register";
import { LoginOtp } from "./Authentication/LoginOtp";
import { Login } from "./Authentication/Login";
import { BookingMenu } from "./BookingMenu";

const { TabPane } = Tabs;

function onChange(a, b, c) { }

const headDiv = {
  height: "2cm",
  textAlign: "center",
  background: "#F9F9F9",
  lineHeight: "80px",
};
const ModalLogin = ({ showModalLogin, setShowModalLogin }) => {
  return (
    <Modal
      centered
      visible="true"
      maskClosable
      onCancel={() => setShowModalLogin(false)}
      footer={<></>}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="כניסה עם sms" key="1">
          <LoginOtp />
        </TabPane>
        <TabPane tab="כניסה עם סיסמא" key="2">
          <Login />
        </TabPane>
        <TabPane tab="הרשמה" key="3">
          <Register />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

const Home = () => {
  const { userState } = useContext(UserContext);
  const navigate = useNavigate();
  const [showModalLogin, setShowModalLogin] = useState(false);
  const NewBookingButton = () => {
    console.log("in newBookingButton", showModalLogin);
    if (userState) {
      navigate("/bookrequest");
    } else {
      setShowModalLogin(true);
      console.log("after ", showModalLogin);
    }
  };
  return (
    <>
      <ProfileHeader />
      {showModalLogin && (
        <ModalLogin
          showModalLogin={showModalLogin}
          setShowModalLogin={setShowModalLogin}
        />
      )}
      <div style={{ height: "40px" }}></div>
      <div>
        <div style={headDiv}>
          <Button
            type="primary"
            style={{ background: "#00AAAF" }}
            shape="round"
            icon={<PlusOutlined />}
            size={"large"}
            onClick={() => {
              NewBookingButton();
            }}
          >
            פגישה חדשה
          </Button>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}
          >
            <p>קורה עכשיו בבנימין טק</p>
            <Carousel
              afterChange={onChange}
              arrows
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
            >
              <div class="img_carousel">
                <img
                  alt="תמונה"
                  src="https://binyamintech.co.il/wp-content/uploads/2021/11/wordpress.png"
                />
              </div>
              <div class="img_carousel">
                <img
                  alt="תמונה"
                  src="https://binyamintech.co.il/wp-content/uploads/2021/01/SJ2A0013.jpg"
                />
              </div>
              <div class="img_carousel">
                <img alt="תמונה" src={english} />
              </div>
              <div class="img_carousel">
                <img
                  alt="תמונה"
                  src="https://binyamintech.co.il/wp-content/uploads/2021/02/02-2-1.png"
                />
              </div>
            </Carousel>
            {userState && <BookingMenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
