import './Editor.css';
import { useState, useRef, useContext } from 'react';
import { TodoContext } from '../App';

const Editor = () => {
    const [content, setContent] = useState('');
    const contentRef = useRef();

    // Using Context
    const { onCreate } = useContext(TodoContext);

    const onChangeContent = (event) => {
        setContent(event.target.value);
    };

    const onSubmit = () => {
        if (content == '') {
            contentRef.current.focus();
            return;
        }

        onCreate(content);
        setContent('');
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div className='Editor'>
            <input
                ref={contentRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder='새로운 Todo...'
            ></input>
            <button onClick={onSubmit}>Add</button>
        </div>
    );
};

export default Editor;
