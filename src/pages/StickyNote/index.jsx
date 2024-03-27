import React, { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import "./styles/index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Note from "./components/Note.jsx";
const Index = () => {
  const [noteId, setNoteId] = useState(0);
  const [noteDataList, setNoteDataList] = useState([]);
  const [notes, updateNotes] = useState(noteDataList);
  const [noteData, setNoteData] = useState({
    id: noteId,
    title: "",
    content: "",
  });
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNoteDataList(storedNotes);
      setNoteId(storedNotes.length);
      updateNotes(storedNotes);
    }
  }, []);

  const handleAddNote = () => {
    const newNote = {
      id: noteId,
      title: noteData.title,
      content: noteData.content,
    };
    setNoteDataList([...noteDataList, newNote]);
    setNoteId(noteId + 1);
    localStorage.setItem("notes", JSON.stringify([...noteDataList, newNote]));
    setNoteData({ id: noteId, title: "", content: "" });
  };
  const handleOnDragEnd = (result) => {
    const itmes = Array.from(notes);
    const [reorderedNote] = itmes.splice(result.source.index, 1);
    itmes.splice(result.destination.index, 0, reorderedNote);
    updateNotes(itmes);
  };
  return (
    <>
      <Header />
      <div className="sticky-note">
        <div className="sticky-note-header">
          <div>
            <h2>Sticky Note</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddNote();
            }}
          >
            <div>
              <label htmlFor="title">Note title</label>
              <input
                type="text"
                onChange={(e) => {
                  setNoteData({ ...noteData, title: e.target.value });
                }}
                value={noteData.title}
                name="title"
                id="title"
              />
            </div>
            <div>
              <label htmlFor="content">Note content</label>
              <textarea
                name="content"
                onChange={(e) => {
                  setNoteData({ ...noteData, content: e.target.value });
                }}
                id="content"
                cols="30"
                rows="10"
                value={noteData.content}
              ></textarea>
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="sticky-note-content">
            <Droppable droppableId="notes">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="note-container"
                >
                  {notes?.map((note, index) => (
                    <Draggable
                      key={note.id.toString()}
                      draggableId={note.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="note-wrapper"
                        >
                          <Note index={index} note={note} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Index;
