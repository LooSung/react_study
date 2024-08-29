import './Main.css';

//JSX 문법 -> ex) <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
// 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. -> if / for 과 같은 기능은 안된다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. -> Object, Boolean , Undifined, Null 과 같은건 안된다.
// 3.모든 태그는 닫혀 있어야한다. -> <></> , <ex />
// 4. 최상위 태그는 반드시 하나여야 한다. -> 여기서는 <main></main>, 만약에 없다면, <></> 빈 태그를 해준다.

const Main = () => {
    const user = {
        name: 'A',
        isLogin: true,
    };

    if (user.isLogin) {
        return <div className='logout'>로그인</div>;
    } else {
        <div>로그아웃</div>;
    }

    // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
