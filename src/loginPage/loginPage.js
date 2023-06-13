import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import './loginPage.css';

export default function LoginPage() {

    const auth = useContext(UserContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        password: ''
    })

    function userLoginHandler(event) {
        event.preventDefault();
        console.log(contact);
        auth.userData = contact;
        auth.login();
    }

    return (
        <div className="login-form">
            <h1>
                Hello {contact.name}
            </h1>
            <p>Please login below </p>
            <form onSubmit={userLoginHandler}>
                <input
                    name="fName"
                    type="text"
                    onChange={handleChange}
                    placeholder="First Name"
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
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}