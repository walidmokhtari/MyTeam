import React, { useState, createContext, useEffect } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({
    isLogged: false,
    teamList: [],
    currentPlayer: {},
    verifyToken: () => {},
    setLogged: () => {},
    addPlayerToTeamList: () => {},
    logout: () => {},
    CurrentPlayer: () => {},
    deleteFromTeamList: () => {}
})

export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [teamList, setTeamList] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});

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
    }

    const logout = async () => {
        await AsyncStorage.clear();
        setIsLogged(false)
    }

    const CurrentPlayer = (player) => {
        setCurrentPlayer(player);
    }

    const deleteFromTeamList = (id) => {
        const newTab = teamList.filter((item) => item.id !== id)
        setTeamList([...newTab])
        alert("The player has been deleted from team list");
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
        currentPlayer,
        setLogged,
        addPlayerToTeamList,
        logout,
        CurrentPlayer,
        deleteFromTeamList
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext