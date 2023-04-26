import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
    return (
        <form>
            <input type="title" placeholder={'Title'}/>
            <input type="summanry" placeholder={"Summary"}/>
            <input type="/file" />
            <ReactQuill />
            <button style={{marginTop: '5px'}}>Create Post</button>
        </form>
    );
}