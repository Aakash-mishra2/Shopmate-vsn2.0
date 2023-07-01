import React from "react";
import './styles/InputArea.css';

function InputArea(props) {
  return (
    <div className="form">
      <span>
        <input
          onChange={(event) => {
            props.onChecked(event);
          }}
          placeholder="Enter Items"
          type="text"
          value={props.inputText}
        />
      </span>
      <span>
        <button className="inputButtons" onClick={() => props.addItem()} style={{ width: 'auto' }} ><b> ADD </b></button>
      </span>
    </div>
  );
}

export default InputArea;
