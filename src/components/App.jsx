import React from "react";
import Heading from "../components/Heading.jsx";
import Footer from "../components/Footer.jsx";
import Note from "../components/Note.jsx";
import CreateNote from "../components/CreateNote.jsx";

function App() {
  return (
    <div>
      <Heading />
      <CreateNote />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
