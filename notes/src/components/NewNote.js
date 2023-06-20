import React, { useState } from "react";
import { nanoid } from "nanoid";

function NewNote(props) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  const [length, setLength] = useState(500);

  function handleSubmit() {
    if (text.length > 0) {
      props.addNote(text, currentDate, nanoid());
      setText("");
      setLength(500);
    }
  }

  function handleCancel() {
    setText("");
    setLength(500);
  }

  function handleInputChange(event) {
    setText(event.target.value);
    setLength(500 - event.target.value.length);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    } else if (event.key === "Escape") {
      event.preventDefault();
      handleCancel();
    }
  }

  const [text, setText] = useState("");

  return (
    <div id="newnote" className="note note-new">
      <textarea
        id="txtarea"
        className="newnote"
        placeholder="Start a new note..."
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        maxLength={500}
        required={true}
      ></textarea>
      <div className="note-bottom">
        <p>{length} remaining</p>
        <div className="buttons-bottom">
          <button className="btn btn-bottom" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-bottom" type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
