import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('이름');
    const [birth, setBirth] = useState('');
    const [country, setcountry] = useState('');
    const [bio, setBio] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeBirth = (event) => {
        setBirth(event.target.value);
    };

    const onChangeCountry = (event) => {
        setcountry(event.target.value);
    };

    const onChangeBio = (event) => {
        setBio(event.target.value);
    };

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder={'이름'}
                />
            </div>
            <div>
                <input
                    type='date'
                    value={birth}
                    onChange={onChangeBirth}
                    placeholder={'생년월일'}
                />
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} />
            </div>
        </div>
    );
};

export default Register;
