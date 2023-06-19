import React from "react";

function Note(props) {
    return(
        <div className="note">
            <p className="note-text">{props.name}</p>
            <div className="note-bottom">
              <p>{props.time}</p>
              <button className="trash" onClick={() => props.deleteNote(props.id)}>
                <img src={"https://cdn-icons-png.flaticon.com/512/860/860778.png"} alt="delete note" />
              </button>
            </div>
        </div>
    );
}
export default Note;