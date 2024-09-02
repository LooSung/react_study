import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState('');
    const contentRef = useRef();

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
