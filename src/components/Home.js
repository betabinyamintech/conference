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
import { ResetPassword } from "./ResetPassword";

const { TabPane } = Tabs;

function onChange(a, b, c) {}

const headDiv = {
  position: "absolute",
  width: "15%",
  left: "42.5%",
  top: "2%",
  textAlign: "center",
  lineHeight: "80px",
  // border: "1px solid red",
};
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  // border: "1px solid red",
};
const ModalLogin = ({ setShowModalLogin, setShowModalReset }) => {
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
          <Login
            setShowModalLogin={setShowModalLogin}
            setShowModalReset={setShowModalReset}
          />
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
  const [showModalReset, setShowModalReset] = useState(false);
  console.log("showModalReset", showModalReset);
  // let selectedValue = "fsasa"
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
    <div className="home">
      <ProfileHeader style={{ border: "1px solid blue" }} />
      {showModalLogin && (
        <ModalLogin
          setShowModalLogin={setShowModalLogin}
          setShowModalReset={setShowModalReset}
        />
      )}

      {showModalReset.visible && (
        <ResetPassword
          email={showModalReset.email}
          setShowModalReset={setShowModalReset}
        />
      )}

      <div style={{ height: "40px" }}></div>
      <div style={headDiv}>
        <Button
          type="primary"
          style={{ background: "#00000", width: "100%" }}
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
      <div className="content">
        <div className="carouselDiv">
          <p className="title"> עכשיו בבנימין טק</p>
          <Carousel
            autoplay
            className="carousel"
            arrows
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
          >
            <div style={contentStyle} className="carouselCell">
              <img
                alt="תמונה"
                src="https://binyamintech.co.il/wp-content/uploads/2021/11/wordpress.png"
              />
            </div>
            <div className="carouselCell">
              <img
                alt="תמונה"
                src="https://binyamintech.co.il/wp-content/uploads/2021/01/SJ2A0013.jpg"
              />
            </div>
            <div className="carouselCell">
              <img
                alt="תמונה"
                src="https://binyamintech.co.il/wp-content/uploads/2021/02/02-2-1.png"
              />
            </div>
          </Carousel>
        </div>
        {userState && (
          <div className="userLastData">
            <div>המידע שלך</div>
            <div className="userLastData">
              <BookingMenu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
