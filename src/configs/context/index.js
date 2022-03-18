import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({
    isLogged: false,
    verifyToken: () => {},
    setLogged: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const verifyToken = async () => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }

    const setLogged = () => {
        setIsLogged(true);
        console.log("OKK");
    }

    useEffect(()=> {
        const clear = async () => {
            await AsyncStorage.clear();
        }
        //clear();
        verifyToken();
    }, []) 

    const context = {
        isLogged,
        setLogged,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext