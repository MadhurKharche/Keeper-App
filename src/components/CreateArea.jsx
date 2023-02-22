import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function CreateArea(props) {
  const [UnExpanded, setUnExpanded] = useState(true);
  const [titlePlaceholder, setTitlePlaceHolder] = useState("Take a Note");
  const [note, setNote] = useState({ title: "", content: "" });

  const textStyle = {
    transition: "all 2s",
    display: "flex"
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });

    console.log(note);
  }

  function takeNote() {
    setUnExpanded(false);
    setTitlePlaceHolder("Title");
  }

  function handleSubmit(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setUnExpanded(true);
    event.preventDefault();
  }

  return (
    <div style={textStyle}>
      <form>
        <input
          name="title"
          placeholder={titlePlaceholder}
          onChange={handleChange}
          onClick={takeNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          style={
            UnExpanded
              ? { display: "none" }
              : {
                  /*NoStyle*/
                }
          }
          onChange={handleChange}
          value={note.content}
        />
        <button
          style={
            UnExpanded
              ? { display: "none" }
              : {
                  fontSize: "30px"
                }
          }
          onClick={handleSubmit}
        >
          <span>+</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
