import './App.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

import Button from './components/Button';
import Header from './components/Header';

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
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/new' element={<New />}></Route>
                <Route path='/diary/:id' element={<Diary />}></Route>
                <Route path='/edit/:id' element={<Edit />}></Route>
                <Route path='*' element={<Notfound />}></Route>
            </Routes>
        </>
    );
}

export default App;
