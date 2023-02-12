import React, { useState } from "react";
import Heading from "../components/Heading.jsx";
import Footer from "../components/Footer.jsx";
import Note from "../components/Note.jsx";
import CreateNote from "../components/CreateNote.jsx";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function handleSubmit(note) {
    setAllNotes((prevValue) => {
      return [...prevValue, note];
    });
    console.log(allNotes);
  }

  return (
    <div>
      <Heading />
      <CreateNote onAdd={handleSubmit} />
      {allNotes.map((singleNote, index) => {
        return (
          <Note
            key={index}
            noteTitle={singleNote.title}
            noteContent={singleNote.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
