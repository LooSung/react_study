import { useState } from 'react';

const Register = () => {
    // 통합 State를 관리
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    // 통합 State set
    const onChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <div>
                <input
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
        </div>
    );
};

export default Register;
