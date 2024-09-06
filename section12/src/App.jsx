import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

import { getEmotionImage } from './util/get-emotion-images';

// 1. "/" 모든 일기를 조회하는 Home Page
// 2. "/new" : 새로운 일기를 작성하는 New Page
// 3. "/diary" : 일기장을 상세히 조회하는 Diary Page

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

function App() {
    const nav = useNavigate();

    // 버튼을 이용해서 특정 페이지로 이동을 해야한다면 Navigate를 이용.
    const onClickButton = () => {
        nav('/new');
    };

    return (
        <>
            <Header
                title={'Header'}
                leftChild={<Button text={'Left'} />}
                rightChild={<Button text={'Right'} />}
            />
            <Button text={''} onClick={() => {}} />
            <Button text={''} type={'POSITIVE'} onClick={() => {}} />
            <Button text={''} type={'NEGATIVE'} onClick={() => {}} />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/new' element={<New />}></Route>
                <Route path='/diary/:id' element={<Diary />}></Route>
                <Route path='*' element={<Notfound />}></Route>
            </Routes>
        </>
    );
}

export default App;
