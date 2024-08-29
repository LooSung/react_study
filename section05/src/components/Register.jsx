import { useState, useRef } from 'react';

const Register = () => {
    // 통합 State를 관리
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    // 랜더링에 영향을 받지 않는 기능을 사용할때 적용하자.
    const countRef = useRef();
    const inputRef = useRef();

    // 통합 State set
    const onChange = (event) => {
        countRef.current++;
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === '') {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name='name'
                    value={input.name}
                    onChange={onChange}
                    placeholder={'이름'}
                />
            </div>
            <div>
                <input
                    type='date'
                    name='birth'
                    value={input.birth}
                    onChange={onChange}
                />
            </div>
            <div>
                <select
                    name='country'
                    value={input.country}
                    onChange={onChange}
                >
                    <option></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
            </div>
            <div>
                <textarea name='bio' value={input.bio} onChange={onChange} />
            </div>

            <div>
                <button> onClick=(onSubmit) </button>
            </div>
        </div>
    );
};

export default Register;
