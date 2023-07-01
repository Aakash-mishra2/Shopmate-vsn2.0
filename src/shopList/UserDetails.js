import React, { useContext } from "react";
import { UserContext } from "../shared/context/userContext";
import './styles/ToDoItem.css'

export default function UserDetails(props) {

  const auth = useContext(UserContext);
  return (
    <div className={`${props.className} delta`}>
      <h1>Welcome! {auth.userData.name}</h1>
      <p>WE Will send your bill at {auth.userData.email}</p>
    </div>
  );
}

