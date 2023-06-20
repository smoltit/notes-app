import React, { useState } from "react";

function Note(props) {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(props.name);
  const [length, setLength] = useState(500 - text.length);

  const clickHandler = (event) => {
    // window.getSelection()?.removeAllRanges();
    if (event.detail === 2) {
      setEditing(true);
    }
  };

  function handleSubmit() {
    if (text.length > 0) {
      props.updateNoteText(props.id, text); // Notify the parent component about the updated note text
      setEditing(false);
    }
  }

  function handleCancel() {
    setEditing(false);
    setText(props.name);
  }

  function handleInputChange(event) {
    setText(event.target.value);
    setLength(500 - event.target.value.length);
  }

  const viewTemplate = (
    <div className="note" onClick={clickHandler}>
      <p className="note-text">{props.name}</p>
      <div className="note-bottom">
        <p>{props.time}</p>
        <button className="trash" onClick={() => props.deleteNote(props.id)}>
          <img src={"https://cdn-icons-png.flaticon.com/512/860/860778.png"} alt="delete note" />
        </button>
      </div>
    </div>
  );
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    } else if (event.key === "Escape") {
      event.preventDefault();
      handleCancel();
    }
  }
  const editingTemplate = (
    <div className="note">
      <textarea
        className="editingtext"
        value={text}
        onChange={handleInputChange}
        maxLength={500}
        required={true}
        readOnly={false}
        onKeyDown={handleKeyDown}
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

  return isEditing ? editingTemplate : viewTemplate;
}

export default Note;
