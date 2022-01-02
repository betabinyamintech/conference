import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import App from "../App";
//מייבא את הקומפוננטה של אימות
import { Register } from "./Authentication/Register";
import { Login } from "./Authentication/Login";
import BookingRequestDetails from "./BookingRequestDetails/BookingRequestDetails";
import { UserContext } from "../context/user";
import BookingAlternatives from "./BookingResponse/BookingAlternatives";
import { BookingMenu } from "./BookingMenu";
import UserProfile from "./UserProfile/UserProfile";
import MeetingRoomsTable from "./MeetingRoom/MeetingRomesTable";
import Home from "./Home";
import Pay from "./Pay";
import { LoginOtp } from "./Authentication/LoginOtp";
import { ConfigProvider } from "antd";

const Router = () => {
  const { userState } = useContext(UserContext);
  // console.log("router userState=", userState)
  return (
    <ConfigProvider direction="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/loginOtp" element={<LoginOtp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/MeetingRoomsTable" element={<MeetingRoomsTable />} />

          {
            // we must check that usr state is true otherwise, this component will
            // fail because it needs userState information
            // and we can group all pages that require this here
            //רק אם יש יוזר סטייט הוא יציג את בוקינג רקווסט
            userState && (
              <>
                <Route
                  path="/bookrequest"
                  element={<BookingRequestDetails />}
                />
                <Route path="/alternatives" element={<BookingAlternatives />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/alternatives" element={<BookingAlternatives />} />
                <Route path="/bookingMenu" element={<BookingMenu />} />

                <Route path="/pay" element={<Pay />} />
              </>
            )
          }
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default Router;
