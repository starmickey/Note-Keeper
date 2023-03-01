import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';



// Create Area to be displayed when we start the app

function CompressedCreateArea(props) {
    return (
        <form className="create-note">
            <textarea
                name="content"
                placeholder="Write some text"
                rows="1"
                onClick={props.handleClickFunction}>
            </textarea>
        </form>
    )
}


// Create area to be displayed when we click on the CompressedArea

function ExpandedCreateArea(props) {
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
        props.createNote(title, content);
        setTitle("");
        setContent("");
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="create-note">
            <input
                name="title"
                type="text"
                placeholder="Write your title"
                value={title}
                onChange={handleTitleChange} />
            <textarea name="content" placeholder="Write some text" rows="3" value={content} onChange={handleContentChange}></textarea>
            <Zoom in={true}>
                <button type="submit">
                    <AddIcon />
                </button>
            </Zoom>
        </form>
    );

}


function CreateArea(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            {isExpanded ?
                <ExpandedCreateArea /> :
                <CompressedCreateArea
                    handleClickFunction={expand}
                />}
        </div>
    )
}

export default CreateArea;