import { useState, useRef } from 'react';

// 3가지 Hook과 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 순 없다.
// 3. Custom Hook을 직접 만들 수 있다.

// 접두사에 use라는 키워드를 사용하면 Custom Hook을 만들 수있다.
function useInput() {
    const [input, setInput] = useState('');

    const onChange = (event) => {
        setInput(event.target.value);
    };

    return [input, onChange];
}
