import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

//CHALLENGE: I have extracted the Input Area, including the <input> and
//<button> elements into a seperate Component called InputArea.
//Your job is to make the app work as it did before but this time with the
//InputArea as a seperate Component.

// DO NOT: Modify the ToDoItem.jsx
// DO NOT: Move the input/button elements back into the App.jsx

//Hint 1: You will need to think about how to manage the state of the input element
//in InputArea.jsx.
//Hint 2: You will need to think about how to pass the input value back into
//the addItem() function in App.jsx.
