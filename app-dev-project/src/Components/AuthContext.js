import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
        .then((User) => {
            setCurrentUser(User);
            setError(null)
            setLoading(false)
            setLoggedIn(true)
        })
        .catch((error) => {
            setError(error.message)
            setCurrentUser(null)
            setLoading(false)
            setLoggedIn(false)
        }).finally(() => {
            history.replace(routes.HOME)
        })
    }

    //Login function
    function login(email, password) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password).then((User) => {
            setCurrentUser(User);
        }).catch(error => {
            setError(error.message)
            setCurrentUser(null)
            setLoading(false)
            setLoggedIn(false);
        }).finally(() => {
            setError(null)
            setLoading(false)
            setLoggedIn(true)
        })
        return { currentUser, error, loading }
    }

    //Logout function
    async function logout() {
        const res = await auth.signOut()
        .then(() => {
            setCurrentUser(null);
            setLoggedIn(false);
        })
        .catch((err) => {
           throw new Error(err.message);
        })
        return;
    }

    const value = {
        currentUser,
        login,
        signup,
        logout, 
        loading,
        error,
        loggedIn,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
