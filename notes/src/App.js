import React, { useState } from "react";
import Note from "./components/Note";
import NewNote from "./components/NewNote";
import { nanoid } from "nanoid";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  function addNote(name, time) {
    const newNote = {id: nanoid(), name, time, key: nanoid()};
    setNotes([...notes, newNote]);
    console.log(notes);
  }
  const noteList = notes
  .map((note) => (
    <Note id={note.id} name={note.name} time={note.time} deleteNote={deleteNote} />
  ));
  function deleteNote(id) {
    const remainingNotes = notes.filter((note) => id != note.id);
    setNotes(remainingNotes);
  }
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
