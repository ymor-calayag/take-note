import React from "react";

function CreateNote() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Type note here" rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
