import React, { useState } from "react";
import Note from "./components/Note";
import NewNote from "./components/NewNote";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(name, time, id) {
    const newNote = {id, name, time, key: id};
    setNotes([...notes, newNote]);
  }
  function noteList() {
    return notes
    .map((note) => (
      <Note id={note.id} name={note.name} time={note.time} deleteNote={deleteNote} />
    ));
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      const remainingNotes = prevNotes.filter(note => id !== note.id);
      return remainingNotes;
    });
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
          
          
          {noteList()}

          <NewNote addNote={addNote}/>
        </div>
      </main>
    </div>
  );
}

export default App;
