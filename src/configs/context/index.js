import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({
    isLogged: false,
    teamList: [],
    verifyToken: () => {},
    setLogged: () => {},
    addPlayerToTeamList: () => {},
    logout: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [teamList, setTeamList] = useState([]);

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

    const addPlayerToTeamList = (player) => {
        setTeamList([...teamList, player]);
        alert("The player has been added to your player list");
    }

    const logout = async () => {
        await AsyncStorage.clear();
        setIsLogged(false)
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
        teamList,
        setLogged,
        addPlayerToTeamList,
        logout,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext