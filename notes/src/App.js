import React, { useState } from "react";
import Note from "./components/Note";
import NewNote from "./components/NewNote";

function App(props) {
  const [notes, setNotes] = useState(props.start);
  const [search, setSearch] = useState("");

  function addNote(name, time, id) {
    const newNote = {id, name, time, key: id};
    var elements = document.getElementsByClassName("note-new");
    if (elements.length > 1) {
      elements[1].classList.remove("note-new");
    }
    setNotes([...notes, newNote]);
  }
  function noteList() {
    return notes
    .filter(text => text.name.toLowerCase().includes(search))
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
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }
  function searchNotes(event) {
    setSearch(event.target.value);
    console.log(search);
  }
  return (
    <div className="App">
      <header>
        <h1>Notes</h1>
        <button className="btn btn-top" onClick={toggleMode}>Toggle mode</button>
      </header>
      <main>
        <input type="text" className="searchbar" onChange={searchNotes} placeholder="type to search..." />
        <div className="notes">
          
          {noteList()}

          <NewNote addNote={addNote}/>
        </div>
      </main>
    </div>
  );
}

export default App;
