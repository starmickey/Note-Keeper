import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes"
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState(defaultNotes);
    let nextNoteKey = notes.length + 1;

    function createNote(title, content) {
        const newNote = {
            key: nextNoteKey++,
            title: title,
            content: content
        }
        setNotes(prevNotes => [...prevNotes, newNote]);
    }

    
    function deleteNote(id) {
        setNotes(prevNotes => prevNotes.filter(note => note.key !== id));
    }

    return (
        <div>
            <Header />
            <CreateArea createNote={createNote}/>
            {notes.map(note =>
                <Note
                    id={note.key}
                    key={note.key}
                    title={note.title}
                    content={note.content}
                    deleteNote={deleteNote}
                />

            )}
            <Footer />

        </div>
    )
}

export default App;