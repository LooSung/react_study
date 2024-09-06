import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DairyItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ data }) => {
    const nav = useNavigate();

    // 1. useState Hook 사용해서 바뀔때마다 아이템이 변경하게 설정
    const [sortType, setSortType] = useState('latest');
    // 2. select에 onChange Event 만들기
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };
    // 3. Sorted 하는 함수 만들기
    const getSortedDate = () => {
        return data.toSorted((a, b) => {
            if (sortType === 'oldest') {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };
    // 4. Re-Redering 할때 Data Props를 가져올 때마다 Sort 해주기
    const sortedData = getSortedDate();

    return (
        <div className='DiaryList'>
            <div className='menu_bar'>
                <select onChange={onChangeSortType}>
                    <option value={'latest'}>최신순</option>
                    <option value={'oldest'}>오래된 순</option>
                </select>
                <Button
                    onClick={() => nav(`/new/`)}
                    text={'새로운 일기 쓰기'}
                    type={'POSITIVE'}
                />
            </div>
            <div className='list_wrapper'>
                {sortedData.map((item) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default DiaryList;
