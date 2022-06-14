import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onIdTokenChanged} from 'firebase/auth';
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { auth } from '../firebase'; 
import { useHistory } from 'react-router-dom';
import { routes } from '../Routes/routePaths';
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory()
    //Signup function
    async function signup(email, password) {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res)
            setLoading(false);
            history.replace(routes.HOME)
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    const superSetLoggedIn = useCallback(() => {
        return loggedIn
    }, [loggedIn])

    const setAuth = useCallback(async () => {
        const unsubscribe = await onIdTokenChanged(auth, (User) => {
            if(User) {
                setCurrentUser(User);
                setLoggedIn(true);
            }
            else {
                setCurrentUser(null);
                setLoggedIn(false);
            }
            setError(null);
        }, (err) => {
            setCurrentUser(null);
            setLoading(false);
            setLoggedIn(false);
            setError(err.message)
        })
        return (() => {
            unsubscribe();
        })
    })
    
    useEffect(() => {
        setAuth();
    }, [auth, setAuth])
        
    //Login function
    async function login(email, password) {
        setLoading(true);
        const res = await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            history.replace(routes.HOME)
        }).catch(error => {
            setError(error.message)
        })
        return;
    }

    const value = {
        currentUser,
        login,
        signup,
        loading,
        error,
        loggedIn,
        superSetLoggedIn,
        setCurrentUser,
        setLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
