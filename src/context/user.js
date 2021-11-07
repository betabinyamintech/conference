import React, { useState, useEffect } from "react"
import { getUserDetails } from "../actions/auth"

export const UserContext = React.createContext()

// container to provide the context
export const UserProvider = ({ children }) => {
    // this is our actual storage
    const [userState, setUserState] = useState()

    // use effect will be run once with [] empty dependencies
    useEffect(() => {
        // async function seperate for useEffect
        async function getIt() {
            // we call the server for details if we have token
            try {
                const userDetails = await getUserDetails()
                setUserState(userDetails)
            } catch (error) {
                console.log("an error has occured getting user details: ", error);
            }
        }
        getIt()
    }, [])
    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {children}
        </UserContext.Provider>
    )
}