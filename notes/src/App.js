import React, { useState } from "react";
import Note from "./components/Note";
import NewNote from "./components/NewNote";
import { nanoid } from "nanoid";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  function addNote(name, time) {
    const newNote = {id: `note-${nanoid}`, name, time};
    setNotes([...notes, newNote]);
  }
  const noteList = notes
  .map((note) => (
    <Note id={note.id} name={note.name} key={note.id} time={note.time} />
  ))
  return (
    <div className="App">
      <header>
        <h1>Notes</h1>
        <button className="btn btn-top">Toggle mode</button>
      </header>
      <main>
        <input type="text" className="searchbar" placeholder="type to search..." />
        <div className="notes">
          
          
          {noteList}

          <NewNote addNote={addNote}/>
        </div>
      </main>
    </div>
  );
}

export default App;
