import './App.css';

import { useState, useRef } from 'react';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
// import Exam from './components/Exam';

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

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodos([newTodo, ...todos]);
    };

    const onUpdate = (targetId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === targetId) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                }

                return todo;
            })
        );
    };

    // 3항 연산자 사용
    // const onUpdate = (targetId) => {
    //     setTodos(
    //         todos.map((todo) => {
    //             todo.id == targetId ? { ...todo, isDone: !todo.isDone } : todo;
    //         })
    //     );
    // };

    const onDelete = (targetId) => {
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

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
