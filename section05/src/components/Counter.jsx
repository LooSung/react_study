import { useState } from 'react';

// Re-Rendering 되는 경우
// 1. state가 변경 될때
// 2. probs가 변경 될때
// 3. 부모 Componet가 변경 될때

// 자식 Component
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
