import React, { useContext } from "react";
import { UserContext } from "../shared/context/userContext";
import './styles/header.css';

function Header() {
    const auth = useContext(UserContext);

    return (
        <header>
            <h1>{auth.userData.name}</h1>
            <p>{auth.userData.email}</p>
        </header>);
}

export default Header;