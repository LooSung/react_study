import './App.css';

import {
    useRef,
    useReducer,
    useCallback,
    createContext,
    memo,
    useMemo,
} from 'react';

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

// 계속되는 App() 컴포넌트의 Re-Renderign을 피하기 위해서
export const TodoDispatchContext = createContext();
export const TodoStateContext = createContext();

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

    const onDelete =
        ((useCallback = (targetId) => {
            dispatch({
                type: 'DELETE',
                data: { targetId: targetId },
            });
        }),
        []);

    const memorizedDispatch = useMemo(() => {
        return {
            onCreate,
            onUpdate,
            onDelete,
        };
    }, []);

    // Provide Context
    return (
        <div className='App'>
            {/* /<Exam /> */}
            <Header />
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memorizedDispatch}>
                    <Editor />
                    <List />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
