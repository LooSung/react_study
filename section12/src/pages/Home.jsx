import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import DairyList from '../components/DiaryList';

// 해당 날짜에 일기가 포함되어있는지 확인하기 위한 함수.
const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();

    return data.filter(
        (item) => beginTime <= item.createdDate && item.createdDate <= endTime
    );
};

const Home = () => {
    // 현재 Date 설정
    const [pivotDate, SetPivotDate] = useState(new Date());

    // Main Page에 작성된 Diary Item State 가져오기
    const data = useContext(DiaryStateContext);
    // Main Page에서 가져온 Diary Item State를 가지고 현재 년, 월에 포함되는데이터.
    const monthlyData = getMonthlyData(pivotDate, data);

    const onIncreeseMonth = () => {
        SetPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };

    const onDecreseMonth = () => {
        SetPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${
                    pivotDate.getMonth() + 1
                }월`}
                leftChild={<Button onClick={onDecreseMonth} text={'<'} />}
                rightChild={<Button onClick={onIncreeseMonth} text={'>'} />}
            />
            <DairyList data={monthlyData} />
        </div>
    );
};

export default Home;
