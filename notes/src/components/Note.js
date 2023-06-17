import React from "react";

function Note(props) {
    
    return(
        <div className="note">
            <textarea className="note-text">{props.name}</textarea>
            <div className="note-bottom">
              <p>{props.time}</p>
              <button className="trash">
                <img src={"https://cdn-icons-png.flaticon.com/512/860/860778.png"} alt="delete note" />
              </button>
            </div>
          </div>
    );
}
export default Note;