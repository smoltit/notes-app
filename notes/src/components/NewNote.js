import React, { useState } from "react";

function NewNote(props) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  let currentDate = `${day}/${month}/${year}`;

  const [length, setLength] = useState(500);
  function handleSubmit() {
      if (document.getElementById('txtarea').value.length > 0) {
        var text = document.getElementById("txtarea").value;
        props.addNote(text, currentDate);
        document.getElementById("txtarea").value = "";
        setLength(500);
      }
  }
  function handleCancel() {
    document.getElementById("txtarea").value = "";
    setLength(500);
  }
  function textLength() {
    setLength(500 - document.getElementById('txtarea').value.length);
  }
  return(
      <div className="note">
          <textarea id="txtarea" className="newnote" placeholder="Start a new note..." onChange={textLength} maxLength={500} required={true}></textarea>
          <div className="note-bottom">
            <p>{length} remaining</p>
            <div className="buttons-bottom">
              <button className="btn btn-bottom" onClick={handleCancel}>Cancel</button>
              <button className="btn btn-bottom" type="submit" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
  );
}
export default NewNote;