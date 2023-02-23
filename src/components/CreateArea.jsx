import React from "react";

function CreateArea(props) {
    return (<form>
        <input name="title" placeholder="Write your title" />
        <textarea name="content" placeholder="Write some text" rows="3"></textarea>
        <button type="submit">Add</button>
    </form>);
}

export default CreateArea;