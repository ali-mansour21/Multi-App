import React, { useState } from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Note = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(note.id, editedNote.title, editedNote.content);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedNote({
      title: note.title,
      content: note.content,
    });
  };

  const handleTitleChange = (event) => {
    setEditedNote({
      ...editedNote,
      title: event.target.value,
    });
  };

  const handleContentChange = (event) => {
    setEditedNote({
      ...editedNote,
      content: event.target.value,
    });
  };

  return (
    <div className="card">
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedNote.title}
              onChange={handleTitleChange}
            />
            <textarea
              value={editedNote.content}
              onChange={handleContentChange}
            />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <h3>{note.title}</h3>
            <div className="actions">
              <FontAwesomeIcon icon={faEdit} onClick={handleEditClick} />
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => {
                  onDelete(note.id);
                }}
              />
            </div>
          </>
        )}
      </div>
      <p>{note.content}</p>
    </div>
  );
};

export default Note;
