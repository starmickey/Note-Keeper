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

    return (
        <div>
            <Header />
            <CreateArea createNoteMethod={createNote}/>
            {notes.map(note =>
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />

            )}
            <Footer />

        </div>
    )
}

export default App;