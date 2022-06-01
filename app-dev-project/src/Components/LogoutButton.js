import React, { useState, useCallback, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { routes } from '../Routes/routePaths'
import { useAuth } from './AuthContext'
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const [error, setError] = useState()
    const {logout, loggedIn} = useAuth()
    const history = useHistory()
    const redirect = routes.SIGNUP

    const logoutButton = useCallback(() => {
        logout();
        history.replace(redirect)
    }, [logout])
    
    // useEffect(() => {
    //    if(!currentUser) {
    //    }
    // }, [loggedIn])

    // async function handleLogout() {
    //     try {
    //         await logout();
    //     } catch {
    //         //Implemented error checking for future use.
    //         setError("Failed to log out. Please try again")
    //     }
    // }

    return (
        <>
           {loggedIn ? (<Button onClick={logoutButton}> Logout </Button>) : (null) }
        </>
    )
}

export default LogoutButton