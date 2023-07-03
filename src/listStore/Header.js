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
            <h1>{auth.userData.name}</h1>
            <p>{auth.userData.email}</p>
            <Button className="header-btn" onClick={userExit}>LOGOUT</Button>
        </header>);
}

export default Header;