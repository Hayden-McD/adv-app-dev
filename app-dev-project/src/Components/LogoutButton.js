import React from 'react'
import { Button } from 'react-bootstrap'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom';
import { routes } from '../Routes/routePaths';

const LogoutButton = () => {
    const history = useHistory();
    
    return (
        <>
            <Button onClick={(async() => {
                await signOut(auth)
                .then((res) => {
                    history.replace(routes.LOGIN);
                }).catch(err => { console.log(err) })
            })}>Logout</Button>
        </>
    )
}

export default LogoutButton