import React, { useState, useContext } from "react"
import {userSchema} from "./mock"

const user=userSchema
export const UserContext = React.createContext()

// container to provide the context
export const UserProvider = ({ children }) => {
    console.log("in context")
    // this is our actual storage
    const [userState, setUserState] = useState(user)
    return (
        <UserContext.Provider value={[userState, setUserState]}>
            {children}
        </UserContext.Provider>
    )
}