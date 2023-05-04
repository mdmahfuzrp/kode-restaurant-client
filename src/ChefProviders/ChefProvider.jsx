import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const ChefContext = createContext(null);
const auth = getAuth(app);

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
        fetch('http://localhost:5500/all-chefs/recipe')
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        fetch('http://localhost:5500/all-chefs')
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

    const chefInfo = {
        displayName: 'mahfuzrp',
        chefs,
        recipe,
        signUp,
        login,
        logOut,
        user,
        loading,
    }
    return (
        <ChefContext.Provider value={chefInfo}>
            {children}
        </ChefContext.Provider>
    );
};

export default ChefProvider;