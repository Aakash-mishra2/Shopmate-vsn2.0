import React, { useCallback } from "react";
import LoginPage from "./loginPage/loginPage";
import ShopList from "./shopList/shoplist";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./userContext";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const log_In = useCallback(() => { setIsLoggedIn(true); });
    const log_Out = useCallback(() => { setIsLoggedIn(false); });
    const user = { name: '', email: '', password: '' };

    let routes;
    if (!isLoggedIn) {
        routes = (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        )
    }
    else {
        routes = (
            <Routes>
                <Route path="/" element={<Navigate to="/list" />} />
                <Route path="/list" element={<ShopList />} />
            </Routes>
        )
    }

    return (
        <UserContext.Provider value={{ userData: user, isLoggedIn: isLoggedIn, login: log_In, logout: log_Out }}>
            <BrowserRouter>
                <main>
                    {routes}
                </main>
            </BrowserRouter>
        </UserContext.Provider>

    )
}