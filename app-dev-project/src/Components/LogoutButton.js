import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { routes } from '../Routes/routePaths'
import { useAuth } from './AuthContext'
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const [error, setError] = useState()
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const redirect = routes.LOGIN

    async function handleLogout() {
        try {
            setError("")
            await logout()
            history.push(redirect)
        } catch {
            //Implemented error checking for future use.
            setError("Failed to log out. Please try again")
        }
    }

    return (
        <Button onClick={handleLogout}> Logout </Button>
    )
}

export default LogoutButton