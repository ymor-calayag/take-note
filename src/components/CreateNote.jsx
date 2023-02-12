import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleNoteInput(evt) {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;

    setNote((prevValue) => {
      if (fieldName === "title") {
        return {
          title: fieldValue,
          content: prevValue.content,
        };
      } else if (fieldName === "content") {
        return {
          title: prevValue.title,
          content: fieldValue,
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleNoteInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleNoteInput}
          name="content"
          placeholder="Type note here"
          rows="3"
          value={note.content}
        />
        <button
          onClick={(evt) => {
            evt.preventDefault();
            props.onAdd(note);
            setNote({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
