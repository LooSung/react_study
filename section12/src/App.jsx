import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

// 1. "/" 모든 일기를 조회하는 Home Page
// 2. "/new" : 새로운 일기를 작성하는 New Page
// 3. "/diary" : 일기장을 상세히 조회하는 Diary Page
// 4. "/edit" : 일기장을 수정하는 Edit Page

// 1. URL Parameter
// import { useSearchParams } from 'react-router-dom';
// const [params, setParams] = useSearchParams();
// parms.get("value")
// Client : "https://localhost/etc/?value=hello"

// 2. Query String ->
// <Route path='/diary/:id' element={<Diary />}></Route>
// import { useParams } from 'react-router-dom';
// const params = useParams();
// div>{params.id}번 일기입니다.</div>;
// Client : "https://localhost/etc/1"

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime,
        emotionId: 1,
        content: '내용이다.',
    },
    {
        id: 2,
        createdDate: new Date().getTime,
        emotionId: 2,
        content: '내용이다. 2',
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [data, ...state];
        case 'UPDATE':
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : data
            );
        case 'DELETE':
            return state.filter(
                (item) => Stirng(item.id) !== String(action.data.id)
            );
        default:
            return;
    }
}

const DiaryStateContext = createContext();
const DiartDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: 'UPDATE',
            data: {
                id,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: 'DELTE',
            data: {
                id,
            },
        });
    };

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiartDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/new' element={<New />}></Route>
                        <Route path='/diary/:id' element={<Diary />}></Route>
                        <Route path='/edit/:id' element={<Edit />}></Route>
                        <Route path='*' element={<Notfound />}></Route>
                    </Routes>
                </DiartDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
