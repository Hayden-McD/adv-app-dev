import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom';
import { routes } from '../Routes/routePaths';
const LogoutButton = () => {
    const { superSetLoggedIn, setCurrentUser, setLoggedIn } = useAuth()
    const history = useHistory();
    return (
        <>
            {superSetLoggedIn && <Button onClick={(async() => {
                await signOut(auth)
                .then((res) => {
                    setCurrentUser(null);
                    setLoggedIn(false);
                    history.replace(routes.LOGIN);
                }).catch(err => { console.log(err) })
            })}>Logout</Button>}
        </>
    )
}

export default LogoutButton