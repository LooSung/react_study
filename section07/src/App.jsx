import './App.css';

import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even'; // UnMount Implements

import { useState, useEffect, useRef } from 'react';

function App() {
    // React의 State는 비동기로 움직인다!
    const [count, setCounter] = useState(0);
    const [input, setInput] = useState('');

    const isMount = useRef(false);

    // 1. LifeCycle - Mount
    useEffect(() => {
        console.log('Mount');
    }, []);

    // 2. LifeCycle - Update
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
        }
        console.log('Update');
    });

    const onClickBtn = (value) => {
        setCounter(count + value);
    };

    return (
        <div className='App'>
            <h1> Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value);
                    }}
                ></input>
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickBtn={onClickBtn} />
            </section>
        </div>
    );
}

export default App;
