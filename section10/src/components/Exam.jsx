import { act, useReducer } from 'react';

// reducer : 변환기 -> 상태를 실제로 변화시키는 변환기 역활
function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + action.data;
        case 'DECREASE':
            return state - action.data;
        default:
            return state;
    }
}

const Exam = () => {
    // dispatch : 발송하다, 급송하다 -> 상태 변화가 있어야한다는 사실을 알린다는 함수.
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수 -> 상태가 어떻게 변화되길 원하는지 적어야한다. (액션객체)
        dispatch({
            type: 'INCREASE', // 증가
            data: 1, // 1씩 감소
        });
    };

    const onClickMinus = () => {
        // 인수 -> 상태가 어떻게 변화되길 원하는지 적어야한다. (액션객체)
        dispatch({
            type: 'DECREASE', // 감소
            data: 1, // 1씩 감소
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;
