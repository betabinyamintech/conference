import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import App from '../App';
//מייבא את הקומפוננטה של אימות
import { Register } from './Authentication/Register';
import { Login } from './Authentication/Login';
import BookingRequestDetails from './BookingRequestDetails/BookingRequestDetails';
import { UserContext } from '../context/user';
import OTP from './OtpPage/OTP';
import BookingAlternatives from './BookingResponse/BookingAlternatives';
import UserProfile from './UserProfile/UserProfile';
import MeetingRoomsTable from './MeetingRoom/MeetingRomesTable';

const Router = () => {
    const { userState } = useContext(UserContext)
    return (<BrowserRouter >
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element = { <UserProfile/> }/>
            <Route path="/otp" element={<OTP />} />
            <Route path="/alternatives" element={<BookingAlternatives />} />
            <Route path="/MeetingRoomsTable" element={<MeetingRoomsTable />} />


            {
                // we must check that usr state is true otherwise, this component will
                // fail because it needs userState information
                // and we can group all pages that require this here
//רק אם יש יוזר סטייט הוא יציג את בוקינג רקווסט
                userState && <>
                    <Route path="/bookrequest" element={<BookingRequestDetails />} />
                    <Route path="/otp" element={<OTP />} />
                </>
            }
        </Routes>
    </BrowserRouter >)
}

export default Router