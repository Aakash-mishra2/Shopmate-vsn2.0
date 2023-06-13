import React, { useContext, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import UserDetails from "./UserDetails";
import { UserContext } from "../userContext";

export default function ShopList() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const auth = useContext(UserContext);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((index) => {
        return index !== id;
      });
    });
  }
  function userLogoutHandler() {
    auth.userData = { name: '', email: '', password: '' };
    auth.logout();
  }
  return (
    <div className="container">
      <UserDetails />
      <div className="heading">
        <h1>
          Shopping List <hr /> {new Date().toLocaleString()}
        </h1>
      </div>
      <InputArea
        onChecked={handleChange}
        addItem={addItem}
        inputText={inputText}
      />
      <div>
        <li>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </li>
        <li>
          <p>Click here to logout</p>
          <button onClick={userLogoutHandler}>LOGOUT</button>
        </li>
      </div>
    </div>
  );
}

