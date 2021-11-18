import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { getUserDetails } from "../actions/auth"
export const UserContext = React.createContext()

// container to provide the context
export const UserProvider = ({ children }) => {
    // this is our actual storage
    const [userState, setUserState] = useState()

    async function loginToken() {
        console.log('loginToken')
        // we call the server for details if we have token
        try {
            const userDetails = await getUserDetails()
            setUserState(userDetails)
            console.log('userState', userDetails)
        } catch (error) {
            console.log("an error has occured getting user details: ", error);
        }
    }

    // use effect will be run once with [] empty dependencies
    useEffect(() => {
        // async function seperate for useEffect


//שינויים- לבדוק
        // async function getIt() {
        //     // we call the server for details if we have token
        //     try {
        //         const userDetails = await getUserDetails()
        //         setUserState(userDetails)
        //     } catch (error) {
        //         console.log("an error has occured getting user details: ", error);
        //     }
        // }
        // getIt()

        console.log('usercontext startup with token: ', localStorage.getItem('token'))
        if (localStorage.getItem('token'))
            loginToken()

    }, [])
    return (
        <UserContext.Provider value={{ userState, setUserState, loginToken }}>
            {children}
        </UserContext.Provider>
    )
}