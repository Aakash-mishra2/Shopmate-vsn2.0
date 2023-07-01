import { createContext } from "react";

export const UserContext = createContext({
    userData: {
        name: '',
        email: '',
        password: ''
    },
    isLoggedIn: false,
    setUserData: () => { },
    login: () => { },
    logout: () => { }
})