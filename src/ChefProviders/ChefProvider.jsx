import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const ChefContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ChefProvider = ({children}) => {
    const [chefs, setChefs] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=> {
            return unsubscribe();
        }
    },[])

    useEffect(()=>{
        fetch('https://kode-restaurant-server-site-mahfuzrpsmorg-gmailcom.vercel.app/all-chefs/recipe')
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        fetch('https://kode-restaurant-server-site-mahfuzrpsmorg-gmailcom.vercel.app/all-chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    },[])



    // Handle Login
    const signUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, provider);
    }

    const gitHubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const chefInfo = {
        chefs,
        recipe,
        signUp,
        login,
        logOut,
        user,
        loading,
        auth,
        googleLogIn,
        gitHubLogin
    }
    return (
        <ChefContext.Provider value={chefInfo}>
            {children}
        </ChefContext.Provider>
    );
};

export default ChefProvider;