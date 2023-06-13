import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          props.onChecked(event);
        }}
        placeholder="Enter Items and click Add button."
        type="text"
        value={props.inputText}
      />
      <button onClick={() => props.addItem()}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
