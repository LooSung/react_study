import './App.css';

import Viewer from './components/Viewer';
import Controller from './components/Controller';

import { useState } from 'react';

function App() {
    const [count, setCounter] = useState(0);

    const onClickBtn = (value) => {
        setCounter(count + value);
    };

    return (
        <div className='App'>
            <h1> Simple Counter</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller onClickBtn={onClickBtn} />
            </section>
        </div>
    );
}

export default App;
