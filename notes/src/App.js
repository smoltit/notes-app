import React, { useState } from "react";
import Note from "./components/Note";
import NewNote from "./components/NewNote";

function App(props) {
  const [notes, setNotes] = useState(props.start);
  const [search, setSearch] = useState("");

  function addNote(name, time, id) {
    const newNote = { id, name, time, key: id };
    var elements = document.getElementsByClassName("note-new");
    if (elements.length > 1) {
      elements[1].classList.remove("note-new");
    }
    setNotes([...notes, newNote]);
    console.log(notes);
  }
  function updateNoteText(id, newText) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, name: newText };
        }
        return note;
      });
    });
  }
  function noteList() {
    return notes
      .filter((text) => text.name.toLowerCase().includes(search))
      .map((note) => (
        <Note
          key={note.id}
          id={note.id}
          name={note.name}
          time={note.time}
          deleteNote={deleteNote}
          updateNoteText={updateNoteText}
        />
      ));
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      const remainingNotes = prevNotes.filter(note => id !== note.id);
      console.log(notes);
      return remainingNotes;
    });
  }
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }
  function searchNotes(event) {
    setSearch(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.activeElement.blur();
    } else if (event.key === "Escape") {
      setSearch("");
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Notes</h1>
        <button className="btn btn-top" onClick={toggleMode}>Toggle mode</button>
      </header>
      <main>
        <input type="text" className="searchbar" value={search} onKeyDown={handleKeyDown} onChange={searchNotes} placeholder="type to search..." />
        <div className="notes">
          
          {noteList()}

          <NewNote addNote={addNote}/>
        </div>
      </main>
    </div>
  );
}

export default App;
