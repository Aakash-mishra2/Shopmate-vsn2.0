import React, { useContext } from "react";
import { UserContext } from "../shared/context/userContext";
import './styles/header.css';
import Button from "../shared/formElements/Button";
function Header() {
    const auth = useContext(UserContext);
    const userExit = () => {
        auth.userData = { name: '', email: '', password: '' };
        auth.logout();
    }
    return (
        <header>
            <h1 align="left">{auth.userData.name}</h1>
            <p align="left">{auth.userData.email}</p>
            <Button className="header-btn" onClick={userExit}>LOGOUT</Button>
        </header>);
}

export default Header;