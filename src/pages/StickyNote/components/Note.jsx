import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Note = ({ note }) => {
  console.log(note);
  return (
    <div className="card">
      <div>
        <h3>{note.title}</h3>
        <div className="actions">
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
      <p>{note.content}</p>
    </div>
  );
};

export default Note;
