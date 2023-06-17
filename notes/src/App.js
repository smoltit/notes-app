import React from "react";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Notes</h1>
        <button className="btn btn-top">Toggle mode</button>
      </header>
      <main>
        <input type="text" className="searchbar" placeholder="type to search..." />
        <div className="notes">
          <div className="note">
            <p>My note</p>
            <div className="note-bottom">
              <p>17/06/2023</p>
              <button className="trash">
                <img src={"https://cdn-icons-png.flaticon.com/512/860/860778.png"} alt="" />
              </button>
            </div>
          </div>
          <div className="note">
            <p>My note</p>
            <div className="note-bottom">
              <p>17/06/2023</p>
              <button className="trash">
                <img src={"https://cdn-icons-png.flaticon.com/512/860/860778.png"} alt="" />
              </button>
            </div>
          </div>
          <div className="note">
            <p>My note</p>
            <div className="note-bottom">
              <p>17/06/2023</p>
              <button className="trash">
                <img src={"https://cdn-icons-png.flaticon.com/512/860/860778.png"} alt="" />
              </button>
            </div>
          </div>
          <div className="note">
            <textarea className="newnote" placeholder="Start a new note..."></textarea>
            <div className="note-bottom">
              <p>200 remaining</p>
              <div className="buttons-bottom">
                <button className="btn btn-bottom">Cancel</button>
                <button className="btn btn-bottom">Save</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
