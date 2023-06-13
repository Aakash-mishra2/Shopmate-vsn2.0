import React, { useContext } from "react";
import { UserContext } from "../userContext";
export default function UserDetails() {
  const auth = useContext(UserContext);
  return (
    <div className="container delta">
      <h1>Welcome! {auth.userData.name}</h1>
      <p>WE Will send your bill at {auth.userData.email}</p>
    </div>
  );
}

