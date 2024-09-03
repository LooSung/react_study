import { useContext } from 'react';

import './List.css';
import TodoItem from './TodoItem';
import { TodoContext } from '../App';

import { useState, useMemo } from 'react';

const List = () => {
    const [search, setSearch] = useState('');

    const { todo } = useContext(TodoContext);

    // Memorization -> 의존성배열 : deps (이 Count연산은 1번만 실행되게 만들었다.)
    // 구조분해 할당해서 어떤 데이터가 Memory에 저장 될 것인지 선정
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => {
            todo.isDone;
        }).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);
    // 값을 가져올 것에 대한 설정.

    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    const getFilteredData = () => {
        if (search === '') {
            return todos;
        }

        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filterTodos = getFilteredData();

    return (
        <div className='List'>
            <h4>TO-DO List 🥸</h4>
            <div>
                <div>{totalCount}</div>
                <div>{doneCount}</div>
                <div>{notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder='검색어를 입력하세요'
            ></input>
            <div className='todos_wrapper'>
                {filterTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;
