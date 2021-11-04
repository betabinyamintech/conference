import React, { useState, useContext } from "react"

export const UserContext = React.createContext()

// container to provide the context
export const UserProvider = ({ children }) => {
    // this is our actual storage
    const [userState, setUserState] = useState()
    return (
        <UserContext.Provider value={[userState, setUserState]}>
            {children}
        </UserContext.Provider>
    )
}