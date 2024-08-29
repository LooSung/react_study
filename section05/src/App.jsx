import './App.css';
import { useState } from 'react';

// Re-Rendering 되는 경우
// 1. state가 변경 될때
// 2. probs가 변경 될때
// 3. 부모 Componet가 변경 될때

// 자식 Componet
const Bulb = () => {
    const [light, setLight] = useState('OFF');
    return (
        <div>
            {light === 'ON' ? (
                <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
            ) : (
                <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
            )}
            <button
                onClick={() => {
                    setLight(light === 'ON' ? 'OFF' : 'ON');
                }}
            >
                {light === 'ON' ? '끄기' : '켜기'}
            </button>
        </div>
    );
};

// 자식 2 Component
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button>
                onClinc
                {() => {
                    setCount(count + 1);
                }}
            </button>
        </div>
    );
};

// 부모 Component
function App() {
    return (
        <>
            <Bulb />
            <Counter />
        </>
    );
}

export default App;
