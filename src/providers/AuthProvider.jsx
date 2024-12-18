import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signUpWithEmailAndPassword = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginWithEmailAndPassword = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;