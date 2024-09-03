import { memo } from 'react';
import { useContext } from 'react';

import './TodoItem.css';
import { TodoContext } from '../App';

const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className='TodoItem'>
            <input
                onChange={onChangeCheckbox}
                readOnly
                checked={isDone}
                type='checkbox'
            />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>Delete</button>
        </div>
    );
};

// 고차 컴포넌트 (HOC 패턴 : https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/)
// memo는 얕은비교 (===)를 하기 때문에 객체 타입(function, {}, [])의 값은 props가 바뀌었다 판단 할 수 도 있다.
// export default memo(TodoItem, (preProps, nextProps) => {
//     // 반환 값에 따라, Props가 변경되었는지 안되었는지 확인해야한다.
//     // True -> Props 변경, False -> Props 변경 되지 않음

//     if (preProps.id !== nextProps.id) return false;
//     if (preProps.isDone !== nextProps.isDone) return false;
//     if (preProps.content !== nextProps.content) return false;
//     if (preProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);
