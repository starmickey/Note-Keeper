import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleSubmit(event) {
        const title = event.target[0].value;
        const content = event.target[1].value;
        props.createNoteMethod(title, content);
        setTitle("");
        setContent("");
        event.preventDefault();
    }

    return (<form onSubmit={handleSubmit}>
        <input
            name="title"
            type="text"
            placeholder="Write your title"
            value={title}
            onChange={handleTitleChange}/>
        <textarea name="content" placeholder="Write some text" rows="3" value={content} onChange={handleContentChange}></textarea>
        <button type="submit">Add</button>
    </form>);
}

export default CreateArea;