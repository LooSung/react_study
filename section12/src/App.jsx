import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

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
            <img src={getEmotionImage(1)} />
            <img src={getEmotionImage(2)} />
            <img src={getEmotionImage(3)} />
            <img src={getEmotionImage(4)} />
            <img src={getEmotionImage(5)} />
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/new'}>New</Link>
                <Link to={'/diary'}>Diary</Link>
            </div>
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
