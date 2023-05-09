import React, { useState } from "react";

function UserDetails() {
  const [contact, setContact] = useState({
    fName: ""
  });

  function handleClick(event) {
    const { name, value } = event.target;
    setContact((previnfo) => {
      return {
        ...previnfo,
        [name]: value
      };
    });
  }

  return (
    <div className="container delta">
      <h1>Welcome! {contact.fName}</h1>
      <form className="form">
        <input
          onChange={handleClick}
          name="fName"
          placeholder="Your Name, Please!"
          value={contact.fname}
        />
        <button onClick={(event) => event.preventDefault()}></button>
      </form>
    </div>
  );
}

export default UserDetails;
