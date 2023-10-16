import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loding,setloding]=useState(true)

    const createUser = (email,password)  =>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)  =>{
        setloding(true)
        return  signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        user,
        loding,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider