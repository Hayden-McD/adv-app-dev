import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'; 

const UserContext = React.createContext()

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(auth.currentUser) {
            setCurrentUser(auth.currentUser);
        }
    }, [auth])

    const value = {
        currentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
