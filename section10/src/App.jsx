import './App.css';

import { useRef, useReducer, useCallback } from 'react';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
    {
        id: 0,
        isDone: false,
        content: 'React Study',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: 'Java Study',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: 'TypeScirpt Study',
        date: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) =>
                item.id === action.data.targetId
                    ? { ...item, isDone: !item.isDone }
                    : item
            );
        case 'DELETE':
            return state.filter((item) => item.id !== action.data.targetId);
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate =
        ((useCallback = (content) => {
            dispatch({
                type: 'CREATE',
                data: {
                    id: idRef.current++,
                    isDone: false,
                    content: content,
                    date: new Date().getTime(),
                },
            });
        }),
        []);

    const onUpdate =
        ((useCallback = (targetId) => {
            dispatch({
                type: 'UPDATE',
                data: { targetId: targetId },
            });
        }),
        []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: 'DELETE',
            data: { targetId: targetId },
        });
    }, []);

    return (
        <div className='App'>
            {/* /<Exam /> */}
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
