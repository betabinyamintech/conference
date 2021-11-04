import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './Authentication/Register';
import { Login } from './Authentication/Login';
import BookingRequestDetails from './BookingRequestDetails/BookingRequestDetails';
import { UserContext, UserProvider, useUserState } from '../context/user';
import App from '../App';
import { useContext, useEffect } from 'react';
import { getUserDetails } from '../actions/auth';

const Router = () => {
    // we need access to current value and updating the value of the user context
    const [userState, setUserState] = useContext(UserContext)
    // use effect will be run once with [] empty dependencies
    useEffect(() => {
        // async function seperate for useEffect
        async function getIt() {
            // we call the server for details if we have token
            const userDetails = await getUserDetails()
            setUserState(userDetails)
        }
        getIt()
    }, [])


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {
                    // we must check that usr state is true otherwise, this component will
                    // fail because it needs userState information
                    // and we can group all pages that require this here
                    userState && <>
                        <Route path="/bookrequest" element={<BookingRequestDetails />} />
                        <Route path="/someother" element={<BookingRequestDetails />} />
                    </>
                }
            </Routes>
        </BrowserRouter>
    )
}
export default Router