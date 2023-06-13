import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import './loginPage.css';

export default function LoginPage(props) {

    const auth = useContext(UserContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        password: ''
    })

    function userLoginHandler(event) {
        event.preventDefault();
        console.log(contact);
        auth.setUserData(contact);
        auth.login();
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setContact((previnfo) => {
            return {
                ...previnfo,
                [name]: value
            };
        });
    }
    return (
        <div className="login-form">
            <h1>
                Hello {contact.name}
            </h1>
            <p>Please login below </p>
            <form onSubmit={userLoginHandler}>
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={contact.name}
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={contact.email}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    value={contact.password}
                />
                <button type="submit" >LOGIN</button>
            </form>
        </div>
    )
}