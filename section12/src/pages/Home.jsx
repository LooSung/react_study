import Header from '../components/Header';
import Button from '../components/Button';
import DairyList from '../components/DiaryList';

const Home = () => {
    return (
        <div>
            <Header
                title={'2024년 2월'}
                leftChild={<Button text={'<'} />}
                rightChild={<Button text={'>'} />}
            />
            <DairyList />
        </div>
    );
};

export default Home;
