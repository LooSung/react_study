import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';

// 부모 Component
function App() {
    const buttonProps = {
        text: '메일',
        color: 'red',
    };
    return (
        <>
            <Button {...buttonProps} />
            <Button text={'카페'} />
            <Button text={'블로그'}>
                <Header />
            </Button>
            <Button>
                <div>자식요소</div>
            </Button>
        </>
    );
}

export default App;
