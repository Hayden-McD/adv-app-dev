import React from 'react'
import { Button } from 'react-bootstrap'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom';
import { routes } from '../Routes/routePaths';

const LogoutButton = ({
    user,
    isLoggedIn,
    authError,
    setUser,
    setIsLoggedIn,
    auth
}) => {
    const history = useHistory();

    return (
        <>
            <Button
                onClick={async () => {
                    await signOut(auth)
                        .then((res) => {
                            console.log(res.status);
                            if (res.status === 'ok') {
                                setUser(null);
                                setIsLoggedIn(false);
                                history.replace(routes.LOGIN);
                            }
                        })
                }}>
                Logout
            </Button>
        </>
    )
}

export default LogoutButton